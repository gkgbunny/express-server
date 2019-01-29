import { Router } from "express";
import Controller from "./Controller";
const controller = new Controller();
export const userRouter: Router = Router();
userRouter.get("/", controller.retrieve);
