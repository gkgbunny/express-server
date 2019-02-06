import { Router } from 'express';
import { traineeRouter } from './controllers/trainee';
import userRouter from './controllers/user';
const router: Router = Router();
router.use('/traineeRouter', traineeRouter);
router.use('/user', userRouter);

export default router;
