
var money = 0;
var devise = 'francs';
var divMoney=document.getElementById('argent');

divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 

/**affichons ce qui nous reste en argent */
function updateMoney() {
    /**div contenant les informations sur l'argent restant */
    divMoney.innerHTML='';
    divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 
}



