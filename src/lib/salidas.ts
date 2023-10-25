import { notFound } from "next/navigation";

import { allSalidas } from "contentlayer/generated";

export const difficulties = [
  { value: "easy", name: "facil", className: "bg-easy" },
  { value: "medium", name: "moderada", className: "bg-medium" },
  { value: "hard", name: "dificil", className: "bg-hard" },
] as const;

export const allSalidasSlugs = allSalidas.map(({ slug }) => ({ slug }));

export const sortedSalidas = allSalidas.sort((a, b) => {
  if (a.date && b.date) {
    return Date.parse(a.date) - Date.parse(b.date);
  }

  if (a.title > b.title) return 1;
  if (a.title < b.title) return -1;
  return 0;
});

export const upcomingSalidas = sortedSalidas.slice(0, 3);

export function findSalida(slug: string) {
  const salida = allSalidas.find((s) => s.slug === slug);

  if (!salida) notFound();

  return salida;
}
