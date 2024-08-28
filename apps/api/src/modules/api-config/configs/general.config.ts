import { IsEnum, IsNumber, Max, Min } from "class-validator";
import { registerAs } from "@nestjs/config";
import { validateFactory } from "./validate-factory.utils";

export enum eEnvironment {
  Development = "development",
  Production = "production",
  Test = "test",
  Local = "local",
}

export class GeneralEnvVars {
  @IsEnum(eEnvironment)
  NODE_ENV: eEnvironment = eEnvironment.Local;

  @IsNumber()
  @Min(0)
  @Max(65535)
  PORT = 3000;
}

export const GENERAL_CONFIG_NAMESPACE = "general";

export default registerAs(GENERAL_CONFIG_NAMESPACE, () => {
  const config = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  };
  return validateFactory(GeneralEnvVars, GENERAL_CONFIG_NAMESPACE)(config);
});
