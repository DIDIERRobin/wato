import { iTask } from "./task.interface";

export interface iHabitTask extends iTask {
  recurrence: number
  lastlyDoneAt: Date | null
}
