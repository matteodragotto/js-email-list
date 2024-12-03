

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ul = document.getElementById('mails')
const mailNumber = 0;
const emailList = []
const btn = document.getElementById('refresh')

refresh();

btn.addEventListener('click', refresh)

function refresh () {
  ul.innerHTML = ''

  function getMail() {

    axios.get(endpoint)
    .then(response => {
      if (response.data.success){
        const email = response.data.response;      
        
        printMail(email)      
  
      }  
    
    })
  
    .catch(err => {
      console.log(err);
    })
  }
  
  
  function randomMail(counter) {
    while (counter < 10) {
      getMail()
      counter++
    }
    
  }
  
  function printMail (mail) {
    let li = document.createElement('li')
    li.innerText = mail
    ul.append(li)
  }
    
  randomMail(mailNumber)
}


