"use strict";

var _bodyParser = require("body-parser");

var _article = _interopRequireDefault(require("./routes/article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Cargar modulos de node para crear servidor
var express = require('express');

//Ejecutar express (http)
var app = express(); //Cargar ficheros rutas

//Middlewares
app.use((0, _bodyParser.urlencoded)({
  extended: false
}));
app.use((0, _bodyParser.json)()); //CORS
//Añadir prefijos a rutas

app.use('/api', _article["default"]); //Ruta o metodo de prueba

app.get('/test', function (req, res) {
  return res.status(200).send({
    title: "Frameworks de JS",
    author: "Jesse Melara"
  });
}); //Exportar modulo

module.exports = app;