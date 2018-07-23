'use strict';


listarSelectNombreEntrenador();

listarSelectNombrePokemon();

let botonAgregar = document.querySelector('#btnAgregar');

botonAgregar.addEventListener('click', asignarPokemonE);

let selectNombreEntrenador = document.querySelector('#sltNombreE');

let selectPokemon = document.querySelector('#sltPokemon');

function asignarPokemonE() {
    let infoPokemons = obtnereListaPokemons();


    let id = selectNombreEntrenador.value;

    let numeroPokedex = selectPokemon.value;

    let nombrePokemon;


    for (let i = 0; i < infoPokemons.length; i++) {

        if (infoPokemons[i]['numero_pokedex'] == (numeroPokedex)) {
            nombrePokemon = infoPokemons[i]['nombre_pokemon'];
        }
    }


    asignarPokemon(id,numeroPokedex,nombrePokemon);


}


function listarSelectNombreEntrenador() {
    let infoEntrenadores = obtnereListaEntrenadores();
    let select = document.querySelector('#sltNombreE');
    select.options[0] = new Option("Seleccione un entrenador", "");

    for (let i = 0; i < infoEntrenadores.length; i++) {
        select.options[i + 1] = new Option(infoEntrenadores[i]['nombre_entrenadro'], infoEntrenadores[i]['_id']);

    }
}

function listarSelectNombrePokemon() {
    let infoEntrenadores = obtnereListaPokemons();
    let select = document.querySelector('#sltPokemon');
    select.options[0] = new Option("Seleccione un Pokemon", "");

    for (let i = 0; i < infoEntrenadores.length; i++) {
        select.options[i + 1] = new Option(infoEntrenadores[i]['nombre_pokemon'], infoEntrenadores[i]['numero_pokedex']);

    }
}