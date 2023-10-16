import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Inter } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import "@/styles/globals.css";

faConfig.autoAddCss = false;

const font = Inter({ subsets: ["latin"] });

export { metadata } from "@/lib/metadata";

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
