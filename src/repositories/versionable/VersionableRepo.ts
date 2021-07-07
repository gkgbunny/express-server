import * as mongoose from 'mongoose';

export default class VersionableRepo<
  D extends mongoose.Document,
  M extends mongoose.Model<D>
> {
  public model: M;

  constructor(model) {
    this.model = model;
  }

  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  public updateData(oldData) {
    const createDate = new Date();
    oldData.createdAt = createDate;
    const oldId = oldData._id;
    oldData._id = this.generateObjectId();
    return this.model.updateOne({_id: oldId}, { $set: { deletedAt: createDate }}).then((newData) => {
      return this.model.insertMany(oldData);
    });
  }
  public count(): mongoose.Query<number> {
    return this.model.countDocuments();
  }

  public findone(cond: any): mongoose.DocumentQuery<D, D, {}> {
    return this.model.findOne(cond);
  }

  public create(data: any): Promise<D> {
    const id = this.generateObjectId();
    return this.model.create({ ...data, _id: id, originalId: id });
  }
}
