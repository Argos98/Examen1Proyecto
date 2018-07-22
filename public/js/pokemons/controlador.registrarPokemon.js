'use strict';

let botonRegistrar = document.querySelector('#btnRegistrar');

botonRegistrar.addEventListener('click', obtnerDatos);


let inputNumeroPokedex = document.querySelector('#txtNumeroPokedex');

let inputNombrePokemon = document.querySelector('#txtnombrePokemon');

let selectTipo1 = document.querySelector('#sltTipo1');

let selectTipo2 = document.querySelector('#sltTipo2');

let buttonSubirFoto = document.querySelector('#subirFoto');

function obtnerDatos() {

    let infoPokemon=[];

let nNumeroPokedex = inputNumeroPokedex.value;

let sNombrePokemon = inputNombrePokemon.value;

let sTipo1 = selectTipo1.value;

let sTipo2 = selectTipo2.value

let urlFotoPokemon = imgUrl;
 
console.log(urlFotoPokemon)

infoPokemon.push(nNumeroPokedex, sNombrePokemon, sTipo1, sTipo2, urlFotoPokemon);



}
