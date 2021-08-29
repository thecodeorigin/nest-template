import { Body, Controller, Get, Post } from "@nestjs/common";
import { GetAuthUser } from "@app/auth/decorators/get-auth-user.decorator";
import { CreateUserDto } from "@app/user/dto/create-one";
import { AuthService } from "./services/auth.service";
import { UserService } from "@app/user/index.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { RefreshTokenDTO } from "./dto/refresh-token.dto";
import { IsAuth } from "./decorators/is-auth.decorator";

@Controller("auth")
export class AuthController {
  constructor(
    public authService: AuthService,
    public usersService: UserService,
  ) {}

  @Get("/me")
  @IsAuth()
  getProfile(@GetAuthUser() user: any): any {
    return this.authService.getMe(user.id);
  }

  @Post("/signin")
  signin(@Body() dto: AuthCredentialsDto) {
    return this.authService.signin(dto);
  }

  @Post("/signup")
  async signUp(@Body() dto: CreateUserDto): Promise<any> {
    return this.authService.signUp(dto);
  }

  @Post("/refresh-token")
  async refreshToken(@Body() dto: RefreshTokenDTO) {
    return this.authService.refreshToken(dto);
  }

  @Post("/revoke-token")
  async revokeToken(@Body() dto: RefreshTokenDTO) {
    return this.authService.revokeToken(dto);
  }

  @Post("/reset-password")
  async sendResetCode() {
    // TODO: Implement reset password feature
  }

  @Get("/reset-password")
  async resetPassword() {
    // TODO: Implement reset password feature
  }

  @Post("/send-verification-code")
  async sendVerificationCode() {
    // TODO: Implement verification code
  }
}
