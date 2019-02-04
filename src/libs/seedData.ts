import UserRepo from "../repositories/user/UserRepository";

export default function seedData() {
  const data = new UserRepo();
  data.create({
    name: "ARaj"
  });
}
