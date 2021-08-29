import { BaseFilterDTO } from "@core/dto/filter-many";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, MaxLength } from "class-validator";

export class FilterUserDTO extends BaseFilterDTO {
  @ApiProperty({ example: "example@gmail.com", required: false })
  @MaxLength(500)
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({ example: "Quang Tu", required: false })
  @MaxLength(255)
  @IsString()
  @IsOptional()
  firstname: string;

  @ApiProperty({ example: "Nguyen", required: false })
  @MaxLength(255)
  @IsString()
  @IsOptional()
  lastname: string;
}
