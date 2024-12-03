

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ul = document.getElementById('mails')
const mailNumber = 0;


function getMail() {

  axios.get(endpoint)
  .then(response => {
  if (response.data.success){
    const email = response.data.response;
    console.log(email);    
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
    let li = document.createElement('li')
    ul.append(li)
    
  }
}
  

randomMail(mailNumber)