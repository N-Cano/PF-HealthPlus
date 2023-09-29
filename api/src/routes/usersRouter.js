const { Router } = require('express');

const postUser = require('../handlers/Users/postUser');
const getUserById = require('../handlers/Users/getUser');
const destroyUser = require('../handlers/Users/destroyUser');
const unableUser = require('../handlers/Users/unableUser');
const createUser = require('../handlers/Users/signUpUser');

const usersRouter = Router();

usersRouter.post('/', postUser);
usersRouter.post('/signup', createUser);
usersRouter.get('/:id', getUserById);
usersRouter.delete('/:id', destroyUser);
usersRouter.put('/:id', unableUser);

module.exports = usersRouter;