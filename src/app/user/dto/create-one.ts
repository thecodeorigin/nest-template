import { Role } from "@app/role/index.entity";
import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @MinLength(5)
  @MaxLength(100)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @MinLength(5)
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  password: string;

  @MinLength(5)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @MinLength(5)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsNumber({}, { each: true })
  @IsArray()
  @IsNotEmpty()
  roleIds: number[];

  roles: Array<Role>;
}
