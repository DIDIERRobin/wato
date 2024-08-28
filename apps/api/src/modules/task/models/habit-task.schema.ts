import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.schema';
import type { HydratedDocument } from 'mongoose';
import { taskDiscriminatorOption } from "./discriminator.common";
import { iHabitTask } from "@wato/models";
import { UsualDateOrNull } from "../../../shared/objects/decorators/usual-date.decorator";
import { UsualNumber } from "../../../shared/objects/decorators/usual-number.decorator";

@Schema(taskDiscriminatorOption)
export class HabitTask extends Task implements iHabitTask {
  @UsualDateOrNull("When was the last time this task has been done.")
  lastlyDoneAt: Date;

  @UsualNumber("Number of day recurrence.")
  recurrence: number;
}

export const HabitTaskSchema = TaskSchema.discriminator('HabitTask', SchemaFactory.createForClass(HabitTask));
export type HabitTaskDocument = HydratedDocument<HabitTask>
