
    var jour = 1;
    var i=0;
    var mois = ['JAN','FEV','MARS','AVR','MAI','JUIN',
                'JUIL','AOUT','SEPT','OCT','NOV',
                'DEC'];
    var annee = 1900;
    var divDate = document.getElementById('date');


function noTimeToLoose () {
    
    setInterval(() => {
       jour += 1;
    }, 20);

}