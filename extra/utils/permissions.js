const permissions = {
  getUsers: {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  getUsers1: {
    all: ["head-trainer", "trainee"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  getUsers2: {
    all: ["head-trainer", "trainee", "trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};
function hasPermission(moduleName, role, permissionType) {
  if (permissions.hasOwnProperty(moduleName)) {
    if (permissions[moduleName][permissionType].includes(role)) {
      console.log(true);
    } else {
      console.log(false);
    }
  } else {
    console.log(false);
  }
}
hasPermission("getUsers1", "head-trainer", "all");
