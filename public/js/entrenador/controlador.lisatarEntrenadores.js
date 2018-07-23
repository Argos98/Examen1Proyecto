'use strict';

imprimirlistaPokemons();



function imprimirlistaPokemons(pFiltro) {
    let infoEntrnadores = obtnereListaEntrenadores();
    let tbody = document.querySelector('#tblPokemons tbody');

    tbody.innerHTML = ' ';

    for (let i = 0; i < infoEntrnadores.length; i++) {

        let fila = tbody.insertRow();

        let cFoto = fila.insertCell();
        let cNumeroEntrenador = fila.insertCell();
        let cNombreEntrenadro = fila.insertCell();
        let cEdad = fila.insertCell();
        let cGenero = fila.insertCell();
       

        let img = document.createElement('img');
            img.src = infoEntrnadores[i]['foto'];
            img.classList.add('image');
            cFoto.appendChild(img);

            

        cNumeroEntrenador.innerHTML = infoEntrnadores[i]['numero_entrenador'];
        cNombreEntrenadro.innerHTML = infoEntrnadores[i]['nombre_entrenadro'];
        cEdad.innerHTML = infoEntrnadores[i]['edad'];
        cGenero.innerHTML = infoEntrnadores[i]['genero'];
        
    }

}
