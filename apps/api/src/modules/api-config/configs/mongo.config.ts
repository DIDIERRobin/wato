import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";
import { registerAs } from "@nestjs/config";
import { validateFactory } from "./validate-factory.utils";

export class MongoDBEnvVars {
  @IsString()
  MONGODB_HOST = "localhost";

  @IsString()
  MONGODB_NAME = "siaf-ref";

  @IsOptional()
  @IsString()
  MONGODB_USER = undefined;

  @IsOptional()
  @IsString()
  MONGODB_PASSWORD = undefined;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(65535)
  MONGODB_PORT = 27017;

  @IsOptional()
  @IsString()
  MONGODB_URI: string | undefined;
}

export const MONGO_CONFIG_NAMESPACE = "mongodb";

export default registerAs(MONGO_CONFIG_NAMESPACE, () => {
  const config = {
    MONGODB_HOST: process.env.MONGODB_HOST,
    MONGODB_PORT: parseInt(process.env.MONGODB_PORT || "27017", 10),
    MONGODB_NAME: process.env.MONGODB_NAME,
    MONGODB_USER: process.env.MONGODB_USER,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  };
  return validateFactory(MongoDBEnvVars, MONGO_CONFIG_NAMESPACE)({
    ...config,
    MONGODB_URI: `mongodb://${config.MONGODB_USER}:${config.MONGODB_PASSWORD}@${config.MONGODB_HOST}:${config.MONGODB_PORT}/${config.MONGODB_NAME}`,
  });
});
