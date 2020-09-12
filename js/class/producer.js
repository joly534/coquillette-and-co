

/**contructeur de bouton producer */
function ButtonProducer(
                        nameOfProduction,unite,
                        ingredientOne,ingredientTwo,ingredientThree,
                        valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                        valueIngredientOne,valueIngredientTwo,valueIngredientThree,
                        valueNumberOfWorker,valueOfProduction,pourcentage,uniteProgress,
                        idOfDivContainer,idOfDivProducer,imageSource,valuePrice,interval
                        ) 
{
    /**au départ le stock est a zéro */
    var valueStockOfProduction = 0;

    /**drawing the div for activating production */
    this.draw = function() {

        
        /**store div parent of the created div in a variable */
        var divContainer = document.getElementById(idOfDivContainer);

        /**creating a div and store it in a variable*/
        var divProducer = document.createElement('div');
        var img = document.createElement('img');
        var infos = document.createElement('div');
        var title = document.createElement('h3');
        var salePrice = document.createElement('p');
        var numberOfWorker = document.createElement('p');
        var bar = document.createElement('div');
        var progress = document.createElement('div');
        var divContainerButton = document.createElement('div');
        var button = document.createElement('button');
        var buttonXOne = document.createElement('button');
        var buttonXTen = document.createElement('button');
        var buttonXHundred = document.createElement('button');
        var buttonXMax = document.createElement('button');
        /**creating a div and store it in a variable*/
        var divProduction = document.createElement('div');
        var divStockOne = document.createElement('div');
        var divStockTwo = document.createElement('div');
        var divStockThree = document.createElement('div');

        /**joining parent and child */
        divContainer.append(divProducer);
        divProducer.append(img,infos,divContainerButton);
        infos.append(title,salePrice,numberOfWorker,bar);
        bar.append(progress);
        divContainerButton.append(button,buttonXOne,buttonXTen,buttonXHundred,buttonXMax);

        /**giving an id to these divs */
        divProducer.id = idOfDivProducer;

        /**and a class */
        divProducer.className = 'section shadow5';
        infos.className = 'infos-production';
        bar.className='barre-production'; 
        progress.className='avancement';
        divContainerButton.className='container-button';
        button.className='visible production shadow5';
        buttonXOne.className='hidden';
        buttonXTen.className='hidden';
        buttonXHundred.className='hidden';
        buttonXMax.className='hidden';

        /**put some text */
        title.textContent = nameOfProduction;
        salePrice.textContent =  valuePrice + ' Francs/Kg';
        numberOfWorker.textContent = 'Travailleurs : ' + valueNumberOfWorker ;
        progress.textContent = pourcentage + uniteProgress;
        button.textContent = 'Embaucher';
        buttonXOne.textContent = 'X1';
        buttonXTen.textContent = 'X10';
        buttonXHundred.textContent = 'X100';
        buttonXMax.textContent = 'MAX';

        /**sourcing the image */
        img.src= imageSource;
        
        /**show how many workers */
        function showNumberOfWorker(){
            numberOfWorker.textContent = 'Nombre de travailleurs : ' + valueNumberOfWorker ;
        }


        /**add a function to the button */
        button.addEventListener('click', function() {

            /**add a worker */
            valueNumberOfWorker += 1;
            showNumberOfWorker()
            var worker = new Worker(valueStockOfProduction,valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                                    valueIngredientOne,valueIngredientTwo,valueIngredientThree,valueNumberOfWorker,valueOfProduction,
                                    divProduction,nameOfProduction,unite,divStockOne,divStockTwo,divStockThree,
                                    ingredientOne,ingredientTwo,ingredientThree);
            
            /**à interval régulier */
            setInterval(() => {

                /**la barre de progression grossit*/
                pourcentage += 1;
                progress.innerHTML = pourcentage + uniteProgress;
                progress.style.width = pourcentage + uniteProgress;


                /**quand la barre arrive à 100 % */
                if (pourcentage === 100) {
                    /**le travailleur produit */
                    worker.produce();
                    /**et il met à jours les infos de stock et prod */
                    worker.loadInformationsOnScreen()
                    /**puis on réinitialise la valeur de la barre à zéro */
                    pourcentage = 0;
                }
            }, interval);


            /**on cache le premier bouton de prod pour ne pas modifier la barre de progress */
            button.className='hidden';
            /**et on fait apparaitre les boutons d'embauches multiples */
            buttonXHundred.className ='visible production shadow5';

            buttonXHundred.addEventListener('click', function() {
                valueNumberOfWorker +=100;
                showNumberOfWorker()
                for (i=0;i<100;i++) {
                    var worker = new Worker(valueStockOfProduction,valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                                            valueIngredientOne,valueIngredientTwo,valueIngredientThree,valueNumberOfWorker,valueOfProduction,
                                            divProduction,nameOfProduction,unite,divStockOne,divStockTwo,divStockThree,
                                            ingredientOne,ingredientTwo,ingredientThree);

                }
            })
        });
    }
}