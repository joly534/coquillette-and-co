

/**on affiche le stock à l'écran */
function LoadProductionOnScreen(nameOfProduction,uniteOfProduction,valueOfProduction) {
    var divcontainer = document.getElementById('production');
    var prod = document.createElement('div');
    prod.textContent = nameOfProduction + valueOfProduction +uniteOfProduction;
    divcontainer.append(prod);


    this.name = name,
    this.valueName = valueName;
    /********** affiche les infos de production **********/
    divName.innerHTML = name + ' : ' + valueName + poids + ' .';
    destockage();

}

function destockage() {
    if (valueTagliatelle >= 1) {
        divPasta.innerHTML= tagliatelle+ ' ' + valueTagliatelle + ' ' + poids + ' ' + '<button onclick ="saleTagliatelles()">Vendre<br/>4 frs/kg</button>';
    }
}