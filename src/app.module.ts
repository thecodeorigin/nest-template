import { UserModule } from "@app/user/index.module";
import { Module } from "@nestjs/common";

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
