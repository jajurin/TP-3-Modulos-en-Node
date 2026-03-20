import leerProductos from "./usandoFS.js";
import agregarProductosProductos from "./agregarDatos.js";
import mostrarFecha from "./usandoLibExt.js";
import obtenerPokemon from "./consultarPokemon.js";
import buscarProducto from "./buscarProducto.js";
import generarArchivo from "./generarArchivoCSV.js";
import { hacerTemporizadorInterval, hacerTemporizadorTimeOut } from "./usandoTemporizador.js";

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
    hacerTemporizadorInterval()
    hacerTemporizadorTimeOut()
}
ej1();
ej2();
ej3();
ej4();
ej5();
ej6();
ej7();