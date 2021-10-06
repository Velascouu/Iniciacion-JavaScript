
palabra.addEventListenner("blur", creaGuiones, true);
caracter.addEventListenner("keyup", buscaCaracteres, false);


var guiones;

function CreaGuiones() {

    guiones = palabras.value;

    guiones = guiones.replace(/[a-z]/gi, "_");

    Aciertos.value
}

function buscarCaracter(){

    if (caracter.value == ""){
        return
    };
    var palabraA = (palabra.value).toUpperCase();
    var caracterBuscar = caracter.value.toUpperCase();
    var posicion = palabraA.indesxOf(caracterBuscar);
    var esAcierto = false;

    while(posicion > -1){

        guiones = guiones.substring(0, posicion) + caracterBuscar + guiones.substr(posicion + 1, guiones.length);

        Aciertos.value = guiones;

        posicion = palabraA.indexOf(caracterBuscar, posicion +1)
        esAcierto = true;
    }
    if (!esAcierto){
        fallos.innerHTML = fallos.innerHTML + "<b>" + caracterBuscar +"<b>"; 
    }
    caracter.value = "";

}