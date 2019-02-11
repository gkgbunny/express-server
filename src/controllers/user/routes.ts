import { Router } from 'express';
import pswrdVerification from '../../libs/pswrdVerification';
import Controller from './Controller';

const controller = new Controller();
export const userRouter: Router = Router();
userRouter.post('/', pswrdVerification(), controller.post);
