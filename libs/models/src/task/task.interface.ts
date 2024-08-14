import { iBaseEntity } from "../common";
import { iCategory } from "../category";

export interface iTask extends iBaseEntity{
  label: string
  categoryId: string
  score: number
  importanceLevel: number
  difficultyLevel: number
  minuteToComplete: number
  doneAt: Date | null
  category?: iCategory
}
