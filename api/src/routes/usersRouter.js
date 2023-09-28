const { Router } = require('express');
const postUser = require('../handlers/Users/postUser');
const getUserById = require('../handlers/Users/getUser');


const usersRouter = Router();

usersRouter.post('/', postUser);
usersRouter.get('/:id', getUserById)

module.exports = usersRouter;