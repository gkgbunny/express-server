import * as mongoose from "mongoose";
export default class Database {
  static open(mongoUrl) {
    return new Promise((resolve, reject) => {
      mongoose
        .connect(
          mongoUrl,
          { useNewUrlParser: true }
        )
        .then(fulfilled => {
          resolve("Connection is established");
        })
        .catch(rejected => {
          reject("Connection establishment rejected");
        });
    });
  }
  static disconnect() {
    mongoose.disconnect();
  }
}
