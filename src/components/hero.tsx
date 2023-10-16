import Image from "next/image";
import Link from "next/link";

import { title } from "@/lib/metadata";

import { Mountain } from "./brand";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/hero.jpg"
        alt="Montañas de Jujuy"
        fill
        className="object-cover object-center brightness-[.4]"
      />
      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-4 py-16">
        <Mountain className="dark h-24 sm:h-28" />
        <h1 className="max-w-xl text-center text-2xl font-bold text-white [text-wrap:balance] md:text-4xl">
          {title}
        </h1>
        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg">
            <Link href="/salidas">Salidas</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="/educacion">Educación</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
