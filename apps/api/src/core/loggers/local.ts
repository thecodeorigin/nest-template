import { createLogger, format, transports } from "winston";

export class AppLog {
  constructor() {
    const customFormat = format.printf(
      ({ message, level, timestamp }) => `[${timestamp}][${level}]: ${message}`
    );
    const coreLogger = createLogger({
      format: customFormat,
      transports: [
        new transports.File({ filename: "core.log" }),
      ],
    });
  }

  exception(message: string) {
    console.log(message);
  }

  info(message: string) {
    console.log(message);
  }

  warn(message: string) {
    console.log(message);
  }
}
