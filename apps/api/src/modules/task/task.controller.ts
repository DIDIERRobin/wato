import { Controller } from "@nestjs/common";
import { LoggerService } from "../logger/logger.service";

@Controller("task")
export class TaskController {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(this.constructor.name);
  }
}
