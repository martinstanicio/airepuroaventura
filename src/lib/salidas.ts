import { notFound } from "next/navigation";

import { Salida, allSalidas } from "contentlayer/generated";

export const allSalidasSlugs = allSalidas.map(({ slug }) => ({ slug }));

export const sortedSalidas = allSalidas.sort((a, b) => {
  if (a.date && b.date) {
    return Date.parse(b.date) - Date.parse(a.date);
  }

  if (a.title > b.title) return 1;
  if (a.title < b.title) return -1;
  return 0;
});

export const isUpcomingSalida = ({ date }: Salida) =>
  new Date(date) > new Date();

export const isPastSalida = ({ date }: Salida) => new Date(date) < new Date();

export const upcomingSalidas = sortedSalidas.filter(isUpcomingSalida);

export const pastSalidas = sortedSalidas.filter(isPastSalida);

export const featuredSalidas = upcomingSalidas.slice(0, 3);

export function findSalida(slug: string) {
  const salida = allSalidas.find((s) => s.slug === slug);

  if (!salida) notFound();

  return salida;
}
