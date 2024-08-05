import Link from "next/link";

import { getUpcomingTrips } from "@/lib/trips";

import TripCard from "./trip-card";
import { Button } from "./ui/button";

export default function UpcomingTrips() {
  const upcomingTrips = getUpcomingTrips();

  return (
    <section className="container max-w-4xl space-y-8 py-16">
      <header className="prose mx-auto md:text-center">
        <h2>Próximas salidas</h2>
        <p>
          Nuestros guías expertos te acompañarán en estas emocionantes
          aventuras, brindándote seguridad y experiencias inolvidables.
        </p>
      </header>
      <div className="space-y-4">
        {upcomingTrips.map((trip, i) => (
          <TripCard key={i} {...trip} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button asChild size="lg" className="max-md:w-full">
          <Link href="/salidas">Ver todas las salidas</Link>
        </Button>
      </div>
    </section>
  );
}
