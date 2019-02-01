import { Request, Response } from "express";
import { successHandler } from "../../libs/routes";
import seedData from "../../libs/seedData";
import UserRepo from "../../repositories/user/UserRepository";
export default class Controller {
  public retrieve(req: Request, res: Response, next) {
    console.log("retrieve");
    const id = req.body.id;
    new UserRepo().retrieve(id).then(data => {
      res.status(200).send(successHandler("Data is fetched", data, 200));
    });
  }

  public create(req: Request, res: Response, next) {
    console.log("create");
    seedData();
    res.status(200).send(successHandler("Data is created", "", 201));
  }

  public update(req: Request, res: Response, next) {
    console.log("update");
    const newname = req.body.name;
    const id = req.body.id;
    new UserRepo().update(id, { name: newname }).then(data => {
      console.log(data);
      res.status(200).send(successHandler("data is updated", data, 200));
    });
  }

  public delete(req: Request, res: Response, next) {
    console.log("delete");
    const id = req.params.id;
    new UserRepo().delete(id).then(data => {
      res.status(200).send(successHandler("data is deleted", "", 202));
    });
  }
}
