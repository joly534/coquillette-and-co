var value = 0;
var valueTagliatelle = 0;
var poids = 'kg';
var ingredient = ['farine', 'Oeuf', 'Eau'];
var unite = ' unités';
var travailleur = 0;


function produceTagliatelle()
{
    var divIngredientOne = document.getElementById('farine');
    var divIngredientTwo = document.getElementById('oeuf');
    var divIngredientThree = document.getElementById('eau');
    var divbarreprogression = document.getElementById('avancement-tagliatelle');
    var divPasta= document.getElementById('pasta');
    var tagliatelle = 'Tagliatelles';
    var produceTagliatelle= new Produce (ingredient[0], ingredient[1], ingredient[2], 
                                        100, 500, 100,
                                        divIngredientOne, divIngredientTwo, divIngredientThree,
                                        divbarreprogression, 1, 5,
                                        divPasta,tagliatelle,valueTagliatelle);
}









function update() {
    noTimeToLoose();
}

update();