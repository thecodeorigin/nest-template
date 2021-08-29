import { Role } from "@app/role/index.entity";
import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateUserDTO {
  @MinLength(5)
  @MaxLength(100)
  @IsEmail()
  @IsString()
  @IsOptional()
  email: string;

  @MinLength(5)
  @MaxLength(100)
  @IsString()
  @IsOptional()
  password: string;

  @MinLength(5)
  @MaxLength(50)
  @IsString()
  @IsOptional()
  firstname: string;

  @MinLength(5)
  @MaxLength(50)
  @IsString()
  @IsOptional()
  lastname: string;

  @IsNumber({}, { each: true })
  @IsArray()
  @IsOptional()
  roleIds: number[];

  roles: Array<Role>;
}
