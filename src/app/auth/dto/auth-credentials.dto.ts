import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class AuthCredentialsDto {
  @ApiProperty({ example: "example@gmail.com", nullable: false })
  @MinLength(5)
  @MaxLength(50)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "123456", nullable: false })
  @MinLength(5)
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  password: string;
}
