var pasta = 0;
var poids = 'kg';
var loadOnScreen = document.getElementById('pasta');
var divProducePasta = document.getElementById('pasta');
var divFarine= document.getElementById('farine');
var divOeuf = document.getElementById('oeuf');
var divEau = document.getElementById('eau');
var ingredient = ['farine', 'Oeuf', 'Eau'];
var unite = ' unités'


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
    prodTagliatelle= new Produce (0, avancement, 30, 600, 6, 1, 5, 
                                    divIngredientOne, valueIngredientOne, ingredientOne,
                                    divIngredientTwo,valueIngredientTwo,ingredientTwo,
                                    divIngredientThree,valueIngredientThree,ingredientThree);
}

/*****afficher la quantité de pates produites******/
function loadPastaOnScreen() {
    divProducePasta.innerHTML ='Quantité de pates : ' + pasta + ' ' + poids;
    
    
destockage();
}


/******afficher les stocks***************/
function loadInformationsOnScreen(divIngredientOne, valueIngredientOne, ingredientOne, 
                                divIngredientTwo, valueIngredientTwo,ingredientTwo, 
                                divIngredientThree, valueIngredientThree,ingredientThree) {
    /**************************stock****************/
    divIngredientOne.innerHTML= ingredientOne + ' : ' + valueIngredientOne + poids;
    divIngredientTwo.innerHTML= ingredientTwo + ' : ' + valueIngredientTwo + unite;
    divIngredientThree.innerHTML = ingredientThree + ' : ' + valueIngredientThree + unite;
    /*************************date**********************/
    divDate.innerHTML= jour + '<br/>' + mois[0] + ' ' + annee ;

}


function update() {
    loadInformationsOnScreen() 
    noTimeToLoose();
}

update();