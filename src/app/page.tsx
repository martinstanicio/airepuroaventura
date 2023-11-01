import Link from "next/link";

import Hero from "@/components/hero";
import SalidaCard from "@/components/salida-card";
import { Button } from "@/components/ui/button";
import { upcomingSalidas } from "@/lib/salidas";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <section className="container space-y-8 py-8 md:text-center">
          <header className="prose">
            <h1>Próximas salidas</h1>
            <p>
              Nuestros guías expertos te acompañarán en estas emocionantes
              aventuras, brindándote seguridad y experiencias inolvidables.
            </p>
          </header>
          <div className="space-y-4">
            <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fit,minmax(25ch,1fr))] grid-rows-3 gap-x-4 overflow-y-hidden [grid-auto-rows:0] sm:grid-rows-1">
              {upcomingSalidas.map((salida, i) => (
                <SalidaCard key={i} {...salida} />
              ))}
            </div>
            <Button asChild size="lg" className="mx-auto mb-4 max-md:w-full">
              <Link href="/salidas">Ver todas las salidas</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
