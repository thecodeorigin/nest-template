import { BaseFilterDTO } from "@core/dto/filter-many";
import { IsOptional, IsString, MaxLength } from "class-validator";

export class FilterUserDTO extends BaseFilterDTO {
  @MaxLength(500)
  @IsString()
  @IsOptional()
  email: string;

  @MaxLength(255)
  @IsString()
  @IsOptional()
  firstname: string;

  @MaxLength(255)
  @IsString()
  @IsOptional()
  lastname: string;
}
