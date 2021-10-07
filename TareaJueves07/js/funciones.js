
cargarXML();

var iISBN = document.getElementById("iISBN");

function cargarXML(){
    // En esta funcion leemos los datos del fichero datos.js 
    // en formato xml y lo transformamos en una coleccion de arrays

    var codigo=new DOMParser();
    var myXml = codigo.parseFromString(datosFichero,"text/xml");
    alert(myXml);

    var aISBN = new Array();
    var aTitulo = new Array();
    var aAutor = new Array();
    var aEditorial = new Array();
    var aPaginas = new Array();

    aISBN = myXml.getElementsByTagName("isbn");
    aTitulo = myXml.getElementsByTagName("titulo");
    aAutor = myXml.getElementsByTagName("autor");
    aEditorial = myXml.getElementsByTagName("editorial");
    aPaginas = myXml.getElementsByTagName("paginas");

    //alert(aISBN[0].firstChild.nodeValue);

    iISBN.nodeValue = aISBN[0].firstChild.nodeValue;

}