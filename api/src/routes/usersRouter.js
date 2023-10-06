const { Router } = require('express');
const fileUpload = require('express-fileupload');

const postUser = require('../handlers/Users/postUser');
const getUserById = require('../handlers/Users/getUser');
const destroyUser = require('../handlers/Users/destroyUser');
const createUser = require('../handlers/Users/signUpUser');
const logInHandler = require('../handlers/Users/logInUser');
const updateUserHandler = require('../handlers/Users/updateUserHandler');
const disableUserHandler = require('../handlers/Users/disableUserHandler');
const enableUserHandler = require('../handlers/Users/enableUserHandler');

const usersRouter = Router();

usersRouter.post('/', postUser);

usersRouter.put('/profile', fileUpload({
    useTempFiles: true,
    tempFileDir: './uploads'
}), updateUserHandler);

usersRouter.post('/signup', createUser);

usersRouter.post('/login', logInHandler);
usersRouter.put('/disable/:id', disableUserHandler);
usersRouter.put('/enable/:id', enableUserHandler);
usersRouter.get('/:id', getUserById);
usersRouter.delete('/:id', destroyUser);

module.exports = usersRouter;