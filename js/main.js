
var valueTagliatelle = 0;


function produceTagliatelle()
{
    var state = false;
    var tagliatelle = document.getElementById('taglia')
    var avancement = document.getElementById('avancement-tagliatelle');
    avancement.style.width = 0 + '%';
    if (state == false) {
        avancement.style.width = 0 + '%';
        setInterval(() => {
            valueTagliatelle += 10;
            tagliatelle.innerHTML= "";
            tagliatelle.innerHTML= "Quantité : " +  valueTagliatelle + " grammes";
            avancement.style.width = 100 + '%';
            console.log(tagliatelle);
        }, 2500);
    } else {
        setTimeout(() => {
            valueTagliatelle += 10;
            tagliatelle.innerHTML= "";
            tagliatelle.innerHTML= "Quantité : " + valueTagliatelle + " grammes";
            avancement.style.width = 100 + '%';
            console.log(tagliatelle);
        }, 2500);
    }
}

function update(){

}

update();