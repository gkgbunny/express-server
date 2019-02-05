import { Request, Response } from 'express';
import { successHandler } from '../../libs/routes';
import UserRepo from '../../repositories/user/UserRepository';
export default class Controller {
  public retrieve(req: Request, res: Response, next) {
    console.log('retrieve');
    const { _id, email, name, role, originalId } = req.body;
    new UserRepo().userFindoneData(email).then((newdata) => {
      new UserRepo()
      .createData({
        email: newdata.email,
        name: newdata.name,
        role: newdata.role,
      })
      .then((data) => {
        new UserRepo()
          .updateData(newdata.originalId, {
            $set: { deletedAt: new Date(), originalId: newdata.originalId },
          })
          .then(() => {
            new UserRepo()
              .updateData(data.originalId, {
                $set: { originalId: newdata.originalId },
              })
              .then((result) => {
                console.log(result);
                res
                  .status(200)
                  .send(successHandler('Data is updated', result, 200));
              });
          });
      });
    });
  }
}
