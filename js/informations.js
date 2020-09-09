/**fonction pour afficher la production à l'écran */
function loadProductionOnScreen(nameOfProduction,uniteOfProduction, valueOfStock){

    var divContainer = document.getElementById('production');
    var divProduction = document.createElement('div');
    divProduction.textContent= nameOfProduction + ' : ' + valueOfStock + ' ' + uniteOfProduction + ' . ';
    divContainer.append(divProduction);
    /**on ajoute du texte à la div*/   
}

/******afficher les informations***************/
function loadStockOnScreen(ingredientOne,ingredientTwo,ingredientThree,valueIngredientOne,valueIngredientTwo,valueIngredientThree,divIngredientOne,divIngredientTwo,divIngredientThree) 
{
    
    /**************************au niveau des stocks****************/
    divIngredientOne.innerHTML= ingredientOne + ' : ' + valueIngredientOne;
    divIngredientTwo.innerHTML= ingredientTwo + ' : ' + valueIngredientTwo;
    divIngredientThree.innerHTML = ingredientThree + ' : ' + valueIngredientThree;
}