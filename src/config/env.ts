import { SYSID } from "@core/constants/system";
import { config } from "dotenv";

config();
const env = process.env;

export const SERVER_PORT = env.SERVER_PORT || 3000;
export const SYSTEM_ID = env.SYSTEM_ID || SYSID.LOCALHOST;
export const SYSTEM_LOG_INFO = getLogLevel();

function getLogLevel() {
  try {
    return JSON.parse(env.SYSTEM_LOG_INFO);
  } catch (error) {
    return "all";
  }
}
