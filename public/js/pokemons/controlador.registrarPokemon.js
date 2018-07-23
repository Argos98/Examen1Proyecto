'use strict';
listarSelectTipo1();
listarSelectTipo2();
let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtnerDatos);





let inputNumeroPokedex = document.querySelector('#txtNumeroPokedex');

let inputNombrePokemon = document.querySelector('#txtnombrePokemon');

let selectTipo1 = document.querySelector('#sltTipo1');

let selectTipo2 = document.querySelector('#sltTipo2');

let buttonSubirFoto = document.querySelector('#subirFoto');

function obtnerDatos() {

    let infoPokemon = [];
    let error ;


    let nNumeroPokedex = inputNumeroPokedex.value;

    let sNombrePokemon = inputNombrePokemon.value;

    let sTipo1 = selectTipo1.value;

    let sTipo2 = selectTipo2.value
    if (selectTipo2.value == 'Seleccione un tipo') {
        sTipo2 = 'No tiene segundo Tipo';
    }

    let urlFotoPokemon = imgUrl;

    console.log(urlFotoPokemon)

    infoPokemon.push(nNumeroPokedex, sNombrePokemon, sTipo1, sTipo2, urlFotoPokemon);

    
    error = validarCampos();

    if (error == true) {
        swal({
            type: 'warning',
            title: 'No se pudo registrar el Pokemon',
            text: 'Por favor revise los campos en rojo',
            confirmButtonText: 'Entendido'
        });

    } else {

        registrarPokemon(nNumeroPokedex, sNombrePokemon, sTipo1, sTipo2, urlFotoPokemon);

        swal({
            type: 'success',
            title: 'Registro exitoso',
            text: 'El Pokemon se registró adecuadamente',
            confirmButtonText: 'Entendido'
        });


    }

}




function listarSelectTipo1() {
    let tipo = ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
    let select = document.querySelector('#sltTipo1');
    select.options[0] = new Option("Seleccione un tipo");

    for (let i = 0; i < tipo.length; i++) {

        select.options[i + 1] = new Option(tipo[i]);

    }
}


function listarSelectTipo2() {
    let tipo = ['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
    let select = document.querySelector('#sltTipo2');
    select.options[0] = new Option("Seleccione un tipo");

    for (let i = 0; i < tipo.length; i++) {

        select.options[i + 1] = new Option(tipo[i]);

    }
}

function validarCampos() {

    let error;
    let regexNumeros = /^[1234567890]+$/;
    let listaPokemons = obtnereListaPokemons();


    if (inputNumeroPokedex.value == '' || (regexNumeros.test(inputNumeroPokedex.value) == false)) {
        for (let i = 0; i < listaPokemons.length; i++) {

            if (listaPokemons[i]['numero_pokedex'] == (inputNumeroPokedex.value)) {
                inputNumeroPokedex.classList.add('error_input');
                error = true;
            }
        }



    } else {
        inputNumeroPokedex.classList.remove('error_input');
        error = false
    }

    return error;

}
