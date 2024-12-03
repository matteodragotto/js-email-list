

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ul = document.getElementById('mails');
const mailNumber = 0;
let emailList = [];
const btn = document.getElementById('refresh');

refresh();

btn.addEventListener('click', refresh)

function refresh () {
  ul.innerHTML = ''
  emailList = []

  function getMail() {

    axios.get(endpoint)
    .then(response => {
      if (response.data.success){
        const email = response.data.response;      
        emailList.push(email)
        if (emailList.length === 10) {
          for (let mail of emailList) {
            printMail(mail)
          }
        }

        
  
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
  console.log(emailList);
  
}


