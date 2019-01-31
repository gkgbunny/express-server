import * as mongoose from "mongoose";

export default class UserSchema extends mongoose.Schema {
  constructor(option: any) {
    const schema = {
      _id: String,
      name: String
    };
    super(schema, option);
  }
}
