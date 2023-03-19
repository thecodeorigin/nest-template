import { LoggerOptions } from "typeorm";
import { LocalLogger } from "@api/core/loggers/env/local";
import { ProductionLogger } from "@api/core/loggers/env/production";
import { SYSTEM_ID } from "@api/config/env";
import { SYSID } from "@api/core/constants/system";

const loggerMap = {
  [SYSID.LOCALHOST]: LocalLogger,
  [SYSID.PRODUCTION]: ProductionLogger,
};

export class LoggerFactory {
  static getInstance(
    loggerOptions: LoggerOptions
  ): LocalLogger | ProductionLogger {
    const instance = loggerMap[SYSTEM_ID];
    return new instance(loggerOptions);
  }
}
