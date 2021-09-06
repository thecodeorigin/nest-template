import {
  MYSQL_HOST,
  SYSTEM_LOG_INFO,
  MYSQL_MAX_QUERY_TIME,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
  MYSQL_PORT,
  MYSQL_USER,
} from "@config/env";
import { LoggerFactory } from "@core/utils/loggers/factory";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

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
