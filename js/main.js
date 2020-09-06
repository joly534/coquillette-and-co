var value = 0;
var valueTagliatelle = 0;
var tagliatelle = 'Tagliatelles';
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
    var divPasta = document.getElementById('pasta')
    var produceTagliatelle= new Produce (0, avancement, 1, 600, 6, 1, 5, 
                                    divIngredientOne, valueIngredientOne, ingredientOne,
                                    divIngredientTwo,valueIngredientTwo,ingredientTwo,
                                    divIngredientThree,valueIngredientThree,ingredientThree);
    
    loadPastaOnScreen = new LoadProductionOnScreen(divPasta,tagliatelle,valueTagliatelle);
}



/******afficher les informations***************/
function loadInformationsOnScreen(divIngredientOne,valueIngredientOne,ingredientOne,divIngredientTwo,valueIngredientTwo,ingredientTwo,divIngredientThree, valueIngredientThree,ingredientThree) 
{
    /**************************au niveau des stocks****************/
    divIngredientOne.innerHTML= ingredientOne + ' : ' + valueIngredientOne + poids;
    divIngredientTwo.innerHTML= ingredientTwo + ' : ' + valueIngredientTwo + unite;
    divIngredientThree.innerHTML = ingredientThree + ' : ' + valueIngredientThree + unite;
}






function update() {
    noTimeToLoose();
}

update();