import { NODE_ENV } from "@config/env";
import { LoggerOptions } from "typeorm";
import { LocalLogger } from "./local";
import { ProductionLogger } from "./production";

const loggerMap = {
  development: LocalLogger,
  production: ProductionLogger,
};

export class LoggerFactory {
  static getInstance(
    loggerOptions: LoggerOptions,
  ): LocalLogger | ProductionLogger {
    const env = NODE_ENV || "development";
    const instance = loggerMap[env];
    return new instance(loggerOptions);
  }
}
