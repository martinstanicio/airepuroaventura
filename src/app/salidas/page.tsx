import { Metadata } from "next";

import SearchBar from "@/components/search-bar";

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
        <SearchBar />
        <TripsGrid />
      </main>
    </div>
  );
}
