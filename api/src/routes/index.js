const { Router } = require('express');
const doctorsRouter = require('./doctorsRouter');
// const plansRouter = require

const routes = Router();

// Acá irán las rutas del back

routes.use('/doctors', doctorsRouter);
// routes.use('/plans', plansRouter)

module.exports = routes;