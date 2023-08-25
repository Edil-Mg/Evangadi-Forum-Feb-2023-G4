import express from 'express';
import auth from '../../auth/auth.js';

import userController from './users.controller.js';

const usersRouter = express.Router();

usersRouter.get("/", auth, userController.getUserById);
usersRouter.post('/createuser', userController.createUser)
usersRouter.post('/login', userController.login)
usersRouter.post('/forgetpassword',userController.forgetPassword)



export default usersRouter;