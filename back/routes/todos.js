//DEFINICIÓN DE LAS RUTAS DE NUESTRA API
var express = require('express');
var router = express.Router();
var db = require("../models");
// El hecho de guardar toda la lógica de las rutas en el directorio helpers 
// es únicamente por tenerlo todo más ordenador
var helpers = require("../helpers/todos");

//El prefijo de las rutas es simpres /api/todos. En la raiz tenemos 2 opciones
// - Obtener todas las tareas (mediante GET)
// - Crear una tarea (mediante POST)
router.route('/')
 .get(helpers.getTodos)
 .post(helpers.createTodo)

 router.route('/admin/')
 .get(helpers.getAdmin)

 router.route('/login/')
  .post(helpers.signin)
  
  

 router.route('/puntuaciones/')
 .get(helpers.getPuntuaciones)
 .post(helpers.createPuntuaciones)

 
  

// Si añadimos el id de la ruta tendremos 3 opciones
// - (GET) Obtener una tarea en concreto
// - (PUT) Actualizar una tarea
// - (DELETE) Borrar una tarea
router.route('/:todoId')
  .get(helpers.getTodo)
  .put(helpers.updateTodo)
  .delete(helpers.deleteTodo)
  
module.exports = router;