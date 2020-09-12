
var level = 1;
var ingredient = ['farine', 'Oeuf', 'Eau'];
var unite = ['Unités','Gr','kg','Tonnes','%'];
var pourcentage = 0;
var valueNumberOfWorker = 0;

var employes = [];

function update() {
   noTimeToLoose();
      var buttonTagliatelle= new ButtonProducer (
                                                 'Tagliatelles',unite[2],
                                                 ingredient[0],ingredient[1],ingredient[2],
                                                 60,600,100,
                                                 0.6,6,1,
                                                 valueNumberOfWorker,1,pourcentage,unite[4],
                                                 'kitchen','tagliatelle','assets/pates/tagliatelle.png',4,50
                                                 );
      var buttonSeller   = new ButtonProducer(
         'Vendeur', unite[2],
         ingredient[0],ingredient[1],ingredient[2],
         60,600,100,
         0.6,6,1,
         valueNumberOfWorker,1,pourcentage,unite[4],
         'shop','vendeur','assets/magasin/vendeur.png',4,50
         
      )



       
      buttonTagliatelle.draw();
      buttonSeller.draw();
   
}

update();