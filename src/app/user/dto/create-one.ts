import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @MinLength(5)
  @MaxLength(100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  password: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  firstname: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  lastname: string;
}
