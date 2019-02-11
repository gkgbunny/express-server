import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { configuration } from '../../config/configuration';
import { successHandler } from '../../libs/routes';
import UserRepo from '../../repositories/user/UserRepository';

export default class Controller {
  public post(req: Request, res: Response, next) {
    console.log('Post Method');
    console.log(req.body);
    new UserRepo().findone(req.body).then((data) => {
      console.log(data);
      const token = jwt.sign(data.toJSON(), configuration.key, { expiresIn: 60 * 15 });
      res.status(200).send(successHandler('Created token is', token, 200));
    });
  }
}
