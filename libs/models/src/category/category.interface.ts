import { iBaseDocument } from "../common";

export interface iCategory extends iBaseDocument {
  label: string;
  description: string;
}
