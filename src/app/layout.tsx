import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";

faConfig.autoAddCss = false;

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aire Puro Aventura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={font.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
