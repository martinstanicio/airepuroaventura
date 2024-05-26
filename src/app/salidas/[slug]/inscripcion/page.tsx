import Link from "next/link";
import { notFound } from "next/navigation";

import { InscriptionForm } from "@/components/inscription-form";
import { allSalidasSlugs, findSalida, isPastSalida } from "@/lib/salidas";
import { ARS, longDate } from "@/lib/utils";

export const generateStaticParams = () => allSalidasSlugs;

export interface Props {
  params: (typeof allSalidasSlugs)[0];
}

export function generateMetadata({ params }: Props) {
  const { title: salidaTitle, url: salidaUrl } = findSalida(params.slug);

  const title = `Inscripción: ${salidaTitle}`;
  const url = `${salidaUrl}/inscripcion`;

  return {
    title,
    alternates: { canonical: url },
    openGraph: { title, url },
  };
}

export default function InscripcionPage({ params }: Props) {
  const salida = findSalida(params.slug);
  const { title, date, price } = salida;

  if (isPastSalida(salida)) return notFound();
  else
    return (
      <main className="container mx-auto space-y-8 py-8">
        <section className="prose">
          <p className="lead">{title}</p>
          <h1>Inscripción</h1>
          <p>
            Formulario de inscripción para realizar la actividad{" "}
            <Link href={`/${salida.url}`}>{title}</Link>, con fecha de inicio el{" "}
            <strong className="text-primary">
              {longDate.format(new Date(date))}
            </strong>
            .
          </p>
        </section>
        <section className="mx-auto max-w-prose overflow-hidden rounded-sm text-center shadow">
          <p className="bg-logo-yellow p-4 text-xl font-bold">
            {ARS.format(price)}
          </p>
          <p className="bg-secondary p-2">Precio por persona</p>
        </section>
        <section className="prose">
          <h2 className="mt-0">Realizá tu reserva</h2>
          <p>
            ¡Reserva tu lugar ahora para no perderte de esta extraordinaria
            aventura!
          </p>
          <InscriptionForm className="not-prose" salidaTitle={title} />
        </section>
      </main>
    );
}
