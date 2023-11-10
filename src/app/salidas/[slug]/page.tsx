import Image from "next/image";

import { CheckoutForm } from "@/components/checkout-form";
import DifficultyBadge from "@/components/difficulty-badge";
import { Badge } from "@/components/ui/badge";
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
    <article className="container relative mx-auto grid max-w-6xl grid-cols-1 gap-8 py-8 lg:grid-cols-3">
      <div className="prose lg:col-span-2">
        <header>
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
        </header>
        <main dangerouslySetInnerHTML={{ __html: salida.body.html }} />
      </div>

      <div className="space-y-8 place-self-start lg:sticky lg:top-24">
        <section className="overflow-hidden rounded-sm text-center shadow">
          <p className="bg-primary p-4 text-xl font-bold text-primary-foreground">
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
          <CheckoutForm className="not-prose" />
        </section>
      </div>
    </article>
  );
}
