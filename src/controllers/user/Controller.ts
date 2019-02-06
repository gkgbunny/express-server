import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import UserRepo from '../../repositories/user/UserRepository';
export default class Controller {
  public retrieve(req: Request, res: Response, next) {
    new UserRepo().userFindoneData({email: req.body.email, deletedAt: undefined}).then((data) => {
      new UserRepo()
      .updateUserData(data).then((result) => {
        res.status(200).send(successHandler('Data is updated successfully', result, 200));
      });
    });
  }
}
