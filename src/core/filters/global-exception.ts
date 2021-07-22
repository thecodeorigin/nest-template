import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionsFilter implements ExceptionFilter<HttpException> {
  catch(exception: any, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.getStatus();
    const customResponse: any = exception.getResponse();

    switch (statusCode) {
      case 400:
        return response.status(statusCode).json({
          statusCode,
          message: customResponse.message,
        });
      case 401:
        return response.status(statusCode).json({
          statusCode,
          message: customResponse.message,
        });
      case 403:
        return response.status(statusCode).json({
          statusCode,
          message: customResponse.message,
        });
      case 404:
        return response.status(statusCode).json({
          statusCode,
          message: customResponse.message,
        });
      case 409:
        return response.status(statusCode).json({
          statusCode,
          message: customResponse.message,
        });
      case 500:
        return response.status(statusCode).json({
          statusCode,
          message: customResponse.message,
        });
      default:
        console.log(exception);
        return response.status(exception.getStatus()).json({
          statusCode: exception.getStatus(),
          message: exception.getResponse(),
        });
    }
  }
}
