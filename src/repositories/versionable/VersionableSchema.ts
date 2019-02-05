import * as mongoose from 'mongoose';
export default class VersionableSchema extends mongoose.Schema {
  constructor(userschema: any, collections: any) {
    const verschema = Object.assign({
      createdAt: {
        default: new Date(),
        required: true,
        type: Date,
      },
      deletedAt: {
        required: false,
        type: Date,
      },
      originalId: {
        required: true,
        type: String,
      },
    }, userschema);
    super(verschema, collections);
  }
}
