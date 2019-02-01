import { Router } from 'express';
import { authMiddleware } from '../../libs/routes';
import Controller from './Controller';
const controller = new Controller();
export const userRouter: Router = Router();
userRouter.get('/', authMiddleware('Trainee', 'read'), controller.retrieve);
