import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import UserRepo from '../../repositories/user/UserRepository';
export default class Controller {
  public retrieve(req: Request, res: Response, next) {
    console.log('retrieve');
    new UserRepo().findone(req.body).then((data) => {
      res.status(200).send(successHandler('Data is fetched', data, 200));
    });
  }
}
