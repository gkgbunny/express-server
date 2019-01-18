import { diamond, triangle } from "./patterns";
import { permission, validate } from "./utils";

const users = [
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
permission("getUsers1", "head-trainer", "all");
permission("getUsers2", "trainer", "read");
permission("getUsers3", "trainee", "read");
console.log(
  "*************************************************************************************"
);
validate(users);
validate(users);
