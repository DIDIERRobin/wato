import { iTask } from "@wato/models";

export interface iNiceTask extends iTask {
  horizon: Date;
  snoozedNbr: number;
}
