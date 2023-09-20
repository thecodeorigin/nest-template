import { join } from "node:path";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  // These two options will be disabled, we should use migrations to synchronize database handling
  synchronize: false,
  dropSchema: false,
  migrationsRun: true,
  migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
  cli: {
    migrationsDir: "src/database/migrations",
  },
  maxQueryExecutionTime: process.env.MYSQL_MAX_QUERY_TIME,
};
export default typeOrmConfig;
