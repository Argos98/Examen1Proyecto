'use strict';

const pokemonModel = require('./pokemon.model');

module.exports.registrarPokemon = function (req, res) {

    let nuevoPokemon = new pokemonModel({

        numero_pokedex: req.body.numero_pokedex,
        nombre_pokemon: req.body.nombre_pokemon,
        tipo_1: req.body.tipo_1,
        tipo_2: req.body.tipo_2,
        foto: req.body.foto

    });

    nuevoPokemon.save(function (error) {

        if (error) {

            res.json({ success: false, msg: 'No se pudo registrar al pokemon, ocurrió el siguiente error' + error });

        } else {

            res.json({ success: true, msg: 'El pokemon se registró con éxito' });
            
        }

    });

}

module.exports.listar = function(req, res){
    pokemonModel.find().then(
        function(pokemon){
            res.send(pokemon);
        });
};

