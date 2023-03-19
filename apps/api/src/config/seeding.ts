import {
  MYSQL_HOST,
  SYSTEM_LOG_INFO,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER,
} from "@api/config/env";
import { LoggerFactory } from "@api/core/loggers/env/factory";
import { join } from "path";

const seedingConfig = {
  name: "seeding",
  type: "mysql",
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  seeds: [join(__dirname, "../", "database/seeds/**/*{.ts,.js}")],
  factories: [join(__dirname, "../", "database/factories/**/*{.ts,.js}")],
  logger: LoggerFactory.getInstance(SYSTEM_LOG_INFO),
};

export default seedingConfig;
