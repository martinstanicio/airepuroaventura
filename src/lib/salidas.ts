import { notFound, useSearchParams } from "next/navigation";

import { Salida, allSalidas } from "contentlayer/generated";

import difficulties from "./difficulties";

export { allSalidas } from "contentlayer/generated";
export type { Salida } from "contentlayer/generated";

export const sortedSalidas: Salida[] = allSalidas.sort(
  (a, b) => Date.parse(b.date) - Date.parse(a.date),
);

/**
 * @description Returns an array of objects with a single `slug` property, perfect for Next.js's `generateStaticParams`.
 */
export const allSalidasSlugs = allSalidas.map(({ slug }) => ({ slug }));

export const isUpcomingSalida = (s: Salida) => new Date(s.date) >= new Date();

export const isPastSalida = (s: Salida) => new Date(s.date) < new Date();

export const upcomingSalidas = sortedSalidas.filter(isUpcomingSalida);

export const pastSalidas = sortedSalidas.filter(isPastSalida);

export const featuredSalidas = upcomingSalidas.slice(0, 3);

/**
 * @description Filter a given `salidasList` by the provided search parameters, including search and tags.
 */
export function useFilteredSalidas(salidasList: Salida[] = allSalidas) {
  const params = new URLSearchParams(useSearchParams());

  const tagList = params.has("categoria") && params.getAll("categoria");
  const filterTag = ({ tags }: Salida) => {
    // If `tagList` is false (there are no filters), show everything
    if (!tagList) return true;

    for (const tag of tagList) {
      if (tags.includes(tag)) continue;

      // This will only run if one of the tags in `tagList` isn't found in the current salida's tags
      return false;
    }

    return true;
  };

  const difficultyTagList =
    params.has("dificultad") && params.getAll("dificultad");
  const filterDifficultyTag = ({ difficulty }: Salida) => {
    // If `tagList` is false (there are no filters), show everything
    if (!difficultyTagList) return true;

    const currentDifficulty = difficulties.find(
      ({ value }) => value === difficulty,
    );

    if (!currentDifficulty) return true;

    const currentDifficultyName = currentDifficulty.name;

    for (const iDifficulty of difficultyTagList) {
      if (currentDifficultyName === iDifficulty) return true;

      // This will only run if one of the tags in `tagList` isn't found in the current salida's tags
      return false;
    }

    return true;
  };

  const search = params.has("busqueda") && params.get("busqueda");
  const filterSearch = ({ title, tags }: Salida) => {
    // If `search` is false (there are no filters), show everything
    if (!search) return true;

    // Make everything lowercase for a case insensitive search
    const normalizedTitle = title.toLowerCase();
    const normalizedSearch = search.toLowerCase();

    for (const tag of tags) {
      const normalizedTag = tag.toLowerCase();

      if (normalizedTag.includes(normalizedSearch)) return true;
    }

    return normalizedTitle.includes(normalizedSearch);
  };

  return salidasList
    .filter(filterTag)
    .filter(filterDifficultyTag)
    .filter(filterSearch);
}

/**
 * @description Returns a list of tags from the `salidasList` array, removing duplicates and sorting them alphabetically.
 */
export function useSalidasTags(salidasList: Salida[]) {
  const TagsSet = new Set<string>();

  salidasList.forEach(({ tags }) => {
    tags.forEach((tag) => TagsSet.add(tag));
  });

  // Transform set to array and sort alphabetically for easier mapping
  return Array.from(TagsSet).sort();
}

/**
 * @description Returns a list of difficulties from the `salidasList` array, removing duplicates.
 */
export function useSalidasDifficulties(salidasList: Salida[]) {
  const DifficultiesSet = new Set<string>();

  salidasList.forEach(({ difficulty }) => DifficultiesSet.add(difficulty));

  // Transform set to array for easier mapping
  return Array.from(DifficultiesSet);
}

/**
 * @description Returns a salida with a given slug, or throw a 404 if it doesn't exist.
 */
export function findSalida(slug: string) {
  const salida = allSalidas.find((s) => s.slug === slug);

  if (!salida) notFound();

  return salida;
}
