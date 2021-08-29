import { SERVER_PORT } from "@config/env";
import { GlobalExceptionsFilter } from "@core/filters/global-exception-filter";
import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
  OpenAPIObject,
} from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/v1");
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
      transform: true,
    }),
  );
  const swaggerSetupOptions: SwaggerCustomOptions = {
    explorer: true,
    swaggerOptions: {
      docExpansion: false,
      deepLinking: true,
    },
  };

  const document: OpenAPIObject = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle("TheCodeOrigin")
      .setDescription(
        "This is NestJS Simple Base with NestJSX Crud microframework",
      )
      .addBearerAuth()
      .setVersion("1.0.0")
      .setContact(
        "Nguyễn Quang Tú",
        "https://www.linkedin.com/in/quangtudng",
        "quangtupct@gmail.com",
      )
      .build(),
    {
      deepScanRoutes: true,
    },
  );

  SwaggerModule.setup("docs", app, document, swaggerSetupOptions);

  app.useGlobalFilters(new GlobalExceptionsFilter());
  await app.listen(SERVER_PORT);
}
bootstrap();
