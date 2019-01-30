import { Router } from "express";
import Controller from "./Controller";
import { authMiddleware } from "../../libs/routes";
const controller = new Controller();
export const traineeRouter: Router = Router();
<<<<<<< HEAD
traineeRouter.get("/", authMiddleware("Trainee", "read"), controller.retrieve);
traineeRouter.post("/", authMiddleware("Trainer", "write"), controller.create);
traineeRouter.put(
  "/",
  authMiddleware("Head Trainer", "update"),
  controller.update
);
traineeRouter.delete(
  "/:id",
  authMiddleware("Trainer", "delete"),
=======
import validate from "../validate";
import { validateHandler } from "../../libs/routes";
traineeRouter.get("/", validateHandler(validate.get), controller.retrieve);
traineeRouter.post("/", validateHandler(validate.create), controller.create);
traineeRouter.put("/", validateHandler(validate.update), controller.update);
traineeRouter.delete(
  "/:id",
  validateHandler(validate.delete),
>>>>>>> develop
  controller.delete
);
