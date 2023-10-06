const { Router } = require('express');

const postDate = require('../handlers/Dates/postDate');
const getDates = require('../handlers/Dates/getDates');

const datesRouter = Router();

datesRouter.post('/', postDate);
datesRouter.get('/', getDates);
datesRouter.delete


module.exports = datesRouter;