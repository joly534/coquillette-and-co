

/**contructeur de bouton producer */
function ButtonOfGame(idOfDivContainer,idOfDivProducer,nameOfProduction,valueNumberOfWorker,imageSource,interval,travail,valueOfProduction,poids) 
{

    /**au départ le stock est a zéro */
    var valueStockOfProduction = 0;
    /**comme la barre de progression */
    var pourcentage = 0;
    var uniteProgress = '%';

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
        var divProduction = document.createElement('div');
        var divStockOne = document.createElement('div');
        var divStockTwo = document.createElement('div');
        var divStockThree = document.createElement('div');

        /**on injecte les éléments au bon endroit */
        divContainer.append(divProducer);
        divProducer.append(img,infos,divContainerButton);
        infos.append(title,salePrice,numberOfWorker,bar);
        bar.append(progress);
        divContainerButton.append(button,buttonXOne,buttonXTen,buttonXHundred);


        /**certains elements ont besoin d'une classe */
        divProducer.className = 'section shadow5';
        infos.className = 'infos-production';
        bar.className='barre-production'; 
        progress.className='avancement';
        divContainerButton.className='container-button';
        button.className='visible production shadow5';
        buttonXOne.className='hidden';
        buttonXTen.className='hidden';
        buttonXHundred.className='hidden';

        divProduction.id='prod';

        button.style.marginTop = "35%";

        /**on rajoute du texte */
        title.textContent = nameOfProduction;
        numberOfWorker.textContent = 'Travailleurs : ' + valueNumberOfWorker ;
        progress.textContent = pourcentage + uniteProgress;
        button.textContent = 'Embaucher';
        buttonXOne.textContent = 'X1';
        buttonXTen.textContent = 'X10';
        buttonXHundred.textContent = 'X100';

        /**la source de l'image */
        img.src= imageSource;
        
        /**on affiche le nombre de travailleurs*/
        function showNumberOfWorker(){
            numberOfWorker.textContent = 'Nombre de travailleurs : ' + valueNumberOfWorker ;
        }


        /**quand on clique sur le bouton "embaucher" */
        button.addEventListener('click', function() {
            /**bruitage */
            var audio = new Audio();
            audio.src = 'assets/sounds/button/boutonok.mp3';
            audio.play();
            /**on ajoute un travailleur*/
            valueNumberOfWorker += 1;
            /**on affiche le nombre de travailleurs*/
            showNumberOfWorker()
            /**on crée un nouvel objet travailleur*/
            var worker = new Worker(travail,valueOfProduction,valueStockOfProduction,nameOfProduction,valueStockOfProduction,divProduction,poids);
                                    // valueStockOfProduction,valueStockIngredientOne,valueStockIngredientTwo,valueStockIngredientThree,
                                    // valueIngredientOne,valueIngredientTwo,valueIngredientThree,
                                    // divProduction,nameOfProduction,unite,divStockOne,divStockTwo,divStockThree,
                                    // ingredientOne,ingredientTwo,ingredientThree);
            
            /**à interval régulier */
            setInterval(() => {

                /**la barre de progression grossit*/
                pourcentage += 1;
                progress.innerHTML = pourcentage + uniteProgress;
                progress.style.width = pourcentage + uniteProgress;


                /**quand la barre arrive à 100 % */
                if (pourcentage === 100) {
                    switch (travail) {
                        case 'produce' :
                            worker.produce(valueNumberOfWorker);
                            break;
                        case 'transform' :
                            worker.transform(valueNumberOfWorker);
                            break;
                        case 'sale' :
                            worker.sale(valueNumberOfWorker);
                            break;
                    }
                    /**et il met à jours les infos de stock et prod */
                    worker.loadProductionOnStock();
                    /**le travailleur gagne en XP */
                    worker.level += 1;
                    /**puis on réinitialise la valeur de la barre à zéro */
                    pourcentage = 0;
                }

            }, interval);

        });

        /**click sur le bouton X1 */
        buttonXOne.addEventListener('click', function() {
            var audio = new Audio();
            audio.src = 'assets/sounds/button/boutonok.mp3';
            audio.play();
            valueNumberOfWorker += 1;
            showNumberOfWorker()
        });

        /**click sur le bouton X10 */
        buttonXTen.addEventListener('click', function() {
            var audio = new Audio();
            audio.src = 'assets/sounds/button/boutonok.mp3';
            audio.play();
            valueNumberOfWorker += 10;
            showNumberOfWorker()
        });

        /**click sur le bouton X100 */
        buttonXHundred.addEventListener('click', function() {
            var audio = new Audio();
            audio.src = 'assets/sounds/button/boutonok.mp3';
            audio.play();
            valueNumberOfWorker +=100;
            showNumberOfWorker()                
        });

    }
}