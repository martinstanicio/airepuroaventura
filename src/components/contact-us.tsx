import Link from "next/link";

import { Button } from "./ui/button";

export default function ContactUs() {
  return (
    <section className="container max-w-4xl space-y-4 py-16 md:text-center">
      <div className="prose mx-auto">
        <h2>Contactanos</h2>
        <p>
          Ponte en contacto con nuestros <strong>guías expertos</strong>,
          quienes te brindaran la información que necesites. Nos comprometemos a
          responder lo antes posible.
        </p>
      </div>
      <Button asChild className="max-md:w-full">
        <Link href="/contacto">Contacto</Link>
      </Button>
    </section>
  );
}
