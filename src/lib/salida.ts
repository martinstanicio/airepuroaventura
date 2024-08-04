import { z } from "zod";
import salidas from "~/salidas.json";

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

export function getDifficultyData(difficulty: Difficulty): {
  label: string;
  background: string;
  foreground: string;
  hover: string;
} {
  switch (difficulty) {
    case "easy":
      return {
        label: "fácil",
        background: "bg-green-400",
        foreground: "text-black",
        hover: "hover:bg-green-400/80",
      };
    case "medium":
      return {
        label: "moderado",
        background: "bg-amber-400",
        foreground: "text-black",
        hover: "hover:bg-amber-400/80",
      };
    case "hard":
      return {
        label: "difícil",
        background: "bg-red-400",
        foreground: "text-black",
        hover: "hover:bg-red-400/80",
      };
  }
}

export function getAllSalidas(): SalidasList {
  const allSalidas = salidas;
  const result = salidasListSchema.safeParse(allSalidas);

  if (!result.success) throw result.error;

  return result.data as SalidasList;
}

export function getSalida(slug: string): Salida | null {
  const allSalidas = getAllSalidas();

  const result = allSalidas.find((salida) => salida.slug === slug);

  if (!result) return null;

  return result as Salida;
}
