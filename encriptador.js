

var palabra=[],letraActual=[] , NuevaPalabra=[],NuevaPalabra2=[],NuevaPalabra3=[],NuevaPalabra4=[],NuevaPalabra5=[];
var palabraEncriptada=[] , textoCopia=[];
let i=0,letraAscii , banderaError=0 , banderaEncriptado=0;


function encriptarPalabra(){
    
    palabra = document.getElementById('textoUsuario').value;
    banderaError=0;
    
 
    // Verificamos si las letras son solo minusculas, de acuerdo al codigo ASCII rango "a = 97 - z = 122 - espacio =32 - salto linea= 10"


    for(i = 0; i < palabra.length; i++){
        

        letraActual = palabra.charAt(i);

        letraAscii = letraActual.charCodeAt(0);
        //console.log(letraAscii);

        if((letraAscii >96 && letraAscii <123 && banderaError == 0) || letraAscii==32 || letraAscii==10)
        {
            //console.log(`la letra ${letraActual} es minucula`);
            // document.getElementById('textoencriptado').innerHTML = palabra;

        }
        else{
            //console.log("error caracter invalido");
            banderaError=1;
            document.getElementById('textoencriptado').innerHTML = "Error, el texto a encriptar contiene caracteres no permitidos (mayusculas , signos etc. ) "
        }

        
     
    }

    // Encriptar la palabra ya verificada (solo minusculas)

    if(banderaError==0){

        NuevaPalabra=palabra.replaceAll('e', 'enter');
        NuevaPalabra2=NuevaPalabra.replaceAll('i', 'imes');
        NuevaPalabra3=NuevaPalabra2.replaceAll('a', 'ai');
        NuevaPalabra4=NuevaPalabra3.replaceAll('o', 'ober');
        NuevaPalabra5=NuevaPalabra4.replaceAll('u', 'ufat');
  
    
        document.getElementById('textoencriptado').innerHTML = NuevaPalabra5;
        console.log(palabra);
        console.log(NuevaPalabra5);
        banderaEncriptado=1;
    }


}

// Desencriptar palabra   
    
function desencriptarPalabra(){


    palabra = document.getElementById('textoUsuario').value;
    banderaError=0;
    
 
    // Verificamos si las letras son solo minusculas, de acuerdo al codigo ASCII rango "a = 97 - z = 122 - espacio =32 - salto linea= 10"


    for(i = 0; i < palabra.length; i++){
        

        letraActual = palabra.charAt(i);

        letraAscii = letraActual.charCodeAt(0);
        //console.log(letraAscii);

        if((letraAscii >96 && letraAscii <123 && banderaError == 0) || letraAscii==32 || letraAscii==10)
        {
            //console.log(`la letra ${letraActual} es minucula`);
            // document.getElementById('textoencriptado').innerHTML = palabra;

        }
        else{
            //console.log("error caracter invalido");
            banderaError=1;
            document.getElementById('textoencriptado').innerHTML = "Error, el texto a encriptar contiene caracteres no permitidos (mayusculas , signos etc. ) "
        }

        
     
    }

    if(banderaEncriptado==0 && banderaError==0)
    {
        palabra = document.getElementById('textoUsuario').value;
        NuevaPalabra=palabra.replaceAll('enter', 'e');
        NuevaPalabra2=NuevaPalabra.replaceAll('imes', 'i');
        NuevaPalabra3=NuevaPalabra2.replaceAll('ai', 'a');
        NuevaPalabra4=NuevaPalabra3.replaceAll('ober', 'o');
        NuevaPalabra5=NuevaPalabra4.replaceAll('ufat', 'u');
    
        document.getElementById('textoencriptado').innerHTML = NuevaPalabra5;
    }
    else{
        //console.log("error caracter invalido");
        banderaError=1;
        document.getElementById('textoencriptado').innerHTML = "Error, el texto a desencriptar contiene caracteres no permitidos (mayusculas , signos etc. ) "
    }d


}

function copiarPalabra(){
    
    textoCopia=document.getElementById('textoencriptado').value;

    console.log(textoCopia);

    navigator.clipboard.writeText(textoCopia);

    
    document.getElementById("textoUsuario").value = " ";
    document.getElementById('textoencriptado').innerHTML = " ";
    
    banderaEncriptado=0;

}

function borrar(){
    document.getElementById("textoUsuario").value = " ";
    document.getElementById('textoencriptado').innerHTML = " ";

    banderaEncriptado=0;
}



  

