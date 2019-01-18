import { validateEmail } from "./helpers";
export default function validateUsers(users) {
  let valid = [];
  let invalid = [];
  users.forEach(function(element, index) {
    let x = validateEmail(element.traineeEmail);
    let y = validateEmail(element.reviewerEmail);
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
