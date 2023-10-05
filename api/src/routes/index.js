const { Router } = require('express');
const doctorsRouter = require('./doctorsRouter');
// const plansRouter = require('./plansRouter');
const usersRouter = require('./usersRouter');
const datesRouter = require('./datesRouter');
const mercadoPagoRouter= require('./mercadoPagoRouter');

const routes = Router();

routes.use('/doctors', doctorsRouter);
// routes.use('/plans', plansRouter);
routes.use('/users', usersRouter);
routes.use('/dates', datesRouter);
routes.use('/payment', mercadoPagoRouter);

module.exports = routes;