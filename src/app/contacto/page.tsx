import { Metadata } from "next";

// import { ContactForm } from "@/components/contact-form";
import SocialIcons from "@/components/social-icons";

// import { Separator } from "@/components/ui/separator";

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
    <main className="container space-y-8 py-8">
      <header className="prose">
        <h1>{title}</h1>
        <p>{description}</p>
        <SocialIcons />
        <p>
          Nos comprometemos a responder tu mensaje lo antes posible, para
          brindarte la información y el apoyo que necesitas.
        </p>
      </header>
      {/* <Separator />
      <section className="prose">
        <h2>Formulario</h2>
        <ContactForm />
      </section> */}
    </main>
  );
}
