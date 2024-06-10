import { HTMLAttributes } from "react";

import Image from "next/image";
import Link from "next/link";

import { Salida } from "contentlayer/generated";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { isPastSalida } from "@/lib/salidas";
import { ARS, cn, longDate } from "@/lib/utils";

import Tag, { DifficultyTag } from "./tag";

export type Props = HTMLAttributes<HTMLDivElement> &
  Salida & { priority?: boolean };

export default function SalidaCard(props: Props) {
  const isOld = isPastSalida(props);

  const {
    title,
    date,
    price,
    img,
    difficulty,
    tags,
    url,
    priority = false,
    className,
    ..._props
  } = props;

  return (
    <Card className={cn(isOld && "brightness-90", className)} {..._props}>
      <CardImage>
        <Image
          src={img}
          alt={title}
          priority={priority}
          fill
          className="bg-muted object-cover object-center"
        />
      </CardImage>

      <CardHeader className="space-y-4">
        <div className="relative flex gap-2 overflow-hidden after:absolute after:right-0 after:h-full after:w-4 after:bg-gradient-to-l after:from-card">
          <DifficultyTag difficulty={difficulty} />
          {tags.map((value, i) => (
            <Tag key={i} value={value} />
          ))}
        </div>
        <CardTitle>
          <span className={cn(isOld && "line-through")}>{title}</span>
        </CardTitle>
        <CardDescription>
          {isOld ? (
            "Salida realizada"
          ) : (
            <time dateTime={date}>{longDate.format(new Date(date))}</time>
          )}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex gap-4">
        <Button asChild>
          <Link href={url}>Ver salida</Link>
        </Button>
        {!isOld && <span className="font-bold">{ARS.format(price)}</span>}
      </CardFooter>
    </Card>
  );
}
