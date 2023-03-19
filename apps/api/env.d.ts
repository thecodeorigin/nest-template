// declare types for .env variables
declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_PORT?: number;
    SYSTEM_ID?: number;
    NODE_ENV?: "development" | "production";
    MYSQL_DATABASE?: string;
    MYSQL_USER?: string;
    MYSQL_PASSWORD?: string;
    MYSQL_HOST?: string;
    MYSQL_PORT?: number;
    MYSQL_MAX_QUERY_TIME?: number;
    SYSTEM_LOG_INFO?: string;
  }
}
