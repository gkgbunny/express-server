import * as bodyParser from 'body-parser';
import * as express from 'express';
import { IConfig } from './config/IConfig';
import Database from './libs/Database';
import errorHandler from './libs/routes/errorHandler';
import notFoundRoute from './libs/routes/notFoundRoute';
import router from './router';
export default class Server {
  public bodyParser = require('body-parser');
  private app: express.Express;

  public constructor(private config: IConfig) {
    this.app = express();
  }

  public initBodyParser() {
    const { app } = this;
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
  }

  public bootstrap() {
    this.initBodyParser();
    this.setupRoutes();
    return this;
  }

  public setupRoutes() {
    const { app } = this;
    app.get('/health-check', (req, res, next) => {
      res.send('I am Ok');
    });
    app.use('/api', router);
    app.use(notFoundRoute);
    app.use(errorHandler);
  }

  public run() {
    const {
      app,
      config: { port, mongoUrl },
    } = this;
    Database.open(mongoUrl)
      .then((result) => {
        app.listen(port, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            console.log(`App listening on port ${port}`);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
