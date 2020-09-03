
var date = document.getElementById('date');
var mois = ['JAN','FEV','MARS','AVR','MAI','JUIN',
            'JUIL','AOUT','SEPT','OCT','NOV',
            'DEC'];
var annee = 1810;


function noTimeToLoose () {
    var i=0;
    setInterval(() => {
        
        if (i < mois.length) {
            date.innerHTML='';
            date.innerHTML= mois[i] + '<br/>' + annee;
            i ++;
        } else {
            i=0;
            annee +=1;
            date.innerHTML='';
            date.innerHTML= mois[i] + '<br/>' + annee;
        }
        
    }, 2000);

}
noTimeToLoose();