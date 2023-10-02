const routes = require('./routes/index')

const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload')  // dependencia que permite subir archivos desde el formulario 

const server = express();

server.use(express.json());
server.use(morgan('dev'));
// Middleware para que express pueda recibir archivos
server.use(fileUpload({
  useTempFiles: true, // guardar el archivo temporalmente hasta que se suba a la nube
  tempFileDir: './uploads' // en esta ruta
}))


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

server.use('/', routes)

module.exports = server;