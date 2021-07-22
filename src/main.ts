import { PORT } from "@core/environments/env";
import { HttpExceptionsFilter } from "@core/filters/global-exception";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
      transform: true,
    }),
  );
  app.useGlobalFilters(new HttpExceptionsFilter());
  await app.listen(PORT);
}
bootstrap();
