'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtnerDatos);

let inputNumeroEntrenaodor = document.querySelector('#txtnumeroEntrenador');

let inputNombreEntrenaodor = document.querySelector('#txtnombreEntrenador');

let inputEdad = document.querySelector('#txtEdad');

let selectGenero = document.querySelector('#sltGenero');

let buttonSubirFoto = document.querySelector('#subirFoto');


function obtnerDatos() {

    let sNumeroEntrendor =  inputNumeroEntrenaodor.value;

    let sNombreEntrenador = inputNombreEntrenaodor.value;

    let nEdad = inputEdad.value;

    let sGenero = selectGenero.value;
      
    let urlFotoPokemon = imgUrl;

    registrarEntrenador(sNumeroEntrendor,sNombreEntrenador,nEdad,sGenero,urlFotoPokemon);

    
}

