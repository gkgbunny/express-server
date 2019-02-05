import UserRepo from '../repositories/user/UserRepository';

export default () => {
  const data = new UserRepo();
  data.countData().then((res) => {
    if (res === 0) {
      data.createData({
        email: 'head.trainer@successive.tech',
        name: 'Head-Trainer',
        role: 'head-trainer',
      });
      data.createData({
        email: 'trainee@successive.tech',
        name: 'Trainee',
        role: 'trainee',
      });
    }
  });
};
