import { Global, Module } from "@nestjs/common";
import generalConfig from "./configs/general.config";
import { ApiConfigService } from "./api-config.service";
import { ConfigModule } from "@nestjs/config";
import logConfig from "./configs/log.config";
import mongoConfig from "./configs/mongo.config";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [".env", ".env.default"],
      load: [
        generalConfig,
        logConfig,
        mongoConfig,
      ],
      cache: true,
    }),
  ],
  providers: [ApiConfigService],
  exports: [ApiConfigService],
})
export class ApiConfigModule {
}
