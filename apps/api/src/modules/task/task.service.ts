import { Injectable } from "@angular/core";
import { LoggerService } from "../logger/logger.service";

@Injectable()
export class TaskService {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(this.constructor.name);
  }
}
