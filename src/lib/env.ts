import { z } from "zod";

export const envVariables = z.object({});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
