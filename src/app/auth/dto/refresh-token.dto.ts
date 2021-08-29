import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class RefreshTokenDTO {
  @MinLength(1)
  @MaxLength(500)
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
