import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength } from "class-validator";

export class FilterUserDTO {
  @ApiProperty({ example: "Quang Tu", required: false })
  @MaxLength(500)
  @IsString()
  @IsOptional()
  name: string;
}
