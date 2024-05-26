import Image from "next/image";
import Link from "next/link";

import Tag, { DifficultyTag } from "@/components/tag";
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
  const { title, date, price, img, difficulty, tags, url, ...salida } =
    findSalida(params.slug);

  function SalidaInfo() {
    return (
      <>
        <header className="prose prose-a:no-underline">
          <p className="lead mt-0">{longDate.format(new Date(date))}</p>
          <h1>{title}</h1>
          <div className="relative flex flex-wrap gap-2">
            <DifficultyTag difficulty={difficulty} />
            {tags.map((value, i) => (
              <Tag key={i} value={value} />
            ))}
          </div>
          <div className="relative my-8 aspect-[4/3]">
            <Image
              src={img}
              alt={title}
              fill
              className="m-0 rounded-md object-cover object-center"
            />
          </div>
          <Button className="w-full lg:hidden" asChild>
            <Link href="#inscripcion">¡Realizá tu reserva!</Link>
          </Button>
        </header>
        <main
          className="prose"
          dangerouslySetInnerHTML={{ __html: salida.body.html }}
        />
      </>
    );
  }

  return (
    <article className="container mx-auto py-8">
      {new Date(date) > new Date() ? (
        <div className="relative flex gap-12 max-lg:flex-col lg:items-start lg:justify-center">
          <div className="space-y-8">
            <SalidaInfo />
          </div>
          <div
            className="scroll-mt-24 space-y-8 lg:sticky lg:top-24 lg:max-w-sm"
            id="inscripcion"
          >
            <section className="mx-auto max-w-prose overflow-hidden rounded-sm text-center shadow">
              <p className="bg-logo-yellow p-4 text-xl font-bold">
                {ARS.format(price)}
              </p>
              <p className="bg-secondary p-2">Precio por persona</p>
            </section>
            <section className="prose rounded-sm border-4 border-primary p-6">
              <h2 className="mt-0">Realizá tu reserva</h2>
              <p>
                ¡Reserva tu lugar ahora para no perderte de esta extraordinaria
                aventura!
              </p>
              <Button className="not-prose w-full" asChild>
                <Link href={`/${url}/inscripcion`}>¡Inscribite ya!</Link>
              </Button>
            </section>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {" "}
          <SalidaInfo />
          <div className="prose rounded-lg border-8 border-dashed border-logo-yellow p-4">
            <p>
              <strong>Atención:</strong> esta es una salidas turistica que
              realizamos en el pasado, y está en nuestra plataforma únicamente a
              modo informativo para aquellos que quieran ver qué tipo de
              actividades solemos realizar regularmente.
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
