import { Request, Response } from "express";
import { successHandler } from "../../libs/routes/";
import { log } from "util";
export default class Controller {
  public retrieve(req: Request, res: Response, next) {
    console.log("retrieve");
    const data = [
      {
        name: "Trainee1"
      },
      {
        name: "Trainee2"
      }
    ];
    res.status(200).send(successHandler("It is get request", data, 200));
  }

  public create(req: Request, res: Response, next) {
    console.log("create");
    const { name, id } = req.body;
    const data = [
      {
        name: name,
        id: id
      }
    ];
    res.status(200).send(successHandler("It is post request", data, 201));
  }

  public update(req: Request, res: Response, next) {
    console.log("update");
    const data = [
      {
        name: "Trainee-1"
      },
      {
        name: "Trainee-2"
      }
    ];
    res.status(200).send(successHandler("data is updated", data, 200));
  }

  public delete(req: Request, res: Response, next) {
    console.log("delete");
    const { id } = req.params;
    res.status(200).send(successHandler("data is deleted", id, 202));
  }
}
