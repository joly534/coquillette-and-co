/************constructeur de production************/
function Produce (pourcentage, avancement, prod, valueOne, valueTwo, valueThree, valueSalaire,
                divIngredientOne, valueIngredientOne, ingredientOne, 
                divIngredientTwo, valueIngredientTwo, ingredientTwo, 
                divIngredientThree, valueIngredientThree, ingredientThree) {

    /**production à interval régulier**/
    setInterval(() => {

        pourcentage += 1;
        var unitPercent = '%';

        /**on dessine la barre de progression */
        avancement.innerHTML = pourcentage + unitPercent;
        avancement.style.width = pourcentage + unitPercent;

        /**réinitialisation de la bartre de progression */
        if (pourcentage == 100) {

            /**mise à jour des valeurs */
            prod += 30;
            ingredientOne -= valueIngredientOne;
            ingredientTwo -= valueIngredientTwo;
            ingredientThree -= valueIngredientThree;
            /**paye des ouvriers */
            money -= valueSalaire;
            valuePasta += 30;
            pourcentage = 0;

            /**appel à la fonction pour afficher les infos du stock */
            loadInformationsOnScreen(divIngredientOne, valueIngredientOne, ingredientOne, 
                                    divIngredientTwo, valueIngredientTwo, ingredientTwo, 
                                    divIngredientThree, valueIngredientThree, ingredientThree);

            /**appel à la fonction pour afficher les infos de production */
            loadProductionOnScreen()

            /**Mise à jour de l'argent que le joueur possede */
            updateMoney();
        } 

    }, 25);
        
}