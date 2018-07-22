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

module.exports.listar = function(req, res){
    entrenadorModel.find().then(
        function(entrenador){
            res.send(entrenador);
        });
};

