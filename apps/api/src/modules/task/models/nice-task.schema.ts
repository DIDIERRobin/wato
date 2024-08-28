import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Task, TaskSchema } from './task.schema';
import type { HydratedDocument } from 'mongoose';
import { Schema } from "@nestjs/mongoose"
import { taskDiscriminatorOption } from "./discriminator.common";
import { iNiceTask } from "@wato/models";
import { UsualDate } from "../../../shared/objects/decorators/usual-date.decorator";
import { UsualNumber } from "../../../shared/objects/decorators/usual-number.decorator";

@Schema(taskDiscriminatorOption)
export class NiceTask extends Task implements iNiceTask{
  @UsualDate("Task horizon date. Meaning around when we would like the task to be done.")
  horizon: Date;

  @UsualNumber("Number of times the task has been snoozed.")
  snoozedNbr: number;
}

export const NiceTaskSchema = TaskSchema.discriminator('NiceTask', SchemaFactory.createForClass(NiceTask));
export type NiceTaskDocument = HydratedDocument<NiceTask>
