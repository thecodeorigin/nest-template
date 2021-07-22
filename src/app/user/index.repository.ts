import { EntityRepository } from "typeorm";
import { BaseCrudRepository } from "@core/base/base-crud-repo";
import { Users } from "./index.entity";

@EntityRepository(Users)
export class UserRepository extends BaseCrudRepository<Users> {}
