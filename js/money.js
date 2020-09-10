

divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 

/**affichons ce qui nous reste en argent */
function updateMoney() {
    /**div contenant les informations sur l'argent restant */
    divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 
}

/**payons les employés... */
function jourDePaye() {
    money -= travailleur * 5
    /**mettons à jour l'affichage de l'argent restant */
    updateMoney();
}

function saleTagliatelles() {
    valueTagliatelle -= 1;
    money += 4 ;
    updateMoney();
    loadProductionOnScreen();
}