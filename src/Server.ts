import { config } from "dotenv";
import * as express from "express";
class Server {
  private app: express.Express;

  public constructor(private config) {
    this.app = express();
  }

  public bootstrap() {
    this.setupRoutes();
    return this;
  }

  public setupRoutes() {
    const { app } = this;
    app.get("/health-check", (req, res) => {
      res.send("I am OK");
    });
  }

  public run() {
    const {
      app,
      config: { port }
    } = this;
    app.listen(port, err => {
      if (err) {
        console.log(err);
      } else {
        console.log(`App listening on port ${port}`);
      }
    });
  }
}

export default Server;
