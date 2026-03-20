import fs from "fs";


function buscarProducto(nombre){

 const archivo= fs.readFileSync("./productos.json", "utf-8");

   const productos = JSON.parse(archivo)
let Producto= {}
   for(let i=0;i<productos.length;i++){
      

    if(productos[i].nombre==nombre){
 
        Producto=productos[i]
    }

   }
 console.log("Ejercicio 5:")

return Producto


}
export default buscarProducto