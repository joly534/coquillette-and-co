


/**************************************************************constructeur de production**************************************************************/
function Worker (travail,valueOfProduction,valueStockOfProduction,nameOfProduction,valueStockOfProduction,divProduction,poids) {   

    this.level = 0;
    
    /**le travailleur est un producteur */
    this.produce = function(valueNumberOfWorker) {
        valueStockOfProduction += (valueOfProduction * valueNumberOfWorker);

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
    };

    /**le travailleur est un vendeur*/
    this.sale = function(valueNumberOfWorker) {
        /**il utilise un produit du stock */

    }

    /**le travailleur ajoute la production au stock */
    this.loadProductionOnStock = function(valueNumberOfWorker) {
        
        var divContainerStock = document.getElementById('stock');
        var amount = new Array();
        amount.push(nameOfProduction,valueOfProduction);
        stock.push(amount);
        if (stock[i] == (amount)){
            console.log('nonnon')
        }
        divProduction.innerHTML = '';
        divProduction.innerHTML = nameOfProduction + ' : ' + valueStockOfProduction + ' ' + poids + ' . ';
        divContainerStock.prepend(divProduction);
        console.log(stock)
    }

    /**le travailleur met à jour les infos*/
    this.loadStockOnScreen = function(){
        /**les div contenant les infos */
        /**infos de la production */
    }
        
}