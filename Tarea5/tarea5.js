function convertir(){
    var num=document.getElementById("num");
    var resultado;
    var opcion=document.getElementById("tipoConver").value;
    var number=parseInt(num);
    switch (opcion){
        case 1:{
            resultado=number.toString(2);
            break;
        }
        case 2:{
            resultado=number.toString(8);
            break;
        }
            
        case 3:{
            resultado=number.toString(16);
            break;
        }
        case 4:{
            resultado=parseInt(num, 2);
            break;
        }    
        case 5:{
            resultado=parseInt(num, 8);
            break;
        }    
        case 6:{
            resultado=parseInt(num, 16);
            break;
        }
        default :{break;}
    }
    document.getElementById("resultado").value=resultado;
}
