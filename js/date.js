


function noTimeToLoose () {
    var i=0;
    var jour = 1;var divDate = document.getElementById('date');
    var mois = ['JAN','FEV','MARS','AVR','MAI','JUIN',
                'JUIL','AOUT','SEPT','OCT','NOV',
                'DEC'];
    var annee = 1900;
    
    divDate.innerHTML= jour + '<br/>' + mois[0] + ' ' + annee ;
    setInterval(() => {
        if (jour < 30 ) {
            jour++;
        }
        
        if (jour === 30) {
            divDate.innerHTML='';
            divDate.innerHTML= jour + '<br/>' + mois[i] + ' ' + annee ;
            i ++;
            jour = 1;
        } 
        
    }, 2000);

}
noTimeToLoose();