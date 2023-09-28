const { Router } = require('express');
const postDate = require('../handlers/Dates/postDate');

const datesRouter = Router();

datesRouter.post('/', postDate);

module.exports = datesRouter;