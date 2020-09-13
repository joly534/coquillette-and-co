
var level = 1;
var ingredient = ['farine : ', 'Oeuf : ', 'Eau : '];
var unite = ['Unités','Gr','kg','Tonnes','%'];
var pourcentage = 0;
var valueNumberOfWorker = 0;
var employes = [];

var buttonTagliatelle= new ButtonProducer ('Tagliatelles',unite[2],
    ingredient[0],ingredient[1],ingredient[2],
    60,600,100,
    0.6,6,1,
    valueNumberOfWorker,1,pourcentage,unite[4],
    'kitchen','tagliatelle','assets/pictures/pates/tagliatelle.jpg',4,50);

var buttonSpaghetti = new ButtonProducer ('Spaghettis', unite[2],
   ingredient[0],ingredient[1],ingredient[2],
   60,600,100,
   0.6,6,1,
   valueNumberOfWorker,1,pourcentage,unite[4],
   'kitchen','spaghetti','assets/pictures/pates/spaghetti.jpg', 4.5, 50); 
   
var buttonCoquillette = new ButtonProducer('Coquillettes', unite[2],
   ingredient[0],ingredient[1],ingredient[2],
   60,600,100,
   0.6,6,1,
   valueNumberOfWorker,1,pourcentage,unite[4],
   'kitchen','Coquillette','assets/pictures/pates/coquillette.jpg',5,50);

var buttonFusilli = new ButtonProducer('Tortis', unite[2],
   ingredient[0],ingredient[1],ingredient[2],
   60,600,100,
   0.6,6,1,
   valueNumberOfWorker,1,pourcentage,unite[4],
   'kitchen','Tortillette','assets/pictures/pates/fusilli.jpg',5.5,50);

var buttonFarfalle = new ButtonProducer('Farfalles', unite[2],
   ingredient[0],ingredient[1],ingredient[2],
   60,600,100,
   0.6,6,1,
   valueNumberOfWorker,1,pourcentage,unite[4],
   'kitchen','Farfalle','assets/pictures/pates/farfalle.jpg',6,50);

var buttonTortiglioni = new ButtonProducer('Tortiglioni', unite[2],
   ingredient[0],ingredient[1],ingredient[2],
   60,600,100,
   0.6,6,1,
   valueNumberOfWorker,1,pourcentage,unite[4],
   'kitchen','Tortiglioni','assets/pictures/pates/tortiglioni.jpg',6.5,50);

function update() {
   noTimeToLoose();   
      buttonTagliatelle.draw();
      buttonSpaghetti.draw();
      buttonCoquillette.draw();
      buttonFusilli.draw();
      buttonFarfalle.draw();
      buttonTortiglioni.draw();
   
}

update();