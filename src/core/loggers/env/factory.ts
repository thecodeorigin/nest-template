import { LoggerOptions } from "typeorm";
import { LocalLogger } from "@core/loggers/env/local";
import { ProductionLogger } from "@core/loggers/env/production";
import { SYSTEM_ID } from "@config/env";
import { SYSID } from "@core/constants/system";

const loggerMap = {
  [SYSID.LOCALHOST]: LocalLogger,
  [SYSID.PRODUCTION]: ProductionLogger,
};

export class LoggerFactory {
  static getInstance(
    loggerOptions: LoggerOptions,
  ): LocalLogger | ProductionLogger {
    const instance = loggerMap[SYSTEM_ID];
    return new instance(loggerOptions);
  }
}
