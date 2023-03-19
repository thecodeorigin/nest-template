import { join } from "node:path";
import {
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_MAX_QUERY_TIME,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER,
  SYSTEM_LOG_INFO,
} from "@api/config/env";
import { LoggerFactory } from "@api/core/loggers/env/factory";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  username: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE,
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  // These two options will be disabled, we should use migrations to synchronize database handling
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
  cli: {
    migrationsDir: "src/database/migrations",
  },
  maxQueryExecutionTime: MYSQL_MAX_QUERY_TIME,
  logger: LoggerFactory.getInstance(SYSTEM_LOG_INFO),
};
export default typeOrmConfig;
