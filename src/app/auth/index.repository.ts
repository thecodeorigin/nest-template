import { EntityRepository } from "typeorm";
import { BaseCrudRepository } from "@core/utils/crud/base-repo";
import { AuthIdentity } from "./index.entity";
import { User } from "@app/user/index.entity";

@EntityRepository(AuthIdentity)
export class AuthRepository extends BaseCrudRepository<AuthIdentity> {
  async saveRefreshToken(user: User, refreshToken: string) {
    const userAuth = await this.findOne({
      where: {
        user,
      },
      select: ["id"],
    });

    if (!userAuth) {
      await this.createOne({
        refreshToken,
        user,
      });
    } else {
      await this.updateOne(userAuth.id, {
        refreshToken,
      });
    }
  }

  async updateTokenOrFail(
    refreshToken: string,
    payload: string,
  ): Promise<AuthIdentity> {
    const identity = await this.findOneOrFail({
      where: {
        refreshToken,
      },
      select: ["id"],
    });

    return this.updateOne(identity.id, {
      refreshToken: payload,
    });
  }
}
