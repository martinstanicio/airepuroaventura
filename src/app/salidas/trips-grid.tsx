"use client";

import { useSearchParams } from "next/navigation";

import TripCard from "@/components/trip-card";
import { getFilteredTrips } from "@/lib/trips";

export default function TripsGrid() {
  const searchParams = useSearchParams();
  const query = searchParams.get("busqueda") || "";
  const allTrips = getFilteredTrips(query);

  return allTrips.map((trip, i) => <TripCard key={i} {...trip} />);
}
