import {
  Body,
  Controller,
  Get,
  NotImplementedException,
  Post,
} from "@nestjs/common";
import { GetAuthUser } from "@app/auth/decorators/get-auth-user.decorator";
import { CreateUserDto } from "@app/user/dto/create-one";
import { AuthService } from "./services/auth.service";
import { UserService } from "@app/user/index.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";
import { RefreshTokenDTO } from "./dto/refresh-token.dto";
import { IsAuth } from "./decorators/is-auth.decorator";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(
    public authService: AuthService,
    public usersService: UserService,
  ) {}

  @ApiOperation({ summary: "Get current user using token" })
  @Get("/me")
  @IsAuth()
  getProfile(@GetAuthUser() user: any): any {
    return this.authService.getMe(user.id);
  }

  @ApiOperation({ summary: "Login and get current user" })
  @Post("/signin")
  signin(@Body() dto: AuthCredentialsDto) {
    return this.authService.signin(dto);
  }

  @ApiOperation({ summary: "Signup and get current user" })
  @Post("/signup")
  async signUp(@Body() dto: CreateUserDto): Promise<any> {
    return this.authService.signUp(dto);
  }

  @ApiOperation({ summary: "Get new tokens using refresh token" })
  @Post("/refresh-token")
  async refreshToken(@Body() dto: RefreshTokenDTO) {
    return this.authService.refreshToken(dto);
  }

  @ApiOperation({ summary: "Admin revoke a user refresh token" })
  @Post("/revoke-token")
  async revokeToken(@Body() dto: RefreshTokenDTO) {
    return this.authService.revokeToken(dto);
  }

  @ApiOperation({ summary: "Send reset password token to email" })
  @Post("/reset-password")
  async sendResetCode() {
    throw new NotImplementedException();
  }

  @ApiOperation({ summary: "Reset password using token" })
  @Get("/reset-password")
  async resetPassword() {
    throw new NotImplementedException();
  }

  @ApiOperation({ summary: "Send verification token to email" })
  @Post("/send-verification-code")
  async sendVerificationCode() {
    throw new NotImplementedException();
  }

  @ApiOperation({ summary: "Verify account using token" })
  @Get("/verify-account")
  async verifyAccount() {
    throw new NotImplementedException();
  }

  @ApiOperation({ summary: "Admin verify account without using token" })
  @Post("/admin-verify-account")
  async adminVerifyAccount() {
    throw new NotImplementedException();
  }
}
