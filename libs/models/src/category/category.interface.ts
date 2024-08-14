import { iBaseEntity } from "../common";

export interface iCategory extends iBaseEntity {
  label: string;
  description: string;
  color: string;
}
