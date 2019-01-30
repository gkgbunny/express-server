import * as jwt from "jsonwebtoken";
import { configuration } from "../../config/configuration";
import hasPermission from "./hasPermission";

export default function authMiddleware(module, permissionType) {
  return (req, res, next) => {
    const { key } = configuration;
    const token = req.header("authorization");
    const user = jwt.verify(token, key);

    if (Object.entries(user).length == 0 || user.name !== module) {
      next({
        error: "Unauthorized Access",
        message: "error",
        status: 403
      });
    } else if (!hasPermission("user", module, permissionType)) {
      next({
        error: "Unauthorized Access",
        message: "Permission Denied",
        status: 403
      });
    }
    next();
  };
}
