import { config } from "dotenv";

config();
const env = process.env;

export const SERVER_PORT = env.SERVER_PORT || 3000;
export const NODE_ENV = env.NODE_ENV || "development";
export const MYSQL_DATABASE = env.MYSQL_DATABASE;
export const MYSQL_USER = env.MYSQL_USER;
export const MYSQL_PASSWORD = env.MYSQL_PASSWORD;
export const MYSQL_HOST = env.MYSQL_HOST;
export const MYSQL_PORT = parseInt(env.MYSQL_PORT, 10);
export const MYSQL_MAX_QUERY_TIME = parseInt(env.MYSQL_MAX_QUERY_TIME, 10);
export const SYSTEM_LOG_INFO = getLogLevel();

export const ACCESS_TOKEN_SECRET = env.ACCESS_TOKEN_SECRET;
export const ACCESS_TOKEN_EXPIRES = parseInt(env.ACCESS_TOKEN_EXPIRES, 10);

export const REFRESH_TOKEN_SECRET = env.REFRESH_TOKEN_SECRET;
export const REFRESH_TOKEN_EXPIRES = parseInt(env.REFRESH_TOKEN_EXPIRES, 10);

export const BCRYPT_SALT_ROUND = parseInt(env.BCRYPT_SALT_ROUND, 10);

function getLogLevel() {
  try {
    return JSON.parse(env.SYSTEM_LOG_INFO);
  } catch (error) {
    return "all";
  }
}
