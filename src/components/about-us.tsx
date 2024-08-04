import Image from "next/image";

import aboutUs from "@/assets/about-us.jpg";

export default function AboutUs() {
  return (
    <section className="container grid max-w-4xl gap-8 py-16 md:grid-cols-2">
      <div className="relative h-full max-md:aspect-[4/3]">
        <Image
          src={aboutUs}
          alt="Todos los participantes de una salida de cicloturismo al llegar a destino"
          fill
          placeholder="blur"
          className="overflow-hidden rounded-md bg-secondary object-cover object-center shadow"
        />
      </div>
      <div className="prose prose-a:no-underline">
        <h2>Quiénes somos</h2>
        <p>
          Nosotros somos{" "}
          <span className="font-bold text-primary">Aire Puro</span>, y nuestra
          pasión es conectar a las personas con la belleza natural y la aventura
          que ofrece <strong>Argentina</strong>.
        </p>
        <p>
          Con nuestros <strong>guías experimentados</strong>, estamos
          comprometidos a brindar a nuestros viajeros{" "}
          <strong>aventuras inolvidables</strong>.
        </p>
      </div>
    </section>
  );
}
