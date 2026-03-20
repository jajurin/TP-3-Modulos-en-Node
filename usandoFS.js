import fs from "fs";


function leerProductos() {
    const archivo= fs.readFileSync("./productos.json", "utf-8");
  
    const productos = JSON.parse(archivo)
   productos.forEach(productos => {
        console.log(`Nombre: ${productos.nombre} - Precio: ${productos.precio}`);
    });

}
export default leerProductos;