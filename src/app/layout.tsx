import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import "@/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cn } from "@/lib/utils";

faConfig.autoAddCss = false;

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
