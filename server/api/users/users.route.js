import express from 'express';
import auth from '../../auth/auth.js';

import userController from './users.controller.js';

const usersRouter = express.Router();

// usersRouter.get("/", (req, res) => {
  
//     res.send("userss");
// });

usersRouter.get("/", auth, userController.getUserById);
usersRouter.post('/createuser', userController.createUser)
usersRouter.post('/login', userController.login)



export default usersRouter;