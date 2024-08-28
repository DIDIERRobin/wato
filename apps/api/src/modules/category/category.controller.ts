import { LoggerService } from "../logger/logger.service";
import { Controller } from "@nestjs/common";

@Controller("category")
export class CategoryController {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(CategoryController.name);
  }
}
