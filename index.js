import leerProductos from "./usandoFS.js";
import agregarProductosProductos from "./agregarDatos.js";
import mostrarFecha from "./usandoLibExt.js";
import obtenerPokemon from "./consultarPokemon.js";
import buscarProducto from "./buscarProducto.js";
import generarArchivo from "./generarArchivoCSV.js";
import { temporizadorMixto} from "./usandoTemporizador.js";
import analizarTextos from "./analizarTextos.js";
import validarPassword from "./validarContrasena.js";

function ej1() {
    leerProductos()    
}

function ej2(){
    agregarProductosProductos( "Aire",2500)
}
function ej3(){
    mostrarFecha()
}
function ej4(){
obtenerPokemon()
    

}
function ej5(){
    
console.log(buscarProducto("Mouse"))
}
function ej6(){
 generarArchivo()
}
function ej7(){
    temporizadorMixto()

}
function ej8(){
    console.log(analizarTextos("hola alan seras expulsado de peru"))
}
function ej9(){
    if(validarPassword("SapoDeRAana99Chetos")){
        console.log("Password válida")

    }else
          console.log("Password inválida")
}
ej1();
ej2();
ej3();
ej4();
ej5();
ej6();
ej7();
ej8();
ej9();