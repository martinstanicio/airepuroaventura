import Image from "next/image";

import DifficultyBadge from "@/components/difficulty-badge";
import { Badge } from "@/components/ui/badge";
import { Trip } from "@/lib/trips";
import { cn, longDate } from "@/lib/utils";

export type Props = React.HTMLAttributes<HTMLDivElement> & { trip: Trip };

export default function TripHeader({ trip, className, ...props }: Props) {
  const { startDate, title, difficulty, tags, img } = trip;

  return (
    <header className={cn("prose", className)} {...props}>
      <p className="lead mt-0">{longDate.format(new Date(startDate))}</p>
      <h1>{title}</h1>

      <div className="relative flex flex-wrap gap-2">
        <DifficultyBadge difficulty={difficulty} />
        {tags.map((tag, i) => (
          <Badge key={i}>{tag}</Badge>
        ))}
      </div>

      <div className="relative mt-8 aspect-[4/3]">
        <Image
          src={img}
          alt={title}
          fill
          className="m-0 rounded-md bg-secondary object-cover object-center"
        />
      </div>
    </header>
  );
}
