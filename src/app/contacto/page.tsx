import { Metadata } from "next";

import ContactForm from "@/components/contact-form";
import SocialIcons from "@/components/social-icons";
import { Separator } from "@/components/ui/separator";
import { formatPhoneNumber, getWhatsAppLink } from "@/lib/whatsapp";

const title = "Contactanos";
const description =
  "Puedes encontrarnos en Facebook e Instagram para ver las últimas novedades. También puedes comunicarte con nosotros mediante WhatsApp.";
const url = "/contacto";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url },
};

export default function Contacto() {
  return (
    <main className="container max-w-prose space-y-8 py-8">
      <header className="prose">
        <h1>{title}</h1>
        <p>
          Puedes comunicarte con nosotros mediante WhatsApp (
          <a href={getWhatsAppLink(+process.env.NEXT_PUBLIC_PHONE).toString()}>
            {formatPhoneNumber(+process.env.NEXT_PUBLIC_PHONE, 2, 1, 2)}
          </a>
          ), o el formulario que encontrarás a continuación. También puedes
          encontrarnos en Instagram y Facebook.
        </p>
        <SocialIcons />
        <p>
          Nos comprometemos a responder tu mensaje lo antes posible, para
          brindarte la información y el apoyo que necesites.
        </p>
      </header>

      <Separator />

      <section className="prose">
        <h2>Formulario</h2>
        <p>
          Al enviar el formulario serás redirijido a WhatsApp. En caso de tener
          inconvenientes, puedes comunicarte mediante los medios detallados
          arriba.
        </p>
        <ContactForm />
      </section>
    </main>
  );
}
