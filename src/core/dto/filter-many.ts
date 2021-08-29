import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class BaseFilterDTO {
  @ApiProperty({ type: Number, example: 5, required: false })
  @Min(1)
  @Max(100)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;

  @ApiProperty({ type: Number, example: 1, required: false })
  @Min(1)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  page: number;
}
