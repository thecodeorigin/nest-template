import { EntityRepository } from "typeorm";
import { BaseCrudRepository } from "@core/utils/crud/base-repo";
import { Role } from "./index.entity";

@EntityRepository(Role)
export class RoleRepository extends BaseCrudRepository<Role> {}
