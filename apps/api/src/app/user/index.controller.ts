import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserService } from "./index.service";
import { FilterUserDTO } from "./dto/filter-many";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(public userService: UserService) {}

  @ApiOperation({ summary: "Get many users" })
  @Get()
  findMany(@Query() param: FilterUserDTO) {
    return this.userService.findMany(param);
  }

  @ApiOperation({ summary: "Get a user" })
  @Get(":id")
  getOne(@Param("id", ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }
}
