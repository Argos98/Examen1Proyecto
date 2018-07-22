function obtnereListaPokemons() {
    let listaPokemons = [];

    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:8080/api/listar_pokemon',
        type: 'get',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

        }
    });

    peticion.done(function (response) {
        respuesta = response;
    });

    peticion.fail(function (response) {

    });

    return respuesta;

    return listaPokemons;
}