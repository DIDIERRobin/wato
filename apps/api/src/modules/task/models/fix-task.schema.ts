import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.schema';
import type { HydratedDocument } from 'mongoose';
import { taskDiscriminatorOption } from "./discriminator.common";
import { iFixTask } from "@wato/models";
import { UsualDate } from "../../../shared/objects/decorators/usual-date.decorator";

@Schema(taskDiscriminatorOption)
export class FixTask extends Task implements iFixTask {
  @UsualDate("A deadline is a deadline.")
  deadlineAt: Date;
}

export const FixTaskSchema = TaskSchema.discriminator('FixTask', SchemaFactory.createForClass(FixTask));
export type FixTaskDocument = HydratedDocument<FixTask>
