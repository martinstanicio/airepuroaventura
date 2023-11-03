import Image from "next/image";
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
        <div className="bg-secondary text-secondary-foreground">
          <section className="container grid max-w-4xl gap-8 py-8 md:grid-cols-2">
            <div className="relative h-full max-md:aspect-[4/3]">
              <Image
                src="/about-us.jpg"
                alt="Todos los participantes de una salida de cicloturismo al llegar a destino"
                fill
                className="overflow-hidden rounded-md object-cover object-center shadow"
              />
            </div>
            <div className="prose prose-a:no-underline">
              <h2>Quiénes somos</h2>
              <p>
                Nosotros somos{" "}
                <span className="font-bold text-primary">Aire Puro</span>, y
                nuestra pasión es conectar a las personas con la belleza natural
                y la aventura que ofrece <strong>Argentina</strong>.
              </p>
              <p>
                Con nuestros <strong>guías experimentados</strong>, estamos
                comprometidos a brindar a nuestros viajeros{" "}
                <strong>aventuras inolvidables</strong>.
              </p>
              <Button asChild className="max-md:w-full">
                <Link href="/sobre-nosotros">Sobre nosotros</Link>
              </Button>
            </div>
          </section>
        </div>
        <section className="container space-y-8 py-8">
          <header className="prose md:text-center">
            <h2>Próximas salidas</h2>
            <p>
              Nuestros guías expertos te acompañarán en estas emocionantes
              aventuras, brindándote seguridad y experiencias inolvidables.
            </p>
          </header>
          <div>
            <div className="mx-auto grid max-w-4xl grid-cols-[repeat(auto-fit,minmax(25ch,1fr))] grid-rows-3 gap-x-4 overflow-y-hidden [grid-auto-rows:0] sm:grid-rows-1">
              {upcomingSalidas.map((salida, i) => (
                <SalidaCard className="mb-4" key={i} {...salida} />
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg" className="max-md:w-full">
                <Link href="/salidas">Ver todas las salidas</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
