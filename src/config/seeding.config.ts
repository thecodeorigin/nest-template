import {
  RDS_HOST,
  RDS_NAME,
  RDS_PASS,
  RDS_PORT,
  RDS_TYPE,
  RDS_USER,
} from "@core/environments/env";
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
};

export default seedingConfig;
