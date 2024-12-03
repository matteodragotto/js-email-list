

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const ul = document.getElementById('mails')
let mail;
const mailNumber = 0;


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
