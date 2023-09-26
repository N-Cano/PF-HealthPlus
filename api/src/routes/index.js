const { Router } = require('express');
const doctorsRouter = require('./doctorsRouter');
const plansRouter = require('./plansRouter');
const usersRouter = require('./usersRouter');

const routes = Router();

// Acá irán las rutas del back

routes.use('/doctors', doctorsRouter);
routes.use('/plans', plansRouter)
routes.use('/users', usersRouter)

module.exports = routes;