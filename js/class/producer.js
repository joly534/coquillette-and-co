var ingredient = ['farine', 'Oeuf', 'Eau'];
var unite = [' Unités',' Gr',' kg',' Tonnes','%'];
var valueOfStock = 0;
var pourcentage = 0;

/**contructeur de bouton producer */
function ButtonProducer(idOfDivContainer,idOfDivProducer,imageSource,nameOfProduction,ingredientOne, ingredientTwo, ingredientThree,
                        valueIngredientOne, valueIngredientTwo, valueIngredientThree,valueOfProduction, valueSalaire,nameOfProduction) {

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

        /**joining parent and child */
        divContainer.append(divProducer);
        divProducer.append(img,infos);
        infos.append(title,bar);
        bar.append(progress);
        divProducer.append(button);

        /**giving an id to these divs */
        divProducer.id = idOfDivProducer;

        /**and a class */
        divProducer.className = 'section shadow5';
        infos.className = 'infos-production';
        bar.className='barre-production'; 
        progress.className='avancement';
        button.className='production shadow5';

        /**put some text */
        title.textContent = nameOfProduction;
        progress.textContent = pourcentage + unite[4];
        button.textContent = 'Embaucher';
        

        /**sourcing the image */
        img.src= imageSource;

        /**add a function to the button */
        button.addEventListener('click', function() {
            var worker = new Worker(ingredientOne,ingredientTwo,ingredientThree,
                valueIngredientOne,valueIngredientTwo,valueIngredientThree,
                valueOfProduction,valueSalaire,pourcentage,progress,unite[4],
                nameOfProduction,unite[2],valueOfProduction);
        });
    }
}