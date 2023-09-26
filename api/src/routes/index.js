const { Router } = require('express');
// const pruebaRouter = require('./prueba');

const response = {
    activo: true
}
const routes = Router();

// Acá irán las rutas del back

routes.use('/prueba', function(req, res) {
    req.statusCode(200).json(response)
})

module.export = routes;