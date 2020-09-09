/**************************************************************constructeur de production**************************************************************/
function Worker (ingredientOne, ingredientTwo, ingredientThree,                         /**les ingrédients */
                valueIngredientOne, valueIngredientTwo, valueIngredientThree,           /**leur valeurs */
                valueOfProduction, valueSalaire,pourcentage,progress,uniteProgress,
                nameOfProduction,uniteOfProduction,valueOfProduction)       /**prod à chaque tour, le salaire */
{                
    /**le travailleur produit à interval régulier**/
    setInterval(() => {

        /**la barre de progression se dessine au fur et à mesure que le % augmente*/
        pourcentage += 1;

        /**le chiffre change en fonction du pourcentage */
        progress.innerHTML = pourcentage + unite;

        /**on fait grossir la barre de progression en fonction du chiffre */
        progress.style.width = pourcentage + unite;


        /**quand la barre arrive à 100 % */
        if (pourcentage == 100) {
            pourcentage +=1
            valueOfStock += valueOfProduction;
            /**on affiche la production à l'écran */
            loadProductionOnScreen(nameOfProduction,uniteOfProduction,valueOfStock);
            /**on affiche le stock à l'écran */
            loadStockOnScreen(ingredientOne,ingredientTwo,ingredientThree,valueIngredientOne,valueIngredientTwo,valueIngredientThree)
            /**mise à jour des valeurs */
            ingredientOne -= valueIngredientOne;
            ingredientTwo -= valueIngredientTwo;
            ingredientThree -= valueIngredientThree;
            pourcentage = 0;
        }

    }, 26);
        
}