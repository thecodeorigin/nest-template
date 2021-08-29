import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class RefreshTokenDTO {
  @ApiProperty({ example: "totally-not-real-token", nullable: false })
  @MinLength(1)
  @MaxLength(500)
  @IsString()
  @IsNotEmpty()
  refreshToken: string;
}
