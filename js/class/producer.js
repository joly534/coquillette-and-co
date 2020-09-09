/**contructeur de bouton producer */
function ButtonProducer(idOfDivContainer,idOfDivProducer,titleId,imageSource,nameOfProduction,
                        ingredientOne, ingredientTwo, ingredientThree,
                        valueIngredientOne, valueIngredientTwo, valueIngredientThree,
                        divIngredientOne, divIngredientTwo, divIngredientThree,
                        divbarreprogression, valueProduction, valueSalaire,
                        divofProduction, nameOfProduction, valueOfStock) {

    /**drawing the div for activating production */
    this.draw = function() {

        /**some variables */

        
        /**store div parent of the created div in a variable */
        var divContainer = document.getElementById(idOfDivContainer);   

        /**creating a div and store it in a variable*/
        var divProducer = document.createElement('div');
        var img = document.createElement('img');
        var infos = document.createElement('div');
        var title =document.createElement('h3');
        var bar = document.createElement('div');
        var progress = document.createElement('div');
        var button = document.createElement('button');

        /**giving an id to these divs */
        divProducer.id = idOfDivProducer;
        title.id = titleId;

        /**and a class */
        divProducer.className = 'section shadow5';
        infos.className = 'infos-production';
        bar.className='barre-production'; 
        progress.className='avancement';
        button.className='production shadow5';

        /**pourcentage de démarrage */
        var pourcentage = 0;
        var unitPercent = ' %';

        /**put some text */
        title.textContent = nameOfProduction;
        progress.textContent = pourcentage + unitPercent;
        button.textContent = 'Embaucher';
        

        /**sourcing the image */
        img.src= imageSource;

        /**joining parent and child */
        divContainer.append(divProducer);
        divProducer.append(img,infos);
        infos.append(title,bar);
        bar.append(progress);
        divProducer.append(button);

        /**add a function to the button */
        button.addEventListener('click', function() {
            var worker = new Worker(ingredientOne,ingredientTwo,ingredientThree,
                valueIngredientOne,valueIngredientTwo,valueIngredientThree,
                divIngredientOne,divIngredientTwo,divIngredientThree,progress,valueProduction,
                valueSalaire,divofProduction,nameOfProduction,valueOfStock,pourcentage,unitPercent);
        });
    }
}