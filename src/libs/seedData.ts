import * as bcrypt from 'bcrypt';
import UserRepo from '../repositories/user/UserRepository';
import { configuration } from './../config/configuration';

export default function seedData() {
  const data = new UserRepo();
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(configuration.passwrd, salt);
  data.count().then((res) => {
    if (res === 0) {
      data.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-Trainer',
        password: hash,
        role: 'head-trainer',
      });
      data.create({
        email: 'trainee@successive.tech',
        name: 'Trainee',
        password: hash,
        role: 'trainee',
      });
    }
  });
}
