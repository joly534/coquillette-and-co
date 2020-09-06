/************constructeur de production************/
function Produce (pourcentage, avancement, prod, valueOne, valueTwo, valueThree, valueSalaire,
                divIngredientOne, valueIngredientOne, ingredientOne, 
                divIngredientTwo, valueIngredientTwo, ingredientTwo, 
                divIngredientThree, valueIngredientThree, ingredientThree) {

    /**production à interval régulier**/
    setInterval(() => {

        var Prod = 0;

        /**la barre de progression se dessine au fur et à mesure que le % augmente*/
        pourcentage += 1;
        var unitPercent = '%';
        avancement.innerHTML = pourcentage + unitPercent;
        avancement.style.width = pourcentage + unitPercent;

        /**réinitialisation de la barre de progression lorsque le pourcentage arrive à 100*/
        if (pourcentage == 100) {

            /**mise à jour des valeurs */
            prod += 1;
            ingredientOne -= valueIngredientOne;
            ingredientTwo -= valueIngredientTwo;
            ingredientThree -= valueIngredientThree;
            /**paye des ouvriers */
            money -= valueSalaire;
            pourcentage = 0;
        } 

    }, 25);
        
}