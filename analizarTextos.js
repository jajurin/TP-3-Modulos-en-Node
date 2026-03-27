function analizarTextos(texto){
console.log("ejercicio 8:")
    const palabrasArray = texto.trim().split(/\s+/);
    const cantPal = texto.trim() === "" ? 0 : palabrasArray.length;

    const textoLimpio = texto.toLowerCase();

    const vocales = textoLimpio.match(/[aeiouáéíóú]/g);
    const cantVoc = vocales ? vocales.length : 0;

    const consonantes = textoLimpio.match(/[bcdfghjklmnñpqrstvwxyz]/g);
    const cantCons = consonantes ? consonantes.length : 0;

    const Palabra = {
        cantCar: texto.length,
        cantPal: cantPal,
        cantVoc: cantVoc,
        cantCons: cantCons
    };

    return Palabra;
}
export default analizarTextos