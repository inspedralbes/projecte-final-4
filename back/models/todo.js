//DEFINICIÓN DEL ESQUEMA DE LA BASE DE DATOS USANDO MONGOOSE
var mongoose = require('mongoose');

//A la hora de definir el esquema podemos exigir que cumplan un requisito de tipo
//o que sean requeridos o dar valores por defecto
//Este esquema será usado cuando se interactue con la base de datos (en el tirectorio helpers)
var todoSchema = new mongoose.Schema({
    palabra: {
        type: String,
    },
    definicion: {
        type: String,
    },
});

//Creo un modelo mongoose especificando el nombre del modelo, el modelo en si y el nombre
//de la colección que tendrá en Mongo (el nombre de la base la 'tabla')
var Todo = mongoose.model('Paraudl', todoSchema, 'Paraudl');

module.exports = Todo;