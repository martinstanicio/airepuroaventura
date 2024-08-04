import { Difficulty, getDifficultyData } from "@/lib/salida";
import { cn } from "@/lib/utils";

import { Badge } from "./ui/badge";

export type Props = React.HTMLAttributes<HTMLDivElement> & {
  difficulty: Difficulty;
};

export default function DifficultyBadge({
  difficulty,
  className,
  ...props
}: Props) {
  const { label, background, foreground, hover } =
    getDifficultyData(difficulty);

  return (
    <Badge
      className={cn("font-bold", background, foreground, hover, className)}
      {...props}
    >
      {label}
    </Badge>
  );
}
