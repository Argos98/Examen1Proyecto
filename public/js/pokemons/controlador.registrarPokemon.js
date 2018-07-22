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

    let nNumeroPokedex = inputNumeroPokedex.value;

    let sNombrePokemon = inputNombrePokemon.value;

    let sTipo1 = selectTipo1.value;

    let sTipo2 = selectTipo2.value

    let urlFotoPokemon = imgUrl;

    console.log(urlFotoPokemon)

    infoPokemon.push(nNumeroPokedex, sNombrePokemon, sTipo1, sTipo2, urlFotoPokemon);



}




function listarSelectTipo1() {
    let tipo =['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
    let select = document.querySelector('#sltTipo1');
    select.options[0] = new Option("Seleccione un tipo");

    for (let i = 0; i < tipo.length; i++) {
        
        select.options[i+1] = new Option(tipo[i]);

    }
}


function listarSelectTipo2() {
    let tipo =['Acero', 'Agua', 'Bicho', 'Dragón', 'Eléctrico', 'Fantasma', 'Fuego', 'Hada', 'Hielo', 'Lucha', 'Normal', 'Planta', 'Psíquico', 'Roca', 'Siniestro', 'Tierra', 'Veneno', 'Volador'];
    let select = document.querySelector('#sltTipo2');
    select.options[0] = new Option("Seleccione un tipo");

    for (let i = 0; i < tipo.length; i++) {
        
        select.options[i+1] = new Option(tipo[i]);

    }
}
