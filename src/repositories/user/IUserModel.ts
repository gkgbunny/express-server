import IVerModel from '../versionable/IVersionableModel';
export default interface IUserModel extends IVerModel {
  id: string;
  name: string;
  role: string;
  email: string;
  password: string;
}
