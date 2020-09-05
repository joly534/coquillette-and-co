var divMoney=document.getElementById('argent');
var money = 1500;
var devise = 'francs';

divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 
function updateMoney() {
    divMoney.innerHTML='ARGENT <br/>' + money + ' ' + devise; 
}



function destockage() {
    if (pasta >= 1) {
        divProducePasta.innerHTML='Quantité de pates : ' + pasta + ' ' + poids + ' ' + '<button onclick ="salePasta()">Vendre<br/>4 frs/kg</button>';
    }
}


function salePasta() {
    pasta -= 1;
    money += 4 ;
    updateMoney();
    loadPastaOnScreen();
}