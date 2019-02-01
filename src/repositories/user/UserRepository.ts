import { userModel } from "./UserModel";
import * as mongoose from "mongoose";
import IUserModel from "./IUserModel";
import { ObjectID } from "bson";

export default class UserRepo {
  private model: mongoose.Model<IUserModel>;

  constructor() {
    this.model = userModel;
  }

  static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }

  public create(data: any): Promise<IUserModel> {
    return this.model.create({ ...data, _id: UserRepo.generateObjectId() });
  }

  public update(cond: any, data: any): any {
    return this.model.updateOne({ _id: cond }, data, { upsert: true });
  }

  public delete(cond: any): any {
    return this.model.deleteOne({ _id: cond });
  }

  public retrieve(condId: any): any {
    return this.model.findById(condId);
  }
}
