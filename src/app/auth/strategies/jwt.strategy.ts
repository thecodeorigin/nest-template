import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { Injectable } from "@nestjs/common";
import { ACCESS_TOKEN_SECRET } from "@config/env";
import { UserRepository } from "@app/user/index.repository";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private usersRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: ACCESS_TOKEN_SECRET,
    });
  }

  async validate(payload: any): Promise<any> {
    if (payload.id)
      return this.usersRepository.findOne(payload.id, {
        relations: ["roles"],
      });
    return null;
  }
}
