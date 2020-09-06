/************constructeur fonction affichage valeur sur ecran************/
function Produce (pourcentage, avancement, prod, valueOne, valueTwo, valueThree, valueSalaire,
                divIngredientOne, valueIngredientOne, ingredientOne, 
                divIngredientTwo, valueIngredientTwo, ingredientTwo, 
                divIngredientThree, valueIngredientThree, ingredientThree) {
    setInterval(() => {
        pourcentage += 1;
        var unitPercent = '%';
        avancement.innerHTML = pourcentage + unitPercent;
        avancement.style.width = pourcentage + unitPercent;
        if (pourcentage == 100) {
            prod += 30;
            ingredientOne -= valueOne;
            ingredientTwo -= valueTwo;
            ingredientThree -= valueThree;
            money -= valueSalaire;
            pourcentage = 0;
            loadInformationsOnScreen(divIngredientOne, valueIngredientOne, ingredientOne, 
                                    divIngredientTwo, valueIngredientTwo, ingredientTwo, 
                                    divIngredientThree, valueIngredientThree, ingredientThree);
            updateMoney();
        } 

        }, 25);
        
        }