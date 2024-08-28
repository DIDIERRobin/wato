import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { tStringEnum } from "../types/string-enum.type";

export function UsualEnum(
  myEnum: tStringEnum,
  enumDefault: string,
  description: string,
  optional = false,
) {
  let decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: String, enum: myEnum, required: !optional }),
    Prop({
      required: !optional,
      type: String,
      default: optional ? undefined : enumDefault,
      enum: myEnum,
    }),
  ];
  if (optional) {
    decorators = [IsOptional(), IsEnum(myEnum), ...decorators];
  }
  return applyDecorators(...decorators);
}

export function UsualEnumOrNull(
  myEnum: tStringEnum,
  description: string,
) {
  const decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: String, enum: myEnum, required: false, nullable: true }),
    IsOptional(),
    IsEnum(myEnum),
    Prop({
      required: false,
      type: String,
      default: null,
      enum: myEnum,
    }),
  ];
  return applyDecorators(...decorators);
}

