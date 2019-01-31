import { IConfig } from "./IConfig";
import { config } from "dotenv";

config();

export const configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  node_env: process.env.NODE_ENV,
  key: process.env.KEY,
  mongoUrl: process.env.MONGO_URL
});
