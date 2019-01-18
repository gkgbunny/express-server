export const permissions = {
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
