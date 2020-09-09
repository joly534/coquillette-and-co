
var level = 1;

var value = 0;
var valueTagliatelle = 0;
var poids = 'kg';
var ingredient = ['farine', 'Oeuf', 'Eau'];
var unite = ' unités';
var travailleur = 0;


var buttonTagliatelle= new ButtonProducer ('pasta','tagliatelles','tagliatelle','assets/pates/tagliatelle.png','TAGLIATELLES',
ingredient[0], ingredient[1], ingredient[2], 100, 500, 100, 1, 5);

if (level = 1)
 {
    buttonTagliatelle.draw();
 }


function embaucherSpaghettis() {
    console.log('ok');
}


function update() {
    noTimeToLoose();
}

update();