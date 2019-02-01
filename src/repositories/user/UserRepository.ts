import * as mongoose from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';

export default class UserRepo {
  public static generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  private model: mongoose.Model<IUserModel>;

  constructor() {
    this.model = userModel;
  }

  public count(): mongoose.Query<number> {
    return this.model.countDocuments();
  }

  public findone(cond: any): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
    return this.model.findOne({ email: cond });
  }

  public create(data: any): Promise<IUserModel> {
    return this.model.create({ ...data, _id: UserRepo.generateObjectId() });
  }
}
