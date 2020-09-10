

/**contructeur de bouton producer */
function ButtonProducer(idOfDivContainer,idOfDivProducer,imageSource,nameOfProduction,ingredientOne,ingredientTwo,ingredientThree,
                        valueIngredientOne, valueIngredientTwo, valueIngredientThree,valueOfProduction, valueSalaire,valuePrice) {

    /**drawing the div for activating production */
    this.draw = function() {

        
        /**store div parent of the created div in a variable */
        var divContainer = document.getElementById(idOfDivContainer); 
        var divContainerProduction = document.getElementById('production');  
        var divContainerStock = document.getElementById('stock')

        /**creating a div and store it in a variable*/
        var divProduction = document.createElement('div');
        var divStockOne = document.createElement('div');
        var divStockTwo = document.createElement('div');
        var divStockThree = document.createElement('div');
        var divProducer = document.createElement('div');
        var img = document.createElement('img');
        var infos = document.createElement('div');
        var title = document.createElement('h3');
        var salePrice = document.createElement('p');
        var numberOfWorker = document.createElement('p');
        var bar = document.createElement('div');
        var progress = document.createElement('div');
        var button = document.createElement('button');

        /**joining parent and child */
        divContainerProduction.append(divProduction);
        divContainerStock.append(divStockOne);
        divContainerStock.append(divStockTwo);
        divContainerStock.append(divStockThree);
        divContainer.append(divProducer);
        divProducer.append(img,infos);
        infos.append(title,salePrice,numberOfWorker,bar);
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
        salePrice.textContent = 'Vente : ' + valuePrice + ' Francs/' + unite[2];
        numberOfWorker.textContent = 'Nombre de travailleurs : ' + valueNumberOfWorker ;
        progress.textContent = pourcentage + unite[4];
        button.textContent = 'Embaucher';
        
        

        /**sourcing the image */
        img.src= imageSource;

        /**add a function to the button */
        button.addEventListener('click', function() {

            /**add a worker */
            valueNumberOfWorker += 1;
            console.log(valueNumberOfWorker)
            /**show how many workers */
            numberOfWorker.textContent = 'Nombre de travailleurs : ' + valueNumberOfWorker ;
            var worker = new Worker(ingredientOne,ingredientTwo,ingredientThree,
                valueIngredientOne,valueIngredientTwo,valueIngredientThree,
                valueOfProduction,valueSalaire,pourcentage,progress,unite[4],
                nameOfProduction,unite[2],valueOfStock,divProduction,valueNumberOfWorker,
                divStockOne,divStockTwo,divStockThree);
        });
    }
}