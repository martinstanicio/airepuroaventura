import { Metadata } from "next";

import SalidaCard from "@/components/salida-card";
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
    <main className="container space-y-8 py-8">
      <header className="prose">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
      <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fill,minmax(25ch,1fr))] gap-4">
        {sortedSalidas.map((salida, i) => (
          <SalidaCard key={i} {...salida} />
        ))}
      </div>
    </main>
  );
}
