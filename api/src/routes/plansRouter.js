const { Router } = require('express');
const getPlans = require('../handlers/Plans/getPlans');


const plansRouter = Router();

plansRouter.get('/', getPlans);

module.exports = plansRouter;