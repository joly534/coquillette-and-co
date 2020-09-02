
var valueTagliatelle = 0;


function produceTagliatelle()
{
    var state = false;
    var pourcentageTagliatelle = 0;
    /******div qui entoure la barre de progression******/
    var tagliatelle = document.getElementById('taglia')
    /******div de la barre de  progression******/
    var avancement = document.getElementById('avancement-tagliatelle');
    /******unite de mesure */
    var poids = 'gr';
        
        setInterval(() => {
            pourcentageTagliatelle += 1;
            avancement.innerHTML = pourcentageTagliatelle + '%';
            avancement.style.width = pourcentageTagliatelle + '%';
            if (pourcentageTagliatelle == 100) {
                valueTagliatelle += 100;
                pourcentageTagliatelle = 0;
                tagliatelle.innerHTML= "";
                tagliatelle.innerHTML= "Quantité : " +  valueTagliatelle + poids;
            } else if ((valueTagliatelle >= 1000) && (valueTagliatelle < 1000000)) { poids = 'kg';
            } else if ((valueTagliatelle >= 1000000) && (valueTagliatelle < 2000000)) { poids = ' tonne';
            } else if (valueTagliatelle >= 2000000) { poids = ' tonnes'; }      
        }, 16);
}

function update(){

}

update();