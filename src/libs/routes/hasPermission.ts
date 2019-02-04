import modules from './constants';
export default function hasPermission(
  moduleName: string,
  role: string,
  permissionType: string,
): boolean {
  if (modules.hasOwnProperty(moduleName)) {
    // tslint:disable-next-line:no-string-literal
    if (modules[moduleName]['all'].includes(role)) {
      return true;
    } else if (modules[moduleName][permissionType].includes(role)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
