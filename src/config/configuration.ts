import { config } from 'dotenv';
import { IConfig } from './IConfig';

config();

export const configuration: IConfig = Object.freeze({
  key: process.env.KEY,
  mongoUrl: process.env.MONGO_URL,
  node_env: process.env.NODE_ENV,
  passwrd: process.env.PASSWORD,
  port: process.env.PORT,
});
