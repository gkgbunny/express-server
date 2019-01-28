import { Router } from "express";
import Controller from "./Controller";
const controller = new Controller();
export const traineeRouter: Router = Router();
traineeRouter.get("/", controller.retrieve);
traineeRouter.post("/", controller.create);
traineeRouter.put("/", controller.update);
traineeRouter.delete("/:id", controller.delete);
