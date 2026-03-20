const numeros = [1,2,3,4,5,6,7,8,9,10];
let fin="fin intervalo"

function hacerTemporizadorInterval(callback) {
    
    let i = 0;

    const miIntervalo = setInterval(() => {
        console.log(numeros[i]);
        i++;

        if (i >= numeros.length) {
            clearInterval(miIntervalo);
            console.log(fin)
             if (callback) callback();
        }
    }, 1000);
}

function hacerTemporizadorTimeOut() {
    let i = 0;

    function imprimirNumero() {
        if (i < numeros.length) {
            console.log(numeros[i]);
            i++;
            setTimeout(imprimirNumero, 1000); // llama al siguiente después de 1s
        } else {
            console.log("fin timeout");
        }
    }

    imprimirNumero(); // inicia la secuencia
}

export { hacerTemporizadorInterval, hacerTemporizadorTimeOut };