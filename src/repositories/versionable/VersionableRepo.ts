import * as mongoose from 'mongoose';

export default class VersionableRepo<D extends mongoose.Document, M extends mongoose.Model<D>> {
  public model: M;

  constructor(model) {
    this.model = model;
  }

  public generateObjectId() {
    return String(mongoose.Types.ObjectId());
  }
  public count(): mongoose.Query<number> {
    console.log('afghfj');
    return this.model.countDocuments();
  }

  public findone(cond: any): mongoose.DocumentQuery<D, D, {}> {
    console.log(cond);
    return this.model.findOne({ email: cond });
  }

  public create(data: any): Promise<D> {
    const id = this.generateObjectId();
    return this.model.create({ ...data, _id: id, originalId: id });
  }

  public update(cond: any, newdata: any): mongoose.Query<any> {
    return this.model.updateOne({originalId: cond}, newdata);
  }
}
