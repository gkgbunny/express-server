import verSchema from '../versionable/VersionableSchema';

export default class UserSchema extends verSchema {
  constructor(collection: any) {
    const schema = {
      _id: String,
      email: String,
      name: String,
      password: String,
      role: String,
    };
    super(schema, collection);
  }
}
