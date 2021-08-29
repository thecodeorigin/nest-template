import { applyDecorators, SetMetadata, UseGuards } from "@nestjs/common";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { RoleGuard } from "../guards/role-auth.guard";

/**
 * @Usage The main custom decorator to apply authentication and authorization logic
 */
export function IsAuth(roles?: Array<number>) {
  return applyDecorators(
    SetMetadata("roles", roles),
    UseGuards(JwtAuthGuard),
    UseGuards(RoleGuard),
    ApiBearerAuth(),
  );
}
