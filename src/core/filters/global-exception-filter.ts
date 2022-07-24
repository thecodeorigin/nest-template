import { SYSTEM_ID } from "@config/env";
import { SYSID } from "@core/constants/system";
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { EntityNotFoundError, QueryFailedError } from "typeorm";
import { ProjectLogger } from "../loggers/log-service";

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    if (exception instanceof HttpException) {
      return this.handleHttpException(exception, host);
    }
    return this.handleSystemException(exception, host);
  }

  /**
   * HttpException error handler. Recommended for customized error message.
   */
  private handleHttpException(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.getStatus();
    const customResponse: any = exception.getResponse();
    const serverErrors = [500, 501, 502, 503, 504, 505, 506, 507, 508, 509];
    const message =
      customResponse || response.message || "Unknown server errors";

    if (serverErrors.includes(statusCode))
      ProjectLogger.exception(exception.stack);
    else if (SYSTEM_ID == SYSID.LOCALHOST) {
      ProjectLogger.info(exception.stack);
    }
    return response.status(exception.getStatus()).json({
      statusCode,
      message,
    });
  }

  /**
   * System exception error handler. This will throw out generic messages if invoked.
   */
  private handleSystemException(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    let message = exception.message;
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    switch (exception.constructor) {
      case EntityNotFoundError:
        statusCode = HttpStatus.NOT_FOUND;
        message = "Not found";
        break;
      case QueryFailedError:
        statusCode = HttpStatus.BAD_REQUEST;
        message = "Query error";
        break;
      default:
        statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
        message = "Unknown server error";
        break;
    }
    ProjectLogger.exception(exception.stack);

    return response.status(statusCode).json({
      statusCode,
      message,
    });
  }
}
