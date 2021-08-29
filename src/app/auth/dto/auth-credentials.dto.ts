import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class AuthCredentialsDto {
  @MinLength(5)
  @MaxLength(50)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(5)
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  password: string;
}
