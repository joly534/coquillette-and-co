


/**************************************************************constructeur de production**************************************************************/
function Worker (
                valueOfStock,valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                valueIngredientOne,valueIngredientTwo,valueIngredientThree,valueNumberOfWorker,valueOfProduction,
                divProduction,nameOfProduction,unite,divStockOne,divStockTwo,divStockThree,
                ingredientOne,ingredientTwo,ingredientThree
                )      
{   
    this.level = 0;       
    this.produce = function (valueNumberOfWorker) {
        valueOfStock += (valueOfProduction * valueNumberOfWorker);
        valueStockIngredientOne -= (valueIngredientOne * valueNumberOfWorker);
        valueStockIngredientOne = valueStockIngredientOne.toFixed(1);
        valueStockIngredientTwo -= (valueIngredientTwo * valueNumberOfWorker);
        valueStockIngredientThree -= (valueIngredientThree * valueNumberOfWorker);
    }


    this.loadInformationsOnScreen = function(){
        var divContainerProduction = document.getElementById('production');  
        var divContainerStock = document.getElementById('stock')
        /**au niveau de la production */
        divProduction.innerHTML = '';
        divProduction.innerHTML = nameOfProduction + ' : ' + valueOfStock + ' ' + unite + ' . ';
        /**au niveau du stock */
        divStockOne.innerHTML = ingredientOne + valueStockIngredientOne + ' ' + unite;
        divStockTwo.innerHTML = ingredientTwo + valueStockIngredientTwo; 
        divStockThree.innerHTML = ingredientThree + valueStockIngredientThree;  

        divContainerProduction.append(divProduction);
        divContainerStock.append(divStockOne);
        divContainerStock.append(divStockTwo);
        divContainerStock.append(divStockThree);
    }
        
}