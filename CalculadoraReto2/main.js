import { resta, suma , multiplicacion , division} from "./operaciones.js";

function operacionesT(){

let numero1 = parseFloat( document.getElementById("numero1").value);
let numero2 = parseFloat( document.getElementById("numero2").value);
let operaciones = document.getElementById("operaciones").value;
let resultado;

if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("Resultado").innerHTML = "Por favor, ingresa números válidos.";
    return;
}


    if (operaciones == "1"){

    
        resultado = suma(numero1,numero2);
   
        console.log(resultado);
   }
   else if(operaciones == "2"){

    resultado = resta(numero1,numero2);
    
   }
   else if(operaciones == "3"){

    resultado = multiplicacion(numero1,numero2);

   }
   else if(operaciones == "4"){
    resultado = division(numero1, numero2);
   }



   document.getElementById("Resultado").innerHTML = resultado;
}

// Hace que la funcion operacionesT se pueda acceder desde el HTML
window.operacionesT = operacionesT;



