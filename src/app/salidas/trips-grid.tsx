"use client";

import { useSearchParams } from "next/navigation";

import TripCard from "@/components/trip-card";
import { Trip, getAllTrips, getFilteredTrips } from "@/lib/trips";

export type Props = { listOfTrips: Trip[] };

export default function TripsGrid({ listOfTrips = getAllTrips() }: Props) {
  const searchParams = useSearchParams();
  const query = searchParams.get("busqueda") || "";
  const filteredTrips = getFilteredTrips(query, listOfTrips);

  return filteredTrips.map((trip, i) => <TripCard key={i} {...trip} />);
}
