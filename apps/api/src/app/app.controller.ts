import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { iTask } from "@wato/models";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    const fakeTask: iTask = {
      id: 42
    }
    return this.appService.getData();
  }
}
