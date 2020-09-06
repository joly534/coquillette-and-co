
var jour = 1;
var i = 0;

var mois = ['JAN','FEV','MARS','AVR','MAI','JUIN','JUIL','AOUT','SEPT','OCT','NOV','DEC'];

var annee = 1900;

function noTimeToLoose () {
    var divDate = document.getElementById('date');
    /**afiche la date à l'écran */
    divDate.innerHTML= jour + '<br/>' + mois[i] + ' ' + annee ;
    console.log(i)

    /***à interval régulier */
    
    setInterval(() => {
        /**les jours passent */
        jour += 1;
        /** met à jours la date à l'ecran */
        divDate.innerHTML= jour + '<br/>' + mois[i] + ' ' + annee ;
        /**vérifie si c'est le mois de Février */
        if ((jour == 29) && (i==1)) {
            jour = 1;
            i += 1 ;
        /**vérifie si c'est un mois a 31 jours */    
        } else if ((jour == 31) && ((i == 0) || (i == 2) || (i == 4) || (i == 6) || (i == 7) || (i == 9 ) || (i == 11))) {
            jour = 1;
            i += 1;
        /**vérifie si c'est un mois à 30 jours */
        } else if ((jour == 30) && ((i ==3) || (i ==5) || (i == 8) || (i == 10))) {
            jour = 1;
            i += 1;
        }
        /**vérifie si l'année est finie */
        if (i == 12 ) {
            i = 0;
            annee += 1;
        }
   
    }, 20000);

}