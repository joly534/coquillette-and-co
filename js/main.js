
var level = 1;
var ingredient = ['farine', 'Oeuf', 'Eau'];
var unite = ['Unités','Gr','kg','Tonnes','%'];
var valueOfStock = 0;
var pourcentage = 0;
var valueNumberOfWorker = 0;
var divMoney=document.getElementById('argent');
var money = 100;
var devise = 'francs';

var employes = [];
/**idOfDivContainer,idOfDivProducer,imageSource,nameOfProduction,ingredientOne,ingredientTwo,ingredientThree,
   valueIngredientOne, valueIngredientTwo, valueIngredientThree,valueProduction, valueSalaire,valuePrice*/






function update() {
    noTimeToLoose();
    if (level = 1)
     {
        var buttonTagliatelle= new ButtonProducer ('pasta','pates-tagliatelles','assets/pates/tagliatelle.png','TAGLIATELLES',ingredient[0],ingredient[1],ingredient[2],100, 500, 100, 1, 5,4);
        buttonTagliatelle.draw();
     }
}

update();