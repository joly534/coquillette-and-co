

/**on affiche le stock à l'écran */
function LoadProductionOnScreen(divName,name,valueName) {
    this.divName = divName,
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