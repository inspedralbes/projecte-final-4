//DEFINICIÓN DEL ESQUEMA DE LA BASE DE DATOS USANDO MONGOOSE
var mongoose = require('mongoose');

//A la hora de definir el esquema podemos exigir que cumplan un requisito de tipo
//o que sean requeridos o dar valores por defecto
//Este esquema será usado cuando se interactue con la base de datos (en el tirectorio helpers)
var puntuacionSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    tiempo: {
        type: String,
    },
    pistas: {
        type: String,
    },
    intentos1: {
        type: String,
    },
    intentos2: {
        type: String,
    },
    intentos3: {
        type: String,
    },
    intentos4: {
        type: String,
    },
    intentos5: {
        type: String,
    },
});

//Creo un modelo mongoose especificando el nombre del modelo, el modelo en si y el nombre
//de la colección que tendrá en Mongo (el nombre de la base la 'tabla')
var Punt = mongoose.model('Punt', puntuacionSchema, 'puntuaciones');

module.exports = Punt;