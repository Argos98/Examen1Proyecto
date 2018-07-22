'use strict';

imprimirlistaPokemons();



function imprimirlistaPokemons(pFiltro) {
    let ifnoPokemons = obtnereListaPokemons();
    let tbody = document.querySelector('#tblPokemons tbody');

    tbody.innerHTML = ' ';

    for (let i = 0; i < ifnoPokemons.length; i++) {

        let fila = tbody.insertRow();

        let cNumeroPokedex = fila.insertCell();
        let cNobrePokemon = fila.insertCell();
        let cTipo1 = fila.insertCell();
        let cTipo2 = fila.insertCell();
        let cFoto = fila.insertCell();

        let img = document.createElement('img');
            img.src = ifnoPokemons[i]['foto'];
            img.classList.add('image');
            cFoto.appendChild(img);


        cNumeroPokedex.innerHTML = ifnoPokemons[i]['numero_pokedex'];
        cNobrePokemon.innerHTML = ifnoPokemons[i]['nombre_pokemon'];
        cTipo1.innerHTML = ifnoPokemons[i]['tipo_1'];
        cTipo2.innerHTML = ifnoPokemons[i]['tipo_2'];
        
    }

}

