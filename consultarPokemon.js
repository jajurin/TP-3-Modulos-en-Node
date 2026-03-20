async function obtenerPokemon() {
    const respuestas = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const data = await respuestas.json();
const habilidades = data.abilities;
console.log("ejercicio 4:")
    console.log(habilidades); //fetch es increible
}

export default obtenerPokemon;