import fs from "fs";


function agregarProductos(nombre,precio) {
    const archivo= fs.readFileSync("./productos.json", "utf-8");
  
    const productos = JSON.parse(archivo)

    const contenido = { nombre, precio };
    productos.push(contenido)

 fs.writeFileSync("./productos.json", JSON.stringify(productos, null, 2), "utf-8"); 
  
   productos.forEach(productos => {
        console.log(`Nombre: ${productos.nombre} - Precio: ${productos.precio}`);
    });
   

}
export default agregarProductos;