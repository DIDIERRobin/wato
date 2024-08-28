import { iCategory } from "../category";
import { iBaseDocument } from "../common";
import { eImportance } from "./importance.enum";
import { eDifficulty } from "./difficulty.enum";

export interface iTask extends iBaseDocument {
  label: string
  categoryId: string
  score: number
  importance: eImportance
  difficulty: eDifficulty
  minute: number
  doneAt: Date | null
  category?: iCategory
}
