

const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';
const mailList = [];


function getMail() {

  axios.get(endpoint)
  .then(response => {
  console.log(response.data);
  if (response.data.success){
    const email = response.data.response;
    console.log(email);
  }  
  
  })

  .catch(err => {
    console.log(err);
    printMessage('Errore! ' + err.message)
  })
}



  