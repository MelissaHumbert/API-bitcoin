const url = 'https://blockchain.info/ticker';

/************creer une requete *********/

function actuPrixBit (){
//creer un objet
let requete = new XMLHttpRequest(); 
//GET ou POST et URL API
requete.open('GET', url);
//reponse souhaitée en json
requete.responseType = 'json';
//envoi de la requete
requete.send();

//à la reception de la reponse, on execute une fonction anonyme
requete.onload = function () {
  //Si la requete est executée 
  if (requete.readyState === XMLHttpRequest.DONE){
    //et qu'elle fonctionne
    if(requete.status === 200){
      //on stock la response
      let reponse = requete.response;
      let euro = reponse.EUR.last;
      document.querySelector('#price_label').textContent = euro;
    }
    else {
    alert("Un problème est survenu, merci de réessayer plus tard");
    } 
  }
}
}
setInterval(actuPrixBit, 5000);