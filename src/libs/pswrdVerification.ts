import UserRepo from '../repositories/user/UserRepository';

export default function pswrdVerification() {
  return (req, res, next) => {
    console.log(req.body.email);
    console.log(req.body.password);
    new UserRepo().findone(req.body.email).then((result) => {
      if (Object.entries(result).length === 0) {
        next({
          error: 'Unauthorized Access',
          message: 'No data found',
          status: 403,
        });
      } else if (result.password !== req.body.password) {
        next({
          error: 'Unauthorized Access',
          message: 'Password does not match',
          status: 403,
        });
      } else {
        req.body = result.email;
        next();
      }
    });
  };
}
