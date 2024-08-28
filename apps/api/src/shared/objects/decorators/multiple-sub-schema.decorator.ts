import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { TSubSchema } from "../types/sub-schema.type";

export function MultipleSubSchema<T>(subSchema: TSubSchema<T>) {
  return applyDecorators(
    ApiProperty({ type: [subSchema.class], description: subSchema.description }),
    ValidateNested({ each: true }),
    Type(() => subSchema.class),
    Prop({ type: [subSchema.schema], default: [] }),
  );
}
