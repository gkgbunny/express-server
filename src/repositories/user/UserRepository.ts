import { userModel } from './UserModel';
import * as mongoose from "mongoose";
import IUserModel from './IUserModel';

export default class UserRepo {
  private model: mongoose.Model<IUserModel>;

  constructor() {
    this.model = userModel;
  }

  static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public create(data: any): Promise<IUserModel> {
    return this.model.create(data);
  }
}
