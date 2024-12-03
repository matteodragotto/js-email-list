

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const mailList = [];

randomMail(mailList);

function getMail() {

  axios.get(endpoint)
  .then(response => {
  if (response.data.success){
    const emails = response.data.response;
    console.log(emails);
    
  }  
  
  })

  .catch(err => {
    console.log(err);
    printMessage('Errore! ' + err.message)
  })
}


function randomMail(array) {
  while (array.length < 10) {
    array.push(getMail())
  }
}
  