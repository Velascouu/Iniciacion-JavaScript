
//Guardamos en una variable los elementos
var iISBN = document.getElementById("iISBN");
var titulo = document.getElementsById("Titulo");
var autor = document.getElementsById("Autor");
var editorial = document.getElementsById("Editorial");
var paginas = document.getElementsById("Paginas");

//Creamos los Arrays para guardar los datos
var aISBN = new Array();
var aTitulo = new Array();
var aAutor = new Array();
var aEditorial = new Array();
var aPaginas = new Array();

var posicion = 0;



bSiguiente.addEventListenner("click", registroSiguiente, false);

function cargarXML(){
    // En esta funcion leemos los datos del fichero datos.js 
    // en formato xml y lo transformamos en una coleccion de arrays

    alert("sbdvbs");

    var codigo=new DOMParser();
    var myXml = codigo.parseFromString(datosFichero,"text/xml");

    aISBN = myXml.getElementsByTagName("isbn");
    aTitulo = myXml.getElementsByTagName("titulo");
    aAutor = myXml.getElementsByTagName("autor");
    aEditorial = myXml.getElementsByTagName("editorial");
    aPaginas = myXml.getElementsByTagName("paginas");

    //alert(aISBN[0].firstChild.nodeValue);

    alert(aISBN[0].firstChild.nodeValue);

    mostrarRegistro(posicion);

}

function registroSiguiente(){
    posicion++;
    mostrarRegistro(posicion);
}

function mostrarRegistro(posicion){

    iISBN.value = aISBN[posicion].firstChild.nodeValue;
    titulo.value = aTitulo[posicion].firstChild.nodeValue;
    autor.value = aAutor[posicion].firstChild.nodeValue;
    editorial.value = aEditorial[posicion].firstChild.nodeValue;
    paginas.value = aPaginas[posicion].firstChild.nodeValue;

}

cargarXML();