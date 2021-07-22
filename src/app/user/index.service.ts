import { Injectable } from "@nestjs/common";
import { BaseCrudService } from "@core/base/base-crud-service";
import { Users } from "./index.entity";
import { UserRepository } from "./index.repository";

@Injectable()
export class UserService extends BaseCrudService<Users> {
  constructor(private userRepository: UserRepository) {
    super(userRepository);
  }
}
