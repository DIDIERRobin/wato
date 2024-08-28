import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { Prop } from "@nestjs/mongoose";

export function UsualString(description: string, optional = false) {
  let decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: String, required: !optional }),
    IsString(),
    Prop({ required: !optional, type: String, default: optional ? undefined : "" }),
  ];
  if (optional) {
    decorators = [IsOptional(), ...decorators];
  }
  return applyDecorators(...decorators);
}

export function UsualStringOrNull(description: string) {
  const decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: String, required: true, nullable: true }),
    IsOptional(),
    IsString(),
    Prop({ required: true, type: String, default: null }),
  ];

  return applyDecorators(...decorators);
}

