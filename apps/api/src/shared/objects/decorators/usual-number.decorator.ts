import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Prop } from "@nestjs/mongoose";

export function UsualNumber(description: string, optional = false) {
  let decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: Number, required: !optional }),
    IsString(),
    Prop({ required: !optional, type: Number, default: optional ? undefined : 0 }),
  ];
  if (optional) {
    decorators = [IsOptional(), ...decorators];
  }
  return applyDecorators(...decorators);
}

export function UsualNumberOrNull(description: string) {
  const decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: Number, required: true, nullable: true }),
    IsOptional(),
    IsString(),
    Prop({ required: true, type: Number, default: null }),
  ];

  return applyDecorators(...decorators);
}

