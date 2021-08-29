import {
  RDS_HOST,
  SYSTEM_LOG_INFO,
  RDS_MAX_QUERY_TIME,
  RDS_NAME,
  RDS_PASS,
  RDS_PORT,
  RDS_TYPE,
  RDS_USER,
} from "@config/env";
import { LoggerFactory } from "@core/utils/loggers/factory";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

const typeOrmConfig: TypeOrmModuleOptions = {
  type: <any>RDS_TYPE,
  host: RDS_HOST,
  port: RDS_PORT,
  username: RDS_USER,
  password: RDS_PASS,
  database: RDS_NAME,
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  // These two options will be disabled, we should use migrations to synchronize database handling
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
  cli: {
    migrationsDir: "src/database/migrations",
  },
  maxQueryExecutionTime: RDS_MAX_QUERY_TIME,
  logger: LoggerFactory.getInstance(SYSTEM_LOG_INFO),
};
export default typeOrmConfig;
