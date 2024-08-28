import { Module } from '@nestjs/common';
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Task, TaskSchema } from "./models/task.schema";
import { HabitTask, HabitTaskSchema } from "./models/habit-task.schema";
import { NiceTask, NiceTaskSchema } from "./models/nice-task.schema";
import { FixTask, FixTaskSchema } from "./models/fix-task.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Task.name, schema: TaskSchema},
      {name: NiceTask.name, schema: NiceTaskSchema},
      {name: HabitTask.name, schema: HabitTaskSchema},
      {name: FixTask.name, schema: FixTaskSchema},
    ])
  ],
  controllers: [
    TaskController
  ],
  providers: [
    TaskService
  ],
})
export class TaskModule {
}
