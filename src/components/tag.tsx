import Link from "next/link";

import { Salida } from "contentlayer/generated";

import { Badge } from "@/components/ui/badge";
import difficulties from "@/lib/difficulties";
import { cn } from "@/lib/utils";

export type TagProps = { value: string };

export default function Tag({ value }: TagProps) {
  return (
    <Link href={`/salidas?categoria=${value}`}>
      <Badge variant="secondary">{value}</Badge>
    </Link>
  );
}

export type DifficultyTagProps = Pick<Salida, "difficulty">;

export function DifficultyTag({ difficulty }: DifficultyTagProps) {
  const { className, name } = difficulties.filter(
    ({ value }) => value === difficulty,
  )[0];

  return (
    <Link href={`/salidas?dificultad=${name}`}>
      <Badge className={cn("text-foreground", className)}>{name}</Badge>
    </Link>
  );
}
