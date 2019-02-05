import * as jwt from 'jsonwebtoken';
import { configuration } from '../../config/configuration';
import UserRepo from '../../repositories/user/UserRepository';
import hasPermission from './hasPermission';

export default function authMiddleware(module, permissionType) {
  return (req, res, next) => {
    const { key } = configuration;
    const token = req.header('authorization');
    const user = jwt.verify(token, key);
    console.log(user);
    console.log(user.email);
    if (Object.entries(user).length === 0) {
      next({
        error: 'Unauthorized Access',
        message: 'No data found',
        status: 403,
      });
    } else {
      new UserRepo().userFindoneData(user.email).then((result) => {
        console.log(result);
        if (result.name !== module) {
          next({
            error: 'Unauthorized Access',
            message: 'User not match',
            status: 403,
          });
        } else if (!hasPermission('user', result.role, permissionType)) {
          next({
            error: 'Unauthorized Access',
            message: 'Permission Denied',
            status: 403,
          });
        } else {
          req.body = result;
          console.log(req.body);
          next();
        }
      });
    }
  };
}
