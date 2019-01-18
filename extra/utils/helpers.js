export function validateEmail(email) {
  let regex = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
