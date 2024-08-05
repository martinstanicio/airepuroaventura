import { Metadata } from "next";
import { Suspense } from "react";

import SearchBar from "@/components/search-bar";
import { Separator } from "@/components/ui/separator";
import { getPastTrips, getUpcomingTrips } from "@/lib/trips";

import TripsGrid from "./trips-grid";

const title = "Salidas turísticas";
const description =
  "Te invitamos a descubrir nuestra amplia gama de actividades para satisfacer a cada tipo de aventurero, sin importar tu nivel de experiencia. ¡Encontrá tu aventura perfecta aquí!";
const url = "/salidas";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url },
};

export default function TripsPage() {
  return (
    <div className="container max-w-4xl space-y-8 py-8">
      <header className="prose max-w-full md:text-center">
        <h1>{title}</h1>
      </header>
      <main className="space-y-8">
        <Suspense>
          <SearchBar />
        </Suspense>

        <div className="prose max-w-full">
          <h2>Próximas salidas</h2>
          <div className="not-prose space-y-4">
            <Suspense>
              <TripsGrid listOfTrips={getUpcomingTrips()} />
            </Suspense>
          </div>
        </div>

        <Separator />

        <div className="prose max-w-full">
          <h2>Salidas pasadas</h2>
          <p>
            Estas son salidas turísticas que <b>realizamos en el pasado</b>,
            están en nuestra plataforma únicamente a <b>modo informativo</b>{" "}
            para aquellos que quieran ver qué actividades solemos realizar.
          </p>
          <div className="not-prose space-y-4">
            <Suspense>
              <TripsGrid listOfTrips={getPastTrips()} />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
