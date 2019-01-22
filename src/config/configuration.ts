import { IConfig } from "./IConfig";
import { config } from "dotenv";

config();

export const configuration: IConfig = Object.freeze({
  port: process.env.PORT
});
