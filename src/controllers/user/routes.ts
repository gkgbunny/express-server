import { Router } from 'express';
import authmiddleware from '../../libs/routes/authMiddleware';
import Controller from './Controller';

const controller = new Controller();
export const userRouter: Router = Router();
userRouter.post('/', authmiddleware('Trainee', 'read'), controller.retrieve);
