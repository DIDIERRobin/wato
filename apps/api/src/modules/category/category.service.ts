import { Injectable } from "@nestjs/common";
import { LoggerService } from "../logger/logger.service";

@Injectable()
export class CategoryService {
  constructor(private readonly logger: LoggerService) {
    this.logger.setContext(CategoryService.name);
  }
}
