import { IsBoolean } from "class-validator";
import { registerAs } from "@nestjs/config";
import { validateFactory } from "./validate-factory.utils";

export class LogEnvVars {
  @IsBoolean()
  verbose = true;

  @IsBoolean()
  debug = true;

  @IsBoolean()
  log = true;

  @IsBoolean()
  warn = true;

  @IsBoolean()
  error = true;
}

export const LOG_CONFIG_NAMESPACE = "logger";

export default registerAs(LOG_CONFIG_NAMESPACE, () => {
  const config = {
    log: process.env.LOG_LEVEL_LOG === "true" || true,
    warn: process.env.LOG_LEVEL_WARN === "true" || true,
    error: process.env.LOG_LEVEL_ERROR === "true" || true,
    verbose: process.env.LOG_LEVEL_VERBOSE === "true" || true,
    debug: process.env.LOG_LEVEL_DEBUG === "true" || true,
  };
  return validateFactory(LogEnvVars, LOG_CONFIG_NAMESPACE)(config);
});
