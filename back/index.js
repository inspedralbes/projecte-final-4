/* Estructura de la aplicación
index.js --> Punto de entrada de la aplicación
 ----> models      directorio con el modelo de la bd usado en la aplicación
 ----> routes      definición de las rutas de la api
 ----> helpers     métodos auxiliares que implementan las rutas de la api
 */

//Cargamos la libreria express, libreria que simplifica el uso de Node.js
const bcrypt = require('bcrypt')

var express = require('express'),
    app = express(),
    port = 7099,
    bodyParser = require('body-parser');

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
        res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
        next();
    });
    
//Las rutas de nuestra aplicación estan definidas en el directorio routes, en el fichero todos.js
var todoRoutes = require("./routes/todos");

//Configuración de middleware de Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Usaremos las siguientes lineas cuando implementemos el frontend de la API
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));



app.get('/', function (req, res) {

    res.send("<h1>Bienvenido a nuestra API</h1>");
});

//Definimos el prefijo para nuestras rutas
app.use('/api/todos', todoRoutes);

//Arrancamos el servidor NODE.JS via la aplicacion express
app.listen(port, function () {
    console.log("APP IS RUNNING ON PORT " + port);
})

