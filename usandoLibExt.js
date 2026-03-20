import dayjs from "dayjs";

function mostrarFecha(){

    const dia = dayjs();

    let fecha = dia.format("DD/MM/YYYY")
    let hora = dia.format(("HH:mm:ss"))
    let fechaForm = dia.format("dddd, D MMMM YYYY")
    
    console.log("ejercicio 3:")

    console.log(`Fecha: ${fecha}, Hora: ${hora}, Fecha formateada: ${fechaForm}`);


}

export default mostrarFecha