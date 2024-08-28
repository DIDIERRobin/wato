import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional } from "class-validator";
import { Prop } from "@nestjs/mongoose";
import { Type } from "class-transformer";

export function UsualDate(description: string, optional = false) {
  let decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: Date, required: !optional }),
    Type(() => Date),
    IsDate(),
    Prop({ required: !optional, type: Date, default: optional ? undefined : Date.now }),
  ];
  if (optional) {
    decorators = [IsOptional(), ...decorators];
  }
  return applyDecorators(...decorators);
}

export function UsualDateOrNull(description: string) {
  let decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: Date, required: false, nullable: true }),
    Type(() => Date),
    IsDate(),
    Prop({ required: false, type: Date, default: null, nullable: true }),
  ];
  return applyDecorators(...decorators);
}
