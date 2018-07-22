'use strict';

          
            function registrarEntrenador(sNumeroEntrendor,sNombreEntrenador,nEdad,sGenero,urlFotoPokemon) {
    let respuesta = '';
    let peticion = $.ajax({
        url: 'http://localhost:8080/api/registrar_entrenador',
        type: 'post',
        contentType: 'application/x-www-form-urlencoded; charset=utf-8',
        dataType: 'json',
        async: false,
        data: {

            numero_entrenador: sNumeroEntrendor ,
            nombre_entrenadro: sNombreEntrenador,
            edad: nEdad ,
            genero: sGenero ,
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