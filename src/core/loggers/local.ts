import { Logger, QueryRunner } from "typeorm";
import {
  createLogger,
  Logger as WinstonLogger,
  transports,
  format,
} from "winston";

import { Format } from "logform";

/**
 * Custom file logger for local
 */
export class LocalLogger implements Logger {
  private readonly queryLogger: WinstonLogger;
  private readonly coreLogger: WinstonLogger;
  private readonly customFormat: Format;
  constructor() {
    this.customFormat = format.printf(
      ({ message, level, timestamp }) => `[${timestamp}][${level}]: ${message}`,
    );
    const options = (filename: string) => ({
      transports: new transports.File({ filename, level: "debug" }),
      format: this.customFormat,
    });
    this.queryLogger = createLogger(options("./logs/queries.log"));
    this.coreLogger = createLogger(options("./logs/core.log"));
  }
  logQuery(query: string, parameters?: any[], _queryRunner?: QueryRunner) {
    this.queryLogger.log({
      level: "info",
      message: `${query} - ${parameters ? JSON.stringify(parameters) : ""}`,
      timestamp: new Date().toISOString(),
    });
  }
  logQueryError(
    error: string | Error,
    query: string,
    parameters?: any[],
    _queryRunner?: QueryRunner,
  ) {
    this.coreLogger.log({
      level: "error",
      message: `${query} - ${
        parameters ? JSON.stringify(parameters) : ""
      } - Error: ${error}`,
      timestamp: new Date().toISOString(),
    });
  }
  logQuerySlow(
    time: number,
    query: string,
    parameters?: any[],
    _queryRunner?: QueryRunner,
  ) {
    this.queryLogger.log({
      level: "warn",
      message: `${query} - ${time} - ${
        parameters ? JSON.stringify(parameters) : ""
      }`,
      timestamp: new Date().toISOString(),
    });
  }
  logSchemaBuild(message: string, _queryRunner?: QueryRunner) {
    this.queryLogger.log({
      level: "info",
      message,
      timestamp: new Date().toISOString(),
    });
  }
  logMigration(message: string, _queryRunner?: QueryRunner) {
    this.queryLogger.log({
      level: "info",
      message: message,
      timestamp: new Date().toISOString(),
    });
  }
  log(
    level: "log" | "info" | "warn" | "error",
    message: any,
    _queryRunner?: QueryRunner,
  ) {
    this.coreLogger.log({
      level,
      message,
      timestamp: new Date().toISOString(),
    });
  }
}
