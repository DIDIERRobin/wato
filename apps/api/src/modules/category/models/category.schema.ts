import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { BaseDocument } from "../../../shared/objects/schemas/baseDocument.schema";
import type { HydratedDocument } from "mongoose";
import { UsualString } from "../../../shared/objects/decorators/usual-string.decorator";
import { iCategory } from "@wato/models";

@Schema()
export class Category extends BaseDocument implements iCategory {
  @UsualString("Category name.")
  label: string;

  @UsualString("Category description")
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
export type CategoryDocument = HydratedDocument<Category>
