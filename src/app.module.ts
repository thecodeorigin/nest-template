import { UserModule } from "@app/user/index.module";
import typeOrmConfig from "@config/typeorm.config";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
