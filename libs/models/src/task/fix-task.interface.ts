import { iTask } from "@wato/models";

export interface iFixTask extends iTask {
  deadlineAt: Date;
}
