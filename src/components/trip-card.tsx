import Image from "next/image";
import Link from "next/link";

import { Trip, isUpcomingTrip } from "@/lib/trips";
import { ARS, cn, longDate } from "@/lib/utils";

import DifficultyBadge from "./difficulty-badge";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type Props = React.HTMLAttributes<HTMLDivElement> & Trip;

export default function TripCard(trip: Props) {
  const { pending, slug, img, difficulty, tags, title, startDate } = trip;
  const link = `/salidas/${slug}`;

  return (
    <Card className="md:grid md:grid-cols-12">
      {pending ? (
        <div className="relative col-span-4 block aspect-[4/3] h-full">
          <Image src={img} alt={title} fill className="bg-secondary" />
        </div>
      ) : (
        <Link
          href={link}
          className="relative col-span-4 block aspect-[4/3] h-full"
        >
          <Image src={img} alt={title} fill className="bg-secondary" />
        </Link>
      )}

      <CardHeader className="col-span-5">
        <ul className="m-0 mb-2 flex list-none flex-wrap gap-2 p-0">
          <li>
            <DifficultyBadge difficulty={difficulty} />
          </li>
          {tags.map((tag, j) => (
            <li key={j}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
        <CardTitle className="text-xl sm:text-3xl md:text-2xl">
          {pending ? title : <Link href={link}>{title}</Link>}
        </CardTitle>
        <CardDescription className="lg:text-base">
          {longDate.format(new Date(startDate))}
        </CardDescription>
      </CardHeader>

      <CardFooter
        className={cn(
          "col-span-3 flex flex-wrap gap-4 border-t-2 pt-6 md:flex-col md:border-l-2 md:border-t-0",
          pending ? "justify-center" : "justify-between",
        )}
      >
        {pending ? (
          <p className="text-center">Proximamente...</p>
        ) : (
          <>
            <div className="flex-1 content-center">
              {isUpcomingTrip(trip) ? (
                <Link
                  href={link}
                  className="text-xl font-bold sm:text-2xl lg:text-3xl"
                >
                  {ARS.format(trip.price)}
                </Link>
              ) : (
                <p>
                  <strong>Salida ya realizada</strong>
                </p>
              )}
            </div>
            <Button className="max-md:flex-1 md:w-full" asChild>
              <Link href={link}>Ver más</Link>
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
