
var valueTagliatelle = 0;
var pasta = 0;
/******unite de mesure */
var poids = 'kg';
var valueFarine = 2000;  
valueOeuf = 10000;
valueEau = 10000;
var loadOnScreen = document.getElementById('pasta');
var divProducePasta = document.getElementById('pasta');


function produceTagliatelle()
{
    var state = false;
    var pourcentageTagliatelle = 0;
    /******div qui entoure la barre de progression******/
    var divTagliatelle = document.getElementById('taglia');
    /******div de la barre de  progression******/
    var avancement = document.getElementById('avancement-tagliatelle');
        
        setInterval(() => {
            pourcentageTagliatelle += 1;
            avancement.innerHTML = pourcentageTagliatelle + '%';
            avancement.style.width = pourcentageTagliatelle + '%';
            if (pourcentageTagliatelle == 100) {
                pasta += 30;
                valueFarine -= 20;
                valueOeuf -= 200;
                valueEau -= 10;
                money -= 150;

                pourcentageTagliatelle = 0;
                loadPastaOnScreen();
                loadStockOnScreen();
                updateMoney();
            } else if ((valueTagliatelle >= 1000) && (valueTagliatelle < 1000000)) { poids = 'kg';
            } else if ((valueTagliatelle >= 1000000) && (valueTagliatelle < 2000000)) { poids = ' tonne';
            } else if (valueTagliatelle >= 2000000) { poids = ' tonnes'; }  
            
        
        }, 16);
    
}

/*****afficher la quantité de pates produites******/
function loadPastaOnScreen() {
    divProducePasta.innerHTML ='Quantité de pates : ' + pasta + ' ' + poids;
    
destockage();
}


/******afficher les stocks***************/
function loadStockOnScreen() {
    var divFarine= document.getElementById('farine');
    var divOeuf = document.getElementById('oeuf');
    var divEau = document.getElementById('eau');
    divFarine.innerHTML='Farine : ' + valueFarine + poids + '.';
    divOeuf.innerHTML='Oeufs : ' + valueOeuf + ' unités.';
    divEau.innerHTML = 'Eau : ' + valueEau + ' unités.';

}

loadStockOnScreen()
