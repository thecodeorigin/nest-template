import { config } from "dotenv";

config();
const env = process.env;

export const SERVER_PORT = env.SERVER_PORT || 3000;
export const NODE_ENV = env.NODE_ENV || "development";
export const RDS_TYPE = env.RDS_TYPE;
export const RDS_NAME = env.RDS_NAME;
export const RDS_USER = env.RDS_USER;
export const RDS_PASS = env.RDS_PASS;
export const RDS_HOST = env.RDS_HOST;
export const RDS_PORT = parseInt(env.RDS_PORT, 10);
export const RDS_MAX_QUERY_TIME = parseInt(env.RDS_MAX_QUERY_TIME, 10);
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
