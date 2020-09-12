
var money = 100;
var devise = 'francs';
var divMoney=document.getElementById('argent');

divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 

/**affichons ce qui nous reste en argent */
function updateMoney() {
    /**div contenant les informations sur l'argent restant */
    divMoney.innerHTML='';
    divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 
}

/**payons les employés... */
function jourDePaye() {
    money -= valueNumberOfWorker * 5
    console.log(valueNumberOfWorker)
    /**mettons à jour l'affichage de l'argent restant */
    updateMoney();
}

function saleTagliatelles() {
    var amountSale = 
    valueTagliatelle -= 1;
    money += 4 ;
    updateMoney();
    loadProductionOnScreen();
}