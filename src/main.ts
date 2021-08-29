import { SERVER_PORT } from "@config/env";
import { GlobalExceptionsFilter } from "@core/filters/global-exception-filter";
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
  app.useGlobalFilters(new GlobalExceptionsFilter());
  await app.listen(SERVER_PORT);
}
bootstrap();
