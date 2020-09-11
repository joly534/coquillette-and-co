/**fonction pour afficher la production à l'écran */
function loadInformationsOnScreen(nameOfProduction,unite,valueOfStock,
                                ingredientOne,ingredientTwo,ingredientThree,
                                valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                                divProduction,divStockOne,divStockTwo,divStockThree){

    
                                     
    var divContainerProduction = document.getElementById('production');  
    var divContainerStock = document.getElementById('stock')
    /**au niveau de la production */
    divProduction.innerHTML = '';
    divProduction.innerHTML = nameOfProduction + ' : ' + valueOfStock + ' ' + unite + ' . ';
    /**au niveau du stock */
    divStockOne.innerHTML = ingredientOne + ' : ' + valueStockIngredientOne;
    divStockTwo.innerHTML = ingredientTwo + ' : ' + valueStockIngredientTwo; 
    divStockThree.innerHTML = ingredientThree + ' : ' + valueStockIngredientThree;  

    divContainerProduction.append(divProduction);
    divContainerStock.append(divStockOne);
    divContainerStock.append(divStockTwo);
    divContainerStock.append(divStockThree);
}

