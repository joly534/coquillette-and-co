

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

    /**dessiner la div */
    this.draw = function() {

        
        /**recuperation de la div container pour y injecter le bouton */
        var divContainer = document.getElementById(idOfDivContainer);

        /**création des différents éléments du bouton*/
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
        var divProduction = document.createElement('div');
        var divStockOne = document.createElement('div');
        var divStockTwo = document.createElement('div');
        var divStockThree = document.createElement('div');

        /**on injecte les éléments au bon endroit */
        divContainer.append(divProducer);
        divProducer.append(img,infos,divContainerButton);
        infos.append(title,salePrice,numberOfWorker,bar);
        bar.append(progress);
        divContainerButton.append(button,buttonXOne,buttonXTen,buttonXHundred,buttonXMax);

        /**certains éléments ont besoins d'un id pour le css */
        divProducer.id = idOfDivProducer;

        /**ou d'une classe */
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

        /**on rajoute du texte */
        title.textContent = nameOfProduction;
        salePrice.textContent =  valuePrice + ' Francs/Kg';
        numberOfWorker.textContent = 'Travailleurs : ' + valueNumberOfWorker ;
        progress.textContent = pourcentage + uniteProgress;
        button.textContent = 'Embaucher';
        buttonXOne.textContent = 'X1';
        buttonXTen.textContent = 'X10';
        buttonXHundred.textContent = 'X100';
        buttonXMax.textContent = 'MAX';

        /**la source de l'image */
        img.src= imageSource;
        
        /**on affiche le nombre de travailleurs*/
        function showNumberOfWorker(){
            numberOfWorker.textContent = 'Nombre de travailleurs : ' + valueNumberOfWorker ;
        }


        /**quand on clique sur le bouton "embaucher" */
        button.addEventListener('click', function() {

            /**on ajoute un travailleur*/
            valueNumberOfWorker += 1;
            /**on affiche le nombre de travailleurs*/
            showNumberOfWorker()
            /**on crée un nouvel objet travailleur*/
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


            /**on cache le premier bouton de prod pour ne pas perturber la barre de progress */
            button.className='hidden';
            /**et on fait apparaitre les boutons d'embauches multiples */
            buttonXOne.className ='visible production shadow5';
            buttonXTen.className ='visible production shadow5';
            buttonXHundred.className ='visible production shadow5';
            buttonXMax.className ='visible production shadow5';
            buttonXHundred.addEventListener('click', function() {
                valueNumberOfWorker +=100;
                showNumberOfWorker()

                
            })
        });
    }
}