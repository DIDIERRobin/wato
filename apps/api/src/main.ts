import { HttpAdapterHost, NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { LoggerService } from "./modules/logger/logger.service";
import { ApiConfigService } from "./modules/api-config/api-config.service";
import { CustomValidationPipe } from "./shared/pipes/custom-validation.pipe";
import { AllExceptionsFilter } from "./shared/filters/all-exception.filter";
import { CustomValidationExceptionFilter } from "./shared/filters/validation/custom-validation-exception.filter";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  //#region Swagger
  const config = new DocumentBuilder()
    .setTitle("WATO API")
    .setDescription("WATO API documentation")
    .setVersion("1.0")
    .setBasePath("api")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);
  //#endregion

  //#region Validation & Logs
  const logger = await app.resolve<LoggerService>(LoggerService);
  logger.setContext("Nestjs-main");
  app.useLogger(logger);
  const apiConfigService = await app.resolve(ApiConfigService);
  const httpAdapterHost = app.get(HttpAdapterHost)
  const customValidationErrorLogger: LoggerService = new LoggerService(apiConfigService);
  customValidationErrorLogger.setContext("CustomValidationExceptionFilter");
  const allExceptionFilterLogger: LoggerService = new LoggerService(apiConfigService);
  allExceptionFilterLogger.setContext("AllExceptionFilterLogger");

  app.useGlobalPipes(new CustomValidationPipe())
  app.useGlobalFilters(
    new AllExceptionsFilter(httpAdapterHost, allExceptionFilterLogger),
    new CustomValidationExceptionFilter(httpAdapterHost, customValidationErrorLogger),
  )
  //#endregion

  const port = apiConfigService.general.PORT
  await app.listen(port);

  if (process.env.NODE_ENV === "test") {
    logger.log("SERVER_TEST_READY");
  } else {
    logger.log(
      "🚀 Application is running 🚀",
    );
    logger.log(`🚀 http://localhost:${port} 🚀`);
  }
}

bootstrap();
