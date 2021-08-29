import {
  RDS_HOST,
  SYSTEM_LOG_INFO,
  RDS_NAME,
  RDS_PASS,
  RDS_PORT,
  RDS_TYPE,
  RDS_USER,
} from "@config/env";
import { LoggerFactory } from "@core/utils/loggers/factory";
import { join } from "path";

const seedingConfig = {
  name: "seeding",
  type: <any>RDS_TYPE,
  host: RDS_HOST,
  port: RDS_PORT,
  username: RDS_USER,
  password: RDS_PASS,
  database: RDS_NAME,
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  seeds: [join(__dirname, "../", "database/seeds/**/*{.ts,.js}")],
  factories: [join(__dirname, "../", "database/factories/**/*{.ts,.js}")],
  logger: LoggerFactory.getInstance(SYSTEM_LOG_INFO),
};

export default seedingConfig;
