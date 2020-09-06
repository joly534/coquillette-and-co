var divMoney=document.getElementById('argent');
var money = 1500;
var devise = 'francs';

divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 
function updateMoney() {
    divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 
}



function saleTagliatelles() {
    valueTagliatelle -= 1;
    money += 4 ;
    updateMoney();
    loadProductionOnScreen();
}