import { Metadata } from "next";

import SalidasGrid from "@/components/salidas-grid";
import SearchControls from "@/components/search-controls";
import { sortedSalidas } from "@/lib/salidas";

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

export default function Salidas() {
  return (
    <div className="container min-h-screen max-w-prose space-y-8 py-8 md:max-w-6xl">
      <header className="prose md:text-center">
        <h1>{title}</h1>
      </header>
      <div className="space-y-8">
        <SearchControls className="top-32 self-start" />
        <SalidasGrid
          as="main"
          salidas={sortedSalidas}
          className="xl:order-first xl:col-span-3"
        />
      </div>
    </div>
  );
}
