import type { Metadata } from "next";

const siteName = "Aire Puro: Trekking y aventura";
const description =
  "Explora la belleza de Argentina con Aire Puro. Ofrecemos emocionantes salidas turísticas con trekking, cicloturismo, campamentos y más. ¡Únete a la aventura!";
const keywords = [
  "Aire Puro",
  "Trekking",
  "Aventura",
  "Argentina",
  "Turismo",
  "Cicloturismo",
  "Campamentos",
  "Naturaleza",
  "Experiencias al aire libre",
];
export const title =
  "Explorá la naturaleza argentina en una aventura inolvidable";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteName}`,
    default: `${title} | ${siteName}`,
  },
  description,
  keywords,
  creator: "Martín Stanicio",
  generator: "Next.js",
  alternates: { canonical: "/" },
  openGraph: {
    siteName,
    title,
    description,
    type: "website",
    locale: "es-AR",
    url: "/",
  },
};
