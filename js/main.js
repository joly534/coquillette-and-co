var value = 0;
var valuePasta = 0;
var pasta = 'Pates';
var poids = 'kg';
var divFarine= document.getElementById('farine');
var divOeuf = document.getElementById('oeuf');
var divEau = document.getElementById('eau');
var ingredient = ['farine', 'Oeuf', 'Eau'];
var unite = ' unités';
var divPasta = document.getElementById('pasta');


function produceTagliatelle()
{
    var avancement = document.getElementById('avancement-tagliatelle');
    var divIngredientOne = document.getElementById('farine');
    var valueIngredientOne = 100;
    var ingredientOne = ingredient[0];
    var divIngredientTwo = document.getElementById('oeuf');
    var valueIngredientTwo = 500;
    var ingredientTwo = ingredient[1];
    var divIngredientThree = document.getElementById('eau');
    var valueIngredientThree = 100;
    var ingredientThree = ingredient[2];
    prodTagliatelle= new Produce (0, avancement, 30,30, 600, 6, 1, 5, 
                                    divIngredientOne, valueIngredientOne, ingredientOne,
                                    divIngredientTwo,valueIngredientTwo,ingredientTwo,
                                    divIngredientThree,valueIngredientThree,ingredientThree);
}



/******afficher les informations***************/
function loadInformationsOnScreen(divIngredientOne,valueIngredientOne,ingredientOne,divIngredientTwo,valueIngredientTwo,ingredientTwo,divIngredientThree, valueIngredientThree,ingredientThree) 
{
    /**************************au niveau des stocks****************/
    divIngredientOne.innerHTML= ingredientOne + ' : ' + valueIngredientOne + poids;
    divIngredientTwo.innerHTML= ingredientTwo + ' : ' + valueIngredientTwo + unite;
    divIngredientThree.innerHTML = ingredientThree + ' : ' + valueIngredientThree + unite;
}



function destockage() {
    if (valuePasta >= 1) {
        divPasta.innerHTML= pasta + ' ' + valuePasta + ' ' + poids + ' ' + '<button onclick ="salePasta()">Vendre<br/>4 frs/kg</button>';
    }
}


function loadProductionOnScreen() {
    /********** affiche les infos de production **********/
    divPasta.innerHTML = pasta + ' : ' + valuePasta + poids + ' .';
    destockage();

}


function update() {
    noTimeToLoose();
    loadProductionOnScreen();
}

update();