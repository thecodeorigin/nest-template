import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-one";
import { UpdateUserDTO } from "./dto/update-one";
import { User } from "./index.entity";
import { UserService } from "./index.service";
import { DeleteResult } from "typeorm";
import { IsAuth } from "@app/auth/decorators/is-auth.decorator";
import { FilterUserDTO } from "./dto/filter-many";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("users")
@Controller("users")
export class UserController {
  constructor(public service: UserService) {}

  @ApiOperation({ summary: "Create a user" })
  @Post()
  @IsAuth()
  createOne(@Body() dto: CreateUserDto): Promise<User> {
    return this.service.createOne(dto);
  }

  @ApiOperation({ summary: "Get many users" })
  @Get()
  @IsAuth()
  findMany(@Query() param: FilterUserDTO) {
    return this.service.findMany(param);
  }

  @ApiOperation({ summary: "Get a user" })
  @Get(":id")
  @IsAuth()
  getOne(@Param("id", ParseIntPipe) id: number): Promise<User> {
    return this.service.findOneOrFail(id);
  }

  @ApiOperation({ summary: "Update a user" })
  @Patch(":id")
  @IsAuth()
  updateOne(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateUserDTO,
  ): Promise<User> {
    return this.service.updateOne(id, dto);
  }

  @ApiOperation({ summary: "Delete a user" })
  @Delete(":id")
  @IsAuth()
  deleteOne(@Param("id", ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.service.deleteOne(id);
  }
}
