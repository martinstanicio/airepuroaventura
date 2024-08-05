import { z } from "zod";
import trips from "~/trips.json";

const difficultySchema = z.union([
  z.literal("easy"),
  z.literal("medium"),
  z.literal("hard"),
]);

const eventDaySchema = z.object({
  title: z.string(),
  content: z.array(z.string()),
});

const tripSchema = z.object({
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

export type Difficulty = z.infer<typeof difficultySchema>;
export type EventDay = z.infer<typeof eventDaySchema>;
export type Trip = z.infer<typeof tripSchema>;

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

export function getAllTrips(): Trip[] {
  const allTrips = trips;
  const result = z.array(tripSchema).safeParse(allTrips);

  if (!result.success) throw result.error;

  return result.data;
}

export function getFilteredTrips(query: string): Trip[] {
  const allTrips = getAllTrips();

  function filterFunction({ title, tags }: { title: string; tags: string[] }) {
    const lowercaseQuery = query.toLowerCase();
    const lowercaseTitle = title.toLowerCase();
    let queryIsInTags = false;

    tags.every((tag) => {
      const lowercaseTag = tag.toLowerCase();

      if (lowercaseTag.includes(lowercaseQuery)) {
        queryIsInTags = true;
        return false;
      }

      return true;
    });

    return lowercaseTitle.includes(lowercaseQuery) || queryIsInTags;
  }

  const result = allTrips.filter(filterFunction);

  return result;
}

export function getTrip(slug: string): Trip | null {
  const allTrips = getAllTrips();

  const result = allTrips.find((trip) => trip.slug === slug);

  if (!result) return null;

  return result;
}
