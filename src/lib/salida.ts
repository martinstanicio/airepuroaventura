import { z } from "zod";

const difficultySchema = z.union([
  z.literal("easy"),
  z.literal("medium"),
  z.literal("hard"),
]);

const eventDaySchema = z.object({
  title: z.string(),
  content: z.array(z.string()),
});

const salidaSchema = z.object({
  slug: z.string(),
  title: z.string(),
  startDate: z.string().date(),
  endDate: z.string().date(),
  price: z.number(),
  img: z.string(),
  difficulty: difficultySchema,
  tags: z.array(z.string()),
  description: z.array(z.string()),
  itinerary: z.array(eventDaySchema),
  personalEquipment: z.object({
    items: z.array(z.string()),
    footer: z.string().optional(),
  }),
  includes: z.object({
    items: z.array(z.string()),
    footer: z.string().optional(),
  }),
  notIncludes: z.object({
    items: z.array(z.string()),
    footer: z.string().optional(),
  }),
});

const salidasListSchema = z.array(salidaSchema);

export type Difficulty = z.infer<typeof difficultySchema>;
export type EventDay = z.infer<typeof eventDaySchema>;
export type Salida = z.infer<typeof salidaSchema>;
export type SalidasList = z.infer<typeof salidasListSchema>;

