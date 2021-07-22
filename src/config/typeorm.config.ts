import {
  RDS_HOST,
  RDS_MAX_QUERY_TIME,
  RDS_MIGRATION_ENABLED,
  RDS_NAME,
  RDS_PASS,
  RDS_PORT,
  RDS_SYNC_DROP_SCHEMA,
  RDS_SYNC_ENABLED,
  RDS_TYPE,
  RDS_USER,
} from "@core/environments/env";
import { LocalLogger } from "@core/loggers/local";
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
  synchronize: RDS_SYNC_ENABLED,
  dropSchema: RDS_SYNC_DROP_SCHEMA,
  migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
  migrationsRun: RDS_MIGRATION_ENABLED,
  cli: {
    migrationsDir: "src/database/migrations",
  },
  logging: "all",
  maxQueryExecutionTime: RDS_MAX_QUERY_TIME,
  logger: new LocalLogger(),
};

export default typeOrmConfig;
