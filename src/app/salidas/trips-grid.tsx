"use client";

import { useSearchParams } from "next/navigation";

import TripCard from "@/components/trip-card";
import { Trip, getAllTrips, getFilteredTrips } from "@/lib/trips";

export type Props = { listOfTrips?: Trip[] };

export default function TripsGrid({ listOfTrips = getAllTrips() }: Props) {
  const searchParams = useSearchParams();
  const query = searchParams.get("busqueda") || "";
  const filteredTrips = getFilteredTrips(query, listOfTrips);

  if (filteredTrips.length === 0)
    return (
      <div className="prose max-w-full rounded-md border bg-secondary p-4 text-secondary-foreground md:text-center">
        <p>No se han encontrado resultados.</p>
      </div>
    );

  return filteredTrips.map((trip, i) => <TripCard key={i} {...trip} />);
}
