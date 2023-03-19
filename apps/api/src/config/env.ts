import { SYSID } from "@api/core/constants/system";
import { config } from "dotenv";

config();
const env = process.env;

export const SERVER_PORT = env.SERVER_PORT || 3000;
export const SYSTEM_ID = env.SYSTEM_ID || SYSID.LOCALHOST;
export const NODE_ENV = env.NODE_ENV || "development";
export const MYSQL_DATABASE = env.MYSQL_DATABASE;
export const MYSQL_USER = env.MYSQL_USER;
export const MYSQL_PASSWORD = env.MYSQL_PASSWORD;
export const MYSQL_HOST = env.MYSQL_HOST;
export const MYSQL_PORT = env.MYSQL_PORT || 3306;
export const MYSQL_MAX_QUERY_TIME = env.MYSQL_MAX_QUERY_TIME || 30_000;
export const SYSTEM_LOG_INFO = getLogLevel();

function getLogLevel() {
  try {
    return JSON.parse(env.SYSTEM_LOG_INFO || "all");
  } catch {
    return "all";
  }
}
