import { Router } from 'express';
import db from '../db.mjs';
import UserController from '../controllers/userController.mjs';

const userRouter = Router();
const userController = new UserController(db);

userRouter.post('/register', userController.register.bind(userController));
userRouter.post('/login', userController.login.bind(userController));
userRouter.get('/login', userController.getSession.bind(userController));
userRouter.post('/logout', userController.logout.bind(userController));

export default userRouter;
