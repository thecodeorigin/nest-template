import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @IsEmail()
  @MinLength(5)
  @MaxLength(100)
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  password: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(50)
  firstname: string;

  @IsOptional()
  @MinLength(5)
  @MaxLength(50)
  lastname: string;
}
