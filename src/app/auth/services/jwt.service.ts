import {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_EXPIRES,
} from "@config/env";
import { HTTP_MESSAGE } from "@core/constants/error-message";
import { ProjectLogger } from "@core/utils/loggers/log-service";
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class TokenService {
  constructor(private jwtService: JwtService) {}

  /**
   * @Usage Generate JWT with the system secret and expires
   */
  generateAuthToken(payload: any, requireRefreshToken = false) {
    let accessToken: string = null;
    let refreshToken: string = null;

    accessToken = this.jwtService.sign(payload, {
      secret: ACCESS_TOKEN_SECRET,
      expiresIn: ACCESS_TOKEN_EXPIRES,
    });

    if (requireRefreshToken) {
      refreshToken = this.jwtService.sign(payload, {
        secret: REFRESH_TOKEN_SECRET,
        expiresIn: REFRESH_TOKEN_EXPIRES,
      });
    }
    return {
      accessToken,
      refreshToken,
    };
  }

  /**
   * @Usage Verify JWT with the secret
   */
  async verifyAuthToken(token: string, secret: string): Promise<void> {
    try {
      await this.jwtService.verifyAsync(token, {
        secret,
      });
    } catch (error) {
      if (error.message == "jwt expired") {
        throw new UnauthorizedException("Authentication info expired");
      }
      if (error.message == "invalid signature") {
        throw new UnauthorizedException("Authentication info incorrect");
      }
      ProjectLogger.exception(error.stack);
      throw new InternalServerErrorException(HTTP_MESSAGE.UNKNOWN_SERVER_ERROR);
    }
  }
}
