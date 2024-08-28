import { Prop, Schema } from "@nestjs/mongoose";
import { UsualDate } from "../decorators/usual-date.decorator";
import { ApiProperty } from "@nestjs/swagger";
import { v4 } from "uuid";
import { iBaseDocument } from "@wato/models";

@Schema({
  timestamps: {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  },
})
export class BaseDocument implements iBaseDocument{
  @Prop({ type: String, required: true, default: v4() })
  @ApiProperty({ description: "Identifiant uuid du document.", type: String })
  _id!: string;

  @UsualDate("Date de création du document.", true)
  createdAt!: Date | null;

  @UsualDate("Date de mise à jour du document.", true)
  updatedAt!: Date | null;
}
