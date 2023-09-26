const { Router } = require('express');
const postUser = require('../handlers/Users/postUser');


const usersRouter = Router();

usersRouter.post('/', postUser);

module.exports = usersRouter;