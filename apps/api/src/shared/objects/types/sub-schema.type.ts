import { Schema } from "mongoose";

export type TSubSchema <T>= {
  class: new (...args: unknown[]) => T,
  schema: Schema,
  description: string
}
