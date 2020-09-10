/**fonction pour afficher la production à l'écran */
function loadInformationsOnScreen(nameOfProduction,unite,valueOfStock,ingredientOne,ingredientTwo,ingredientThree,valueIngredientOne,valueIngredientTwo,valueIngredientThree){

    
                                     
    var divContainerProduction = document.getElementById('production');  
    var divContainerStock = document.getElementById('stock')
    /**au niveau de la production */
    divProduction.innerHTML = '';
    divProduction.innerHTML = nameOfProduction + ' : ' + valueOfStock + ' ' + unite + ' . ';
    /**au niveau du stock */
    divStockOne.innerHTML = ingredientOne + ' : ' + valueIngredientOne;
    divStockTwo.innerHTML = ingredientTwo + ' : ' + valueIngredientTwo; 
    divStockThree.innerHTML = ingredientThree + ' : ' + valueIngredientThree;  

    divContainerProduction.append(divProduction);
    divContainerStock.append(divStockOne);
    divContainerStock.append(divStockTwo);
    divContainerStock.append(divStockThree);
}

