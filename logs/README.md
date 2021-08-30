# Project logging

## Features

This project uses these two packet in order to handle logging:

- [Winston](https://github.com/winstonjs/winston) : This is used as a main logger in the project
- [Winston Daily Rotate File](https://github.com/winstonjs/winston-daily-rotate-file) : This is an addon used to rotate the log file to better handle the logging

To control or limit the information that is being logged, please change this variable inside `.env` file:

```bash
# Examples: all, ["error", "info", "log", "migration", "query", "schema", "warn"]
SYSTEM_LOG_INFO=all
```

The logger in this system is inherited from Typeorm Logger interface (We may need to change this so it is seperated from TypeORM). Navigate to `/src/core/utils/loggers` to see the logger classes in action.

## Generated files

When the logger is working normally, it should generated two 4 files:

| Name          | Description                     |
| ------------- | --------------------------- |
| `core.log-YYYY-MM-DD.log`       | This file is normally used to log out errors, debug messages and information relating to the API and system                   |  
| `queries.log-YYYY-MM-DD.log`      | This file is normally used to log out queries, errors and information relating to database |
| `xxxxxxxxxx-audit.json`      | These two files are used by [Winston Daily Rotate File](https://github.com/winstonjs/winston-daily-rotate-file) to track and rotate `core` and `queries` logging file|
