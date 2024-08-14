import { Task } from "zone.js/lib/zone-impl";

export interface iHabits extends Task {
  dayRecurrence: number
  lastDoneAt: Date | null
}
