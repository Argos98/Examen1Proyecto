'use strict';

function registrarPokemon(nNumeroPokedex, sNombrePokemon, sTipo1, sTipo2, urlFotoPokemon) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:8080/api/registrar_pokemon',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            numero_pokedex: nNumeroPokedex,
            nombre_pokemon: sNombrePokemon,
            tipo_1: sTipo1,
            tipo_2: sTipo2,
            foto: urlFotoPokemon


        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {
        console.log(response);
    });

    return respuesta;
}