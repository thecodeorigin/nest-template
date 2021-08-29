import { AuthIdentity } from "@app/auth/index.entity";
import { Role } from "@app/role/index.entity";
import { User } from "@app/user/index.entity";
import UserRole from "@core/constants/user-role";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)()
      .map(async (user: User): Promise<User> => {
        const auth = new AuthIdentity();
        const role = [
          await connection
            .createQueryBuilder<Role>(Role, "roles")
            .where("roles.num = :num", { num: UserRole.USER })
            .getOne(),
        ];
        user.roles = role;
        user.auth = auth;
        return user;
      })
      .createMany(100);
  }
}
