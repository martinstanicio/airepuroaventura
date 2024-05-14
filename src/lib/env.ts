import { z } from "zod";

export const envVariables = z.object({
  NEXT_PUBLIC_PHONE: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
