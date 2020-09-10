/**************************************************************constructeur de production**************************************************************/
function Worker (ingredientOne, ingredientTwo, ingredientThree,                         /**les ingrédients */
                valueIngredientOne, valueIngredientTwo, valueIngredientThree,           /**leur valeurs */
                valueOfProduction, valueSalaire,pourcentage,progress,uniteProgress,
                nameOfProduction,unite,valueOfStock,divProduction,valueNumberOfWorker,
                divStockOne,divStockTwo,divStockThree)       /**prod à chaque tour, le salaire */
{          

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
            ingredientOne -= valueIngredientOne;
            ingredientTwo -= valueIngredientTwo;
            ingredientThree -= valueIngredientThree;
           
            /**on affiche les informations à l'écran */
            loadInformationsScreen(nameToProduction,unite,valueOfStock,divProduction,
                                    divStockOne,divStockTwo,divStockThree,
                                ingredientOne,ingredientTwo,ingredientThree,
                                valueIngredientOne,valueIngredientTwo,valueIngredientThree);
        }

    }, 50);
        
}