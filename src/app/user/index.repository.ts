import { EntityRepository } from "typeorm";
import { BaseCrudRepository } from "@core/utils/crud/base-repo";
import { User } from "./index.entity";
import { BadRequestException } from "@nestjs/common";
import { FilterUserDTO } from "./dto/filter-many";
import { FilterBuilder } from "@core/utils/crud/filter-builder";
import { HTTP_MESSAGE } from "@core/constants/error-message";

@EntityRepository(User)
export class UserRepository extends BaseCrudRepository<User> {
  async checkDuplicateEmail(email: string) {
    const isUserExists = await this.findOne({
      where: {
        email: email,
      },
    });
    if (isUserExists) {
      throw new BadRequestException(HTTP_MESSAGE.DUPLICATED);
    }
  }

  async findMany(param: FilterUserDTO): Promise<[User[], number]> {
    return new FilterBuilder(param)
      .getQueryBuilder<User>(this)
      .where("user.email LIKE :email", { email: `%${param.email || ""}%` })
      .getManyAndCount();
  }
}
