/************constructeur fonction affichage valeur sur ecran************/
function Produce(name,value, unit){
    this.name = name,
    this.value = value,
    this.unit = unit,
    this.screen = function() {
        loadOnScreen.append(name + ' : ' + value + unit ); 
    }
}