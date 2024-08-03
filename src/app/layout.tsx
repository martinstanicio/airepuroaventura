import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aire Puro: Trekking y aventura",
  description:
    "Explora la belleza de Argentina con Aire Puro. Ofrecemos emocionantes salidas turísticas con trekking, cicloturismo, campamentos y más. ¡Únete a la aventura!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
