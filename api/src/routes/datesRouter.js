const { Router } = require('express');

const postDate = require('../handlers/Dates/postDate');
const getDates = require('../handlers/Dates/getDates');
const cancelDateHandler = require('../handlers/Dates/cancelDate');

const datesRouter = Router();

datesRouter.post('/', postDate);
datesRouter.get('/', getDates);
datesRouter.put('/', cancelDateHandler);

module.exports = datesRouter;