import { User } from "@app/user/index.entity";
import { ENTITY_MESSAGE } from "@core/constants/error-message";
import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

/**
 * @Usage The main authentication guard used to implement to JWT authenticated routes
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  handleRequest(err: any, user: User, info: any): any {
    if (info?.message === "No auth token")
      throw new UnauthorizedException("Authentication info missing");
    if (info?.message === "jwt expired")
      throw new UnauthorizedException("Authentication info expired");
    if (info?.message)
      throw new UnauthorizedException(
        "Authentication info incorrect or missing",
      );
    if (!user) {
      throw new NotFoundException(ENTITY_MESSAGE.USER_NOT_FOUND);
    }
    return user;
  }
}
