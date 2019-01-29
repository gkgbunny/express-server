import { Request, Response } from "express";
import { successHandler } from "../../libs/routes";

export default class Controller {
  public retrieve(req: Request, res: Response) {
    const data = [
      {
        name: "User1"
      },
      {
        name: "User2"
      }
    ];
    res.send(successHandler("It's a get method", data, 200));
  }
}
