import { diamond, triangle } from "./patterns";
import { permission, validate } from "./utils";
import { IUsers } from "./interfaces";

const users: IUsers[] = [
  {
    traineeEmail: "trainee1@successive.tech",
    reviewerEmail: "reviewer1@successive.tech"
  },
  {
    traineeEmail: "trainee2@successive.tech",
    reviewerEmail: "reviewer2@successive.tech"
  },
  {
    traineeEmail: "trainee3@successive.tech",
    reviewerEmail: "reviewer3@yahoo.in"
  }
];
diamond(5);
diamond(10);
console.log(
  "*************************************************************************************"
);
triangle(10);
triangle(5);
console.log(
  "*************************************************************************************"
);
permission("getUsers", "head-trainer", "write");
permission("getUsers2", "trainer", "read");
permission("getUsers1", "trainee", "write");
console.log(
  "*************************************************************************************"
);
validate(users);
validate(users);
