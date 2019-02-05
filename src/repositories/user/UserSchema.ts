import * as mongoose from 'mongoose';

export default class UserSchema extends mongoose.Schema {
  constructor(option: any) {
    const schema = {
      _id: String,
      email: String,
      name: String,
      password: String,
      role: String,
    };
    super(schema, option);
  }
}
