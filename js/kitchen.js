
var buttonTagliatelle= new ButtonOfGame ('kitchen','tagliatelle','Tagliatelles',4,valueNumberOfWorker,pourcentage,unite[2],'assets/pictures/pates/tagliatelle.jpg',
50,travail[1]);

var buttonSpaghetti = new ButtonOfGame (travail[1],'Spaghettis', unite[2],
reserve[0],reserve[1],reserve[2],
60,600,100,
0.6,6,1,
valueNumberOfWorker,1,pourcentage,unite[4],
'kitchen','spaghetti','assets/pictures/pates/spaghetti.jpg', 4.5, 50); 

var buttonCoquillette = new ButtonOfGame(travail[1],'Coquillettes', unite[2],
reserve[0],reserve[1],reserve[2],
60,600,100,
0.6,6,1,
valueNumberOfWorker,1,pourcentage,unite[4],
'kitchen','Coquillette','assets/pictures/pates/coquillette.jpg',5,50);

var buttonFusilli = new ButtonOfGame(travail[1],'Tortis', unite[2],
reserve[0],reserve[1],reserve[2],
60,600,100,
0.6,6,1,
valueNumberOfWorker,1,pourcentage,unite[4],
'kitchen','Tortillette','assets/pictures/pates/fusilli.jpg',5.5,50);

var buttonFarfalle = new ButtonOfGame(travail[1],'Farfalles', unite[2],
reserve[0],reserve[1],reserve[2],
60,600,100,
0.6,6,1,
valueNumberOfWorker,1,pourcentage,unite[4],
'kitchen','Farfalle','assets/pictures/pates/farfalle.jpg',6,50);

var buttonTortiglioni = new ButtonOfGame(travail[1],'Tortiglioni', unite[2],
reserve[0],reserve[1],reserve[2],
60,600,100,
0.6,6,1,
valueNumberOfWorker,1,pourcentage,unite[4],
'kitchen','Tortiglioni','assets/pictures/pates/tortiglioni.jpg',6.5,50);


buttonTagliatelle.draw();
buttonSpaghetti.draw();
buttonCoquillette.draw();
buttonFusilli.draw();
buttonFarfalle.draw();
buttonTortiglioni.draw();