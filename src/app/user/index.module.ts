import { Module } from "@nestjs/common";
import { UserController } from "./index.controller";
import { UserService } from "./index.service";
@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
