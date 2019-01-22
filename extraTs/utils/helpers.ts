export function validateEmail(email: string): boolean {
  let regex: RegExp = /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(successive)\.tech$/;
  if (regex.test(email)) {
    return true;
  } else {
    return false;
  }
}
