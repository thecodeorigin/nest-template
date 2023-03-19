import { LoggerOptions } from "typeorm";
import { LocalLogger } from "@api/core/loggers/env/local";
import { ProductionLogger } from "@api/core/loggers/env/production";
import { SYSTEM_ID } from "@api/config/env";
import { SYSID } from "@api/core/constants/system";

const loggerMap = {
  [SYSID.LOCALHOST]: LocalLogger,
  [SYSID.PRODUCTION]: ProductionLogger,
};

export const LoggerFactory = {
  getInstance(loggerOptions: LoggerOptions): LocalLogger | ProductionLogger {
    const Instance = loggerMap[SYSTEM_ID];
    return new Instance(loggerOptions);
  },
};
