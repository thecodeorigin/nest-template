import { Role } from "@app/role/index.entity";
import { ApiProperty } from "@nestjs/swagger";
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
  @ApiProperty({ example: "example@gmail.com", nullable: false })
  @MinLength(5)
  @MaxLength(100)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "123456", nullable: false })
  @MinLength(5)
  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: "Quang Tu", nullable: false })
  @MinLength(5)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({ example: "Nguyen", nullable: false })
  @MinLength(5)
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({ type: [Number], example: [1, 2, 3], nullable: false })
  @IsNumber({}, { each: true })
  @IsArray()
  @IsNotEmpty()
  roleIds: number[];

  roles: Array<Role>;
}
