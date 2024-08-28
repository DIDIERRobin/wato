import { Global, Module, Scope } from "@nestjs/common";
import { LoggerService } from "./logger.service";
import { ApiConfigService } from "../api-config/api-config.service";
import { ApiConfigModule } from "../api-config/api-config.module";

@Global()
@Module({
  imports: [ApiConfigModule],
  providers: [
    {
      provide: LoggerService,
      useFactory: (
        apiConfigService: ApiConfigService,
      ): LoggerService => {
        return new LoggerService(apiConfigService);
      },
      scope: Scope.TRANSIENT,
      inject: [ApiConfigService],
    },
  ],
  exports: [LoggerService],
})
export class LoggerModule {
}
