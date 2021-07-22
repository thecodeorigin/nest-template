import { MAXIMUM_PAGINATION_LIMIT } from "@core/environments/env";
import { Transform, Type } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class FilterManyDTO {
  @Min(1)
  @Max(MAXIMUM_PAGINATION_LIMIT)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  limit: number;

  @Min(1)
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  page: number;

  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  sort: string[];

  @IsOptional()
  @Transform(({ value }) => (Array.isArray(value) ? value : [value]))
  filter: string[];
}
