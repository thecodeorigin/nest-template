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
import { Users } from "./index.entity";
import { UserService } from "./index.service";
import { FilterManyDTO } from "@core/dto/filter-many";
import { DeleteResult } from "typeorm";
import { GetManyDTO } from "@core/dto/get-many";

@Controller("users")
export class UserController {
  constructor(public service: UserService) {}

  @Post()
  createOne(@Body() dto: CreateUserDto): Promise<Users> {
    return this.service.createOne(dto);
  }

  @Get()
  getMany(@Query() param: FilterManyDTO): Promise<GetManyDTO<Users>> {
    return this.service.getMany(param);
  }

  @Get(":id")
  getOne(@Param("id", ParseIntPipe) id: number): Promise<Users> {
    return this.service.getOne(id);
  }

  @Patch(":id")
  updateOne(
    @Param("id", ParseIntPipe) id: number,
    @Body() dto: UpdateUserDTO,
  ): Promise<Users> {
    return this.service.updateOne(id, dto);
  }

  @Delete(":id")
  deleteOne(@Param("id", ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.service.deleteOne(id);
  }
}
