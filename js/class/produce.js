/**fonction pour embaucher du personnel */
function recrute(){
    travailleur += 1;
}



var valueOfStock = 0;

/**************************************************************constructeur de production**************************************************************/
function Produce (ingredientOne, ingredientTwo, ingredientThree,                /**les ingrédients */
                valueIngredientOne, valueIngredientTwo, valueIngredientThree,   /**leur valeurs */
                divIngredientOne, divIngredientTwo, divIngredientThree,         /**les div container */
                divbarreprogression, valueProduction, valueSalaire,             /**div de barre de production, prod à chaque tour, le salaire */
                divofProduction, nameOfProduction, valueOfStock)                /**div de la prod, le nom et la valeur */
{                

    /**pourcentage de démarrage */
    var pourcentage = 0;
    var unitPercent = '%';
    /**on recrute */
    recrute();

    /**le travailleur produit à interval régulier**/
    setInterval(() => {


        /**la barre de progression se dessine au fur et à mesure que le % augmente*/
        pourcentage += 1;

        /**le chiffre change en fonction du pourcentage */
        divbarreprogression.innerHTML = pourcentage + unitPercent;

        /**on fait grossir la barre de progression en fonction du chiffre */
        divbarreprogression.style.width = pourcentage + unitPercent;


        /**quand la barre arrive à 100 % */
        if (pourcentage == 100) {
            pourcentage +=1
            valueOfStock += valueProduction;
            /**on affiche la production à l'écran */
            loadProductionOnScreen(divofProduction,nameOfProduction,valueOfStock)
            /**on affiche le stock à l'écran */
            loadStockOnScreen(ingredientOne,ingredientTwo,ingredientThree,valueIngredientOne,valueIngredientTwo,valueIngredientThree,divIngredientOne,
                                divIngredientTwo,divIngredientThree)
            /**mise à jour des valeurs */
            ingredientOne -= valueIngredientOne;
            ingredientTwo -= valueIngredientTwo;
            ingredientThree -= valueIngredientThree;
            pourcentage = 0;
        }

    }, 26);
        
}