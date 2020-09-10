/**fonction pour afficher la production à l'écran */
function loadInformationsOnScreen(nameToProduction,unite,valueOfStock,divProduction,
                                divStockOne,divStockTwo,divStockThree,
                                ingredientOne,ingredientTwo,ingredientThree,
                                valueIngredientOne,valueIngredientTwo,valueIngredientThree){
    /**au niveau de la production */
    divProduction.innerHTML = '';
    divProduction.innerHTML = nameToProduction + ' : ' + valueOfStock + ' ' + unite + ' . ';
    /**au niveau du stock */
    divStockOne.innerHTML = ingredientOne + ' : ' + valueIngredientOne;
    divStockTwo.innerHTML = ingredientTwo + ' : ' + valueIngredientTwo; 
    divStockThree.innerHTML = ingredientThree + ' : ' + valueIngredientThree;  
}

