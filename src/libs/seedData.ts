import UserRepo from '../repositories/user/UserRepository';

export default function seedData() {
  const data = new UserRepo();
  data.count().then((res) => {
    if (res === 0) {
      data.create({
        email: 'head.trainer@successive.tech',
        name: 'Head-Trainer',
        role: 'head-trainer',
      });
      data.create({
        email: 'trainee@successive.tech',
        name: 'Trainee',
        role: 'trainee',
      });
    }
  });
}
