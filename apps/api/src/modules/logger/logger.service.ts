import { ConsoleLogger, Injectable } from "@nestjs/common";
import { LoggerService as LS } from "@nestjs/common/services/logger.service";
import { ApiConfigService } from "../api-config/api-config.service";

@Injectable()
export class LoggerService extends ConsoleLogger implements LS {

  private _stringifyMessage(message: unknown): string {
    if (typeof message === "string") {
      return message;
    } else if (message instanceof Error) {
      return message.stack || message.message;
    } else {
      return JSON.stringify(message, null, 2); // Indentation for readability
    }
  }

  private _commonLogFunction(
    message: string | object | Error,
    logFunctionKey: "log" | "warn" | "debug" | "error" | "verbose",
  ): void {
    const messageString = this._stringifyMessage(message);
    super[logFunctionKey](messageString);
  }

  constructor(
    private readonly apiConfigService: ApiConfigService,
  ) {
    super();
  }

  log(message: string | object): void {
    if (this.apiConfigService.logger.log) {
      this._commonLogFunction(message, "log");
    }
  }

  warn(message: string | object): void {
    if (this.apiConfigService.logger.warn) {
      this._commonLogFunction(message, "warn");
    }
  }

  debug(message: string | object): void {
    if (this.apiConfigService.logger.debug) {
      this._commonLogFunction(message, "debug");
    }
  }

  error(message: string | object | Error): void {
    if (this.apiConfigService.logger.error) {
      this._commonLogFunction(message, "error");
    }
  }

  verbose(message: string | object): void {
    if (this.apiConfigService.logger.verbose) {
      this._commonLogFunction(message, "verbose");
    }
  }
}
