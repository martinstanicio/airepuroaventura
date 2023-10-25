import Image from "next/image";

import DifficultyBadge from "@/components/difficulty-badge";
import { Badge } from "@/components/ui/badge";
import { allSalidasSlugs, findSalida } from "@/lib/salidas";
import { longDate } from "@/lib/utils";

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
    <article className="container prose py-8">
      <header>
        <p className="lead">{longDate.format(new Date(date))}</p>
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
      <section>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          nesciunt ipsa ullam dignissimos excepturi rem doloremque tenetur,
          similique perspiciatis modi quod quisquam assumenda odit quaerat quae
          aut et. Nisi, aliquam!
        </p>
        <hr />
      </section>
      <main dangerouslySetInnerHTML={{ __html: salida.body.html }} />
    </article>
  );
}
