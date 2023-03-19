import { SYSTEM_LOG_INFO } from "@api/config/env";
import { LoggerFactory } from "./env/factory";

/**
 * Logger service, use this class to log something in your project
 */
export const ProjectLogger = {
  exception(message: string) {
    LoggerFactory.getInstance(SYSTEM_LOG_INFO).log("error", message);
  },

  info(message: string) {
    LoggerFactory.getInstance(SYSTEM_LOG_INFO).log("info", message);
  },

  warn(message: string) {
    LoggerFactory.getInstance(SYSTEM_LOG_INFO).log("warn", message);
  },
};
