import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Inter as FontSans } from "next/font/google";

import "@/app/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { envVariables } from "@/lib/env";
import { cn } from "@/lib/utils";

faConfig.autoAddCss = false;
envVariables.parse(process.env);

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export { metadata } from "@/lib/metadata";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={cn(
          "grid min-h-screen grid-rows-[auto_auto_1fr_auto] bg-background font-sans antialiased",
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
