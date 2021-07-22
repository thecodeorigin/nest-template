import { Users } from "@app/user/index.entity";
import { RDS_SEED_USER, RDS_SEED_USER_AMOUNT } from "@core/environments/env";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, _connection: Connection): Promise<any> {
    if (RDS_SEED_USER) {
      await factory(Users)().createMany(RDS_SEED_USER_AMOUNT);
    }
  }
}
