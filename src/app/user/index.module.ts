import { RoleModule } from "@app/role/index.module";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserController } from "./index.controller";
import { UserRepository } from "./index.repository";
import { UserService } from "./index.service";
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository]), RoleModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, TypeOrmModule],
})
export class UserModule {}
