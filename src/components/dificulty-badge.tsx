import { Salida } from "contentlayer/generated";

import { difficulties } from "@/lib/salidas";
import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

export type Props = Pick<Salida, "difficulty">;

export default function DifficultyBadge({ difficulty }: Props) {
  const { className, name } = difficulties.filter(
    ({ value }) => value === difficulty,
  )[0];

  return <Badge className={cn("text-foreground", className)}>{name}</Badge>;
}
