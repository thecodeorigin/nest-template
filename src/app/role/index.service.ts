import { Injectable } from "@nestjs/common";
import { BaseCrudService } from "@core/utils/crud/base-service";
import { Role } from "./index.entity";
import { RoleRepository } from "./index.repository";

@Injectable()
export class RoleService extends BaseCrudService<Role> {
  constructor(private repo: RoleRepository) {
    super(repo);
  }
}
