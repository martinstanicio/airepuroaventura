import Image from "next/image";
import Link from "next/link";

import { Salida } from "contentlayer/generated";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { ARS, longDate } from "@/lib/utils";

import DifficultyBadge from "./difficulty-badge";

export default function SalidaCard({
  title,
  date,
  price,
  img,
  difficulty,
  tags,
  url,
}: Salida) {
  return (
    <Card>
      <CardImage>
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </CardImage>

      <CardHeader className="space-y-4">
        <div className="relative flex gap-2 overflow-hidden after:absolute after:right-0 after:h-full after:w-4 after:bg-gradient-to-l after:from-card">
          <DifficultyBadge difficulty={difficulty} />
          {tags.slice(0, 2).map((tag, i) => (
            <Badge key={i} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <time dateTime={date}>{longDate.format(new Date(date))}</time>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex gap-4">
        <Button asChild>
          <Link href={url}>Ver salida</Link>
        </Button>
        <span className="font-bold">{ARS.format(price)}</span>
      </CardFooter>
    </Card>
  );
}
