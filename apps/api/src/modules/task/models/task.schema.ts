import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BaseDocument } from "../../../shared/objects/schemas/baseDocument.schema";
import type { HydratedDocument } from "mongoose";
import { UsualString } from "../../../shared/objects/decorators/usual-string.decorator";
import { UsualNumber } from "../../../shared/objects/decorators/usual-number.decorator";
import { UsualEnum } from "../../../shared/objects/decorators/usual-enum.decorator";
import { iTask, eImportance, eDifficulty } from "@wato/models";
import { UsualDateOrNull } from "../../../shared/objects/decorators/usual-date.decorator";
import { Category } from "../../category/models/category.schema";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Task extends BaseDocument implements iTask {
  @UsualString("Task name.")
  label: string;

  @UsualNumber("Task score.")
  score: number;

  @UsualEnum(eImportance, eImportance.LOW, "Task importance level.",)
  importance: eImportance;

  @UsualEnum(eDifficulty, eDifficulty.EASY, "Task difficulty level.",)
  difficulty: eDifficulty;

  @UsualNumber("Minutes to complete.")
  minute: number;

  @UsualDateOrNull("Task done date.")
  doneAt: Date | null;

  @Prop({ type: String, ref: Category.name, required: false })
  categoryId: string;

  @ApiProperty({ type: Category })
  category?: Category;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
export type TaskDocument = HydratedDocument<Task>
