/**fonction pour afficher la production à l'écran */
function loadProductionOnScreen(divOfProduction, nameOfProduction, valueOfStock){
    /**on ajoute du texte à la div*/   
    divOfProduction.innerHTML= nameOfProduction + ' : ' + valueOfStock + ' ' + poids + ' .';
}

/******afficher les informations***************/
function loadStockOnScreen(ingredientOne,ingredientTwo,ingredientThree,valueIngredientOne,valueIngredientTwo,valueIngredientThree,divIngredientOne,divIngredientTwo,divIngredientThree) 
{
    /**************************au niveau des stocks****************/
    divIngredientOne.innerHTML= ingredientOne + ' : ' + valueIngredientOne;
    divIngredientTwo.innerHTML= ingredientTwo + ' : ' + valueIngredientTwo;
    divIngredientThree.innerHTML = ingredientThree + ' : ' + valueIngredientThree;
}