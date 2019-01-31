import IUserModel from "./IUserModel";
import UserSchema from "./UserSchema";
import * as mongoose from "mongoose";

const userSchema = new UserSchema({
  collection: "user"
})

export const userModel: mongoose.Model<IUserModel> = mongoose.model<
  IUserModel
>(
  'user',
  userSchema,
  'user',
  true
)
