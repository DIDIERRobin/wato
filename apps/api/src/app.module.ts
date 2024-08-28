import { Module } from '@nestjs/common';
import { ApiConfigModule } from "./modules/api-config/api-config.module";
import { LoggerModule } from "./modules/logger/logger.module";
import { ApiConfigService } from "./modules/api-config/api-config.service";
import { MongooseModule } from "@nestjs/mongoose"


@Module({
  imports: [
    // GLOBAL MODULES
    ApiConfigModule,
    LoggerModule,

    // CONTEXT MODULES
    MongooseModule.forRootAsync({
      imports: [ApiConfigModule],
      inject: [ApiConfigService],
      useFactory: (conf: ApiConfigService) => ({
        uri: conf.mongoDBConfig.MONGODB_URI,
      }),
    }),

    // WATO MODULES


  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
