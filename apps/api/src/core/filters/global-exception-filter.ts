import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { EntityNotFoundError, QueryFailedError } from "typeorm";
import { AppLog } from "../loggers/local";

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    if (exception instanceof HttpException) {
      return this.handleHttpException(exception, host);
    }
    return this.handleSystemException(exception, host);
  }

  private handleHttpException(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.getStatus();
    const customResponse: any = exception.getResponse();
    const message =
      customResponse || response.message || "Unknown server errors";

    new AppLog().exception(exception.stack || "");
    return response.status(exception.getStatus()).json({
      statusCode,
      message,
    });
  }

  private handleSystemException(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let message = exception.message;
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    switch (exception.constructor) {
      case EntityNotFoundError: {
        statusCode = HttpStatus.NOT_FOUND;
        message = "Not found";
        break;
      }
      case QueryFailedError: {
        statusCode = HttpStatus.BAD_REQUEST;
        message = "Query error";
        break;
      }
    }
    AppLog.exception(exception.stack);

    return response.status(statusCode).json({
      statusCode,
      message,
    });
  }
}
