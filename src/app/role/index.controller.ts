import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { Role } from "./index.entity";
import { RoleService } from "./index.service";
import { BaseFilterDTO } from "@core/dto/filter-many";
import { IsAuth } from "@app/auth/decorators/is-auth.decorator";
import UserRole from "@core/constants/user-role";

@Controller("roles")
export class RoleController {
  constructor(public service: RoleService) {}

  @Get()
  @IsAuth([UserRole.MODERATOR])
  findMany(@Query() param: BaseFilterDTO) {
    return this.service.findMany(param);
  }

  @Get(":id")
  @IsAuth([UserRole.MODERATOR])
  getOne(@Param("id", ParseIntPipe) id: number): Promise<Role> {
    return this.service.findOneOrFail(id);
  }
}
