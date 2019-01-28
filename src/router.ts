import traineeRouter from "./controllers/trainee";
import { Router } from "express";
import userRouter from "./controllers/user";
export const router: Router = Router();
router.use("/traineeRouter", traineeRouter);
router.use("/user", userRouter);
