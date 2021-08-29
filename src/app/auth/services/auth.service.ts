import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "@app/user/index.service";
import { CreateUserDto } from "@app/user/dto/create-one";
import { User } from "@app/user/index.entity";
import { AuthCredentialsDto } from "../dto/auth-credentials.dto";
import { BaseCrudService } from "@core/utils/crud/base-service";
import { AuthIdentity } from "../index.entity";
import { AuthRepository } from "../index.repository";
import { compareHashString } from "@core/utils/hash/bcrypt";
import { REFRESH_TOKEN_SECRET } from "@config/env";
import { RefreshTokenDTO } from "../dto/refresh-token.dto";
import { VALIDATION_MESSAGE } from "@core/constants/error-message";
import { TokenService } from "./jwt.service";

@Injectable()
export class AuthService extends BaseCrudService<AuthIdentity> {
  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private repo: AuthRepository,
  ) {
    super(repo);
  }

  async signin(dto: AuthCredentialsDto) {
    const user = await this.userService.findOneOrFail({
      where: {
        email: dto.email,
      },
      select: ["id", "password"],
    });
    const isSamePassword = await compareHashString(dto.password, user.password);
    if (!isSamePassword) {
      throw new BadRequestException(VALIDATION_MESSAGE.PASSWORD_NOT_MATCH);
    }
    const { accessToken, refreshToken } = this.tokenService.generateAuthToken(
      { id: user.id },
      true,
    );
    await this.repo.saveRefreshToken(user, refreshToken);
    return { accessToken, refreshToken };
  }

  async signUp(dto: CreateUserDto): Promise<any> {
    const user = await this.userService.createOne(dto);
    user.password = dto.password;
    return this.signin(user);
  }

  async getMe(id: number): Promise<User> {
    return this.userService.findOneOrFail(id);
  }

  async refreshToken(dto: RefreshTokenDTO) {
    const identity = await this.repo.findOneOrFail({
      where: { refreshToken: dto.refreshToken },
      relations: ["user"],
      select: ["id", "refreshToken", "user"],
    });
    await this.tokenService.verifyAuthToken(
      dto.refreshToken,
      REFRESH_TOKEN_SECRET,
    );
    const { accessToken, refreshToken } = this.tokenService.generateAuthToken(
      { id: identity.user.id },
      true,
    );
    await this.repo.updateTokenOrFail(dto.refreshToken, refreshToken);
    return { accessToken, refreshToken };
  }

  async revokeToken(dto: RefreshTokenDTO) {
    return this.repo.updateTokenOrFail(dto.refreshToken, null);
  }
}
