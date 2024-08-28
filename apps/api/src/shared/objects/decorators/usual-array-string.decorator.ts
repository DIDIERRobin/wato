import { applyDecorators } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";
import { Prop } from "@nestjs/mongoose";

export function UsualArrayString(description: string) {
  const decorators: PropertyDecorator[] = [
    ApiProperty({ description, type: [String], required: true }),
    IsArray(),
    IsString({each: true}),
    Prop({ required: true, type: [String], default: [] }),
  ];
  return applyDecorators(...decorators);
}

