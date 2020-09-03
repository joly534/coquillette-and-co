
var date = document.getElementById('date');
var valeurDate = 1910;


function noTimeToLoose () {
    setInterval(() => {
        date.innerHTML='ANNEE <br/>';
        date.append(valeurDate);
        valeurDate +=1;
    }, 60000);

}
noTimeToLoose();