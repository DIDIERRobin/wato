import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, ValidateNested } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";
import { TSubSchema } from "../types/sub-schema.type";

export type tSubSchemaOption = {
  optional?: boolean;
  withDefault?: boolean;
}

const defaultSubSchemaOption: tSubSchemaOption = {
  optional: false,
  withDefault: true,
};

export function SingleSubSchema<T>(subSchema: TSubSchema<T>, options: tSubSchemaOption = {}): PropertyDecorator {
  options = { ...defaultSubSchemaOption, ...options };
  let decorators: PropertyDecorator[] = [
    ApiProperty({ type: subSchema.class, description: subSchema.description, required: !options.optional }),
    ValidateNested(),
    Type(() => subSchema.class),
  ];
  if (options.withDefault) {
    decorators.push(
      Prop({ type: subSchema.schema, default: new subSchema.class() }),
    );
  } else {
    decorators.push(
      Prop({ type: subSchema.schema }),
    );
  }
  if (options.optional) {
    decorators = [IsOptional(), ...decorators];
  }
  return applyDecorators(...decorators);
}
