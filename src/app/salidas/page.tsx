import { Metadata } from "next";

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
      <div></div>
    </div>
  );
}
