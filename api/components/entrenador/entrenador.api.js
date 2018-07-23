'use strict';

const entrenadorModel = require('./entrenador.model');

module.exports.registrarentrenador = function (req, res) {

    let nuevoEntrenador = new entrenadorModel({

        numero_entrenador: req.body.numero_entrenador,
        nombre_entrenadro: req.body.nombre_entrenadro,
        edad: req.body.edad,
        genero: req.body.genero,
        foto: req.body.foto

    });

    nuevoEntrenador.save(function (error) {

        if (error) {

            res.json({ success: false, msg: 'No se pudo registrar el entrenador, ocurrió el siguiente error' + error });

        } else {

            res.json({ success: true, msg: 'El entrenador se registró con éxito' });

        }

    });

}

module.exports.listar = function (req, res) {
    entrenadorModel.find().then(
        function (entrenador) {
            res.send(entrenador);
        });
};


module.exports.asignarPokemon = function (req, res) {

    entrenadorModel.update({
        _id: req.body._id
    }, {
            $push: {
                'pokemons': {
                    numero_pokedex: req.body.numero_pokedex,
                    nombre_pokemon: req.body.nombre_pokemon

                }
            }
        },
        function (error) {
            if (error) {
                res.json({
                    success: false,
                    msg: 'No se pudo Signar el pokemon, ocurrió el siguiente error' + error
                });
            } else {
                res.json({
                    success: true,
                    msg: 'El pokemon se asignó con éxito'
                });
            }
        }
    )
};


