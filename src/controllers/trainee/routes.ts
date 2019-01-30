import { Router } from "express";
import Controller from "./Controller";
import { authMiddleware } from "../../libs/routes";
const controller = new Controller();
export const traineeRouter: Router = Router();
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
  controller.delete
);
