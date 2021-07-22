import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const RDS_TYPE = process.env.RDS_TYPE;
export const RDS_NAME = process.env.RDS_NAME;
export const RDS_USER = process.env.RDS_USER;
export const RDS_PASS = process.env.RDS_PASS;
export const RDS_HOST = process.env.RDS_HOST;
export const RDS_PORT = parseInt(process.env.RDS_PORT, 10);
export const RDS_MAX_QUERY_TIME =
  parseInt(process.env.RDS_MAX_QUERY_TIME, 10) || 15000;
export const RDS_SYNC_ENABLED =
  process.env.RDS_SYNC_ENABLED === "true" || false;
export const RDS_LOG_LEVEL = getLogLevel();
export const RDS_SYNC_DROP_SCHEMA =
  process.env.RDS_SYNC_DROP_SCHEMA === "true" || false;
export const RDS_SEED_USER = process.env.RDS_SEED_USER === "true" || false;
export const RDS_MIGRATION_ENABLED =
  process.env.RDS_MIGRATION_ENABLED === "true" || false;
export const RDS_SEED_USER_DEFAULT_PASSWORD =
  process.env.RDS_SEED_USER_DEFAULT_PASSWORD;
export const RDS_SEED_USER_AMOUNT =
  parseInt(process.env.RDS_SEED_USER_AMOUNT, 10) || 10;
export const MINIMUM_PAGINATION_LIMIT =
  parseInt(process.env.MINIMUM_PAGINATION_LIMIT, 10) || 5;
export const MAXIMUM_PAGINATION_LIMIT =
  parseInt(process.env.MAXIMUM_PAGINATION_LIMIT, 10) || 100;

function getLogLevel() {
  try {
    return JSON.parse(process.env.RDS_LOG_INFO);
  } catch (error) {
    return "all";
  }
}
