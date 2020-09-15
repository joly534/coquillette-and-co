


/**************************************************************constructeur de production**************************************************************/
function Worker (travail,valueOfProduction,valueStockOfProduction,
                    nameOfProduction,valueStockOfProduction,divProduction,poids)
// ,valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
//                     valueIngredientOne,valueIngredientTwo,valueIngredientThree,
//                     divProduction,nameOfProduction,unite,divStockOne,divStockTwo,divStockThree,
//                     ingredientOne,ingredientTwo,ingredientThree)      
{   
    this.level = 0;
    
    /**le travailleur est un producteur */
    this.produce = function(valueNumberOfWorker) {
        valueStockOfProduction += (valueOfProduction * valueNumberOfWorker);
        console.log(valueStockOfProduction);

    };
    /**le travailleur est un transformateur*/
    this.transform = function (valueNumberOfWorker) {
        /**il utilise des ingredients */
        valueStockIngredientOne -= (valueIngredientOne * valueNumberOfWorker);
        valueStockIngredientOne = valueStockIngredientOne.toFixed(1);
        valueStockIngredientTwo -= (valueIngredientTwo * valueNumberOfWorker);
        valueStockIngredientThree -= (valueIngredientThree * valueNumberOfWorker);
        /**pour produire quelque chose */
        valueOfStock += (valueOfProduction * valueNumberOfWorker);
    }

    /**le travailleur est un vendeur*/
    this.sale = function() {
        /**il utilise un produit du stock */

    }

    /**le travailleur met à jour les infos*/
    this.loadStockOnScreen = function(){
        /**les div contenant les infos */
        var divContainerStock = document.getElementById('stock');
        /**infos de la production */
        divProduction.innerHTML = '';
        divProduction.innerHTML = nameOfProduction + ' : ' + valueStockOfProduction + ' ' + poids + ' . ';
        divContainerStock.appendChild(divProduction);
    }
        
}