'use strict';
let mongoose = require('mongoose');

let pokemonSchema = new mongoose.Schema({
    numero_pokedex: { type: String, required: true },
    nombre_pokemon: { type: String, required: true },
    tipo_1: { type: String, require: true },
    tipo_2: { type: String, required: false },
    foto: { type: String, require: true }


});

module.exports = mongoose.model('Pokemon', pokemonSchema);