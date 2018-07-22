const express = require('express');
const router = express.Router();
const pokemon = require('./entrenador.api');

router.route('/registrar_entrenador')
    .post(function (req, res) {
        pokemon.registrarentrenador(req, res);
    });

    router.route('/listar_entrenador')
    .get(function(req, res){
    pokemon.listar(req, res);
});

    module.exports = router;