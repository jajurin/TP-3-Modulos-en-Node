import fs from "fs";


function generarArchivo() {
    const archivo= fs.readFileSync("./productos.json", "utf-8");

    const productos = JSON.parse(archivo)
   
    let csv = "nombre,precio\n";

      productos.forEach(productos => {
    csv += `${productos.nombre},${productos.precio}\n`;


  });

    fs.writeFileSync("./productos.csv", csv, "utf-8");

    console.log("ejercicio 6:")
    console.log(csv)
}
export default generarArchivo;