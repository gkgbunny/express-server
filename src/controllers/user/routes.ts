import { Router } from "express";
import Controller from "./Controller";
import { authMiddleware } from "../../libs/routes";
const controller = new Controller();
export const userRouter: Router = Router();
userRouter.get("/", controller.retrieve);
userRouter.post("/", controller.create);
userRouter.put("/", controller.update);
userRouter.delete("/:id", controller.delete);
