import UserRepo from "../repositories/user/UserRepository";

export default function seedData() {
  const data = new UserRepo();
  data.create({
    _id: UserRepo.generateObjectId(),
    name: "Amar Varma"
  });
}
