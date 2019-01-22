import { IUsers } from "./../interfaces";
import { validateEmail } from "./helpers";
export default function validateUsers(users: IUsers[]): void {
  let valid: IUsers[] = [];
  let invalid: IUsers[] = [];
  users.forEach(function(element: IUsers): void {
    let x: boolean = validateEmail(element.traineeEmail);
    let y: boolean = validateEmail(element.reviewerEmail);
    if (x && y) {
      valid.push(element);
    } else {
      invalid.push(element);
    }
  });
  console.log(`valid users are ${valid.length} and they are`, valid);
  console.log();
  console.log(`invalid users are ${invalid.length} and they are`, invalid);
  console.log("----------------------END----------------------");
}
