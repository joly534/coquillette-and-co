


/**************************************************************constructeur de production**************************************************************/
function Worker (
                nameOfProduction,unite,valueOfStock,
                ingredientOne,ingredientTwo,ingredientThree,
                valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                divProduction,divStockOne,divStockTwo,divStockThree,
                valueIngredientOne,valueIngredientTwo,valueIngredientThree,
                valueNumberOfWorker,valueOfProduction,pourcentage,progress,uniteProgress
                )      
{          
    this.produce = function () {
        
    }
    /**le travailleur produit à interval régulier**/
    setInterval(() => {

        /**barre de progression */
        pourcentage += 1;
        progress.innerHTML = pourcentage + uniteProgress;
        progress.style.width = pourcentage + uniteProgress;


        /**quand la barre arrive à 100 % */
        if (pourcentage === 100) {
            pourcentage = 0;
            valueOfStock += (valueOfProduction * valueNumberOfWorker);
            valueStockIngredientOne -= valueIngredientOne;
            valueStockIngredientTwo -= valueIngredientTwo;
            valueStockIngredientThree -= valueIngredientThree;
           
            /**on affiche les informations à l'écran */
            loadInformationsOnScreen(
                                    nameOfProduction,unite,valueOfStock,
                                    ingredientOne,ingredientTwo,ingredientThree,
                                    valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                                    divProduction,divStockOne,divStockTwo,divStockThree,
                                    valueIngredientOne,valueIngredientTwo,valueIngredientThree
                                    );
        }

    }, 50);
        
}