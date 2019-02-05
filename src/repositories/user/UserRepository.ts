import * as mongoose from 'mongoose';
import { userModel } from '../user/UserModel';
import VerRepo from '../versionable/VersionableRepo';
import IUserModel from './IUserModel';

export default class UserRepo extends VerRepo<IUserModel, mongoose.Model<IUserModel>> {
  constructor() {
    super(userModel);
  }
  public userFindoneData(data) {
    return this.findone(data);
  }
  public generateId() {
    return this.generateObjectId();
  }
  public countData() {
    return this.count();
  }
  public createData(data: any) {
    return this.create(data);
  }
  public updateData(cond: any, newdata: any) {
    return this.update(cond, newdata);
  }
}
