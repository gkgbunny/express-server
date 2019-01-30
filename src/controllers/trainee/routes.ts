import { Router } from "express";
import Controller from "./Controller";
const controller = new Controller();
export const traineeRouter: Router = Router();
import validate from "../validate";
import { validateHandler } from "../../libs/routes";
traineeRouter.get("/", validateHandler(validate.get), controller.retrieve);
traineeRouter.post("/", validateHandler(validate.create), controller.create);
traineeRouter.put("/", validateHandler(validate.update), controller.update);
traineeRouter.delete(
  "/:id",
  validateHandler(validate.delete),
  controller.delete
);
