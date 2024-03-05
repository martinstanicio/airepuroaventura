import Image from "next/image";
import Link from "next/link";

import { CheckoutForm } from "@/components/checkout-form";
import DifficultyBadge from "@/components/difficulty-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allSalidasSlugs, findSalida } from "@/lib/salidas";
import { ARS, longDate } from "@/lib/utils";

export const generateStaticParams = () => allSalidasSlugs;

export interface Props {
  params: (typeof allSalidasSlugs)[0];
}

export function generateMetadata({ params }: Props) {
  const { title, url } = findSalida(params.slug);

  return {
    title,
    alternates: { canonical: url },
    openGraph: { title, url },
  };
}

export default function SalidaPage({ params }: Props) {
  const { title, date, price, img, difficulty, tags, ...salida } = findSalida(
    params.slug,
  );

  return (
    <article className="container relative mx-auto flex gap-12 py-8 max-lg:flex-col lg:items-start lg:justify-center">
      <div className="space-y-8">
        <header className="prose prose-a:no-underline">
          <p className="lead mt-0">{longDate.format(new Date(date))}</p>
          <h1>{title}</h1>
          <div className="relative flex flex-wrap gap-2">
            <DifficultyBadge difficulty={difficulty} />
            {tags.map((tag, i) => (
              <Badge key={i} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="aspect-[4/3] w-full">
            <Image
              src={img}
              alt={title}
              fill
              className="!static rounded-md object-cover object-center"
            />
          </div>
          <Button className="w-full lg:hidden" asChild>
            <Link href="#checkout">¡Realizá tu reserva!</Link>
          </Button>
        </header>
        <main
          className="prose"
          dangerouslySetInnerHTML={{ __html: salida.body.html }}
        />
      </div>

      <div
        className="scroll-mt-24 space-y-8 lg:sticky lg:top-24 lg:max-w-sm"
        id="checkout"
      >
        <section className="mx-auto max-w-prose overflow-hidden rounded-sm text-center shadow">
          <p className="bg-logo-yellow p-4 text-xl font-bold">
            {ARS.format(price)}
          </p>
          <p className="bg-secondary p-2">Precio por persona</p>
        </section>

        <section className="prose rounded-sm bg-secondary p-4 shadow">
          <h2 className="mt-0">Realizá tu reserva</h2>
          <p>
            ¡Reserva tu lugar ahora para no perderte de esta extraordinaria
            aventura!
          </p>
          <CheckoutForm className="not-prose" salidaTitle={title} />
        </section>
      </div>
    </article>
  );
}
