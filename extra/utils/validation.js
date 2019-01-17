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
function validateUsers(users) {
  let valid = []
  let invalid = [];
  users.forEach(function(element,index) {
    let x = validateEmail(element.traineeEmail);
    let y = validateEmail(element.reviewerEmail);
    if (x && y) {
      valid.push(index);
    } else {
      invalid.push(index);
    }
  });
  console.log(`valid users are ${valid.length} and their array indices are ${valid}`);
  console.log(`invalid users are ${invalid.length} and their array indices are ${invalid}`);
}
function validateEmail(email) {
  let regex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
validateUsers(users);
