"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import difficulties from "@/lib/difficulties";
import {
  useFilteredSalidas,
  useSalidasDifficulties,
  useSalidasTags,
} from "@/lib/salidas";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export default function FilterBar() {
  const filteredSalidas = useFilteredSalidas();
  const salidaDifficulties = useSalidasDifficulties(filteredSalidas);
  const salidaTags = useSalidasTags(filteredSalidas);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleClearFilters() {
    const newParams = new URLSearchParams(searchParams);

    newParams.delete("categoria");
    newParams.delete("dificultad");

    replace(`${pathname}?${newParams.toString()}`);
  }

  /**
   * @description Updates the search params every time a tag is selected or deselected.
   */
  function handleApplyTagFilter(tag: string) {
    const newParams = new URLSearchParams(searchParams);

    //  If the filter is already in the params, remove it; otherwise add it.
    if (newParams.getAll("categoria").includes(tag)) {
      newParams.delete("categoria", tag);
    } else {
      newParams.append("categoria", tag);
    }

    replace(`${pathname}?${newParams.toString()}`);
  }

  /**
   * @description Updates the search params every time a difficulty is selected or deselected.
   */
  function handleApplyDifficultyFilter(difficulty: string) {
    const newParams = new URLSearchParams(searchParams);

    //  If the filter is already in the params, remove it; otherwise add it.
    if (newParams.getAll("dificultad").includes(difficulty)) {
      newParams.delete("dificultad", difficulty);
    } else {
      newParams.append("dificultad", difficulty);
    }

    replace(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-4 [&>*]:flex-grow">
        {(searchParams.has("categoria") || searchParams.has("dificultad")) && (
          <Button type="submit" onClick={handleClearFilters}>
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Eliminar filtros
          </Button>
        )}

        {salidaDifficulties.map((difficulty, i) => {
          const currentDifficulty = difficulties.find(
            ({ value }) => value === difficulty,
          );

          if (!currentDifficulty) return;

          const { name, className, outlineClassName } = currentDifficulty;

          return (
            <Button
              className={cn(
                "text-foreground",
                searchParams.has("dificultad") &&
                  searchParams.getAll("dificultad").includes(name)
                  ? className
                  : outlineClassName,
              )}
              variant="outline"
              onClick={() => handleApplyDifficultyFilter(name)}
              key={i}
            >
              {name}
            </Button>
          );
        })}

        {salidaTags.map((tag, i) => (
          <Button
            variant={
              searchParams.has("categoria") &&
              searchParams.getAll("categoria").includes(tag)
                ? "default"
                : "secondary"
            }
            onClick={() => handleApplyTagFilter(tag)}
            key={i}
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
}
