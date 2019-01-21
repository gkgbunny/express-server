import { IPermission } from './interfaces';
export const permissions: IPermission = {
  'getUsers': {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  'getUsers1': {
    all: ["head-trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  },
  'getUsers2': {
    all: ["head-trainer", "trainee", "trainer"],
    read: ["trainee", "trainer"],
    write: ["trainer"],
    delete: []
  }
};
