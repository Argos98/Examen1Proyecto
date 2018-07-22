'use strict';
let mongoose = require('mongoose');

let entrenadorSchema = new mongoose.Schema({
    
    numero_entrenador: { type: String, required: true },
    nombre_entrenadro: { type: String, required: true },
    edad: { type: String, required: true },
    genero: { type: String, required: true },
    foto: { type: String, required: true }

});

module.exports = mongoose.model('Entrenador', entrenadorSchema);