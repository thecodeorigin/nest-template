import { Type } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class BaseFilterDTO {
  @Min(1)
  @Max(100)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;

  @Min(1)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  page: number;
}
