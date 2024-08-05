"use client";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

import { Trip } from "@/lib/trips";
import { cn } from "@/lib/utils";
import { getWhatsAppLink } from "@/lib/whatsapp";

import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement> & { trip: Trip };

export default function ContactBox({ trip, className, ...props }: Props) {
  const phone = +process.env.NEXT_PUBLIC_PHONE;

  const link = getWhatsAppLink(
    phone,
    `Hola, quiero saber más sobre la salida turística *${trip.title}*`,
  );

  return (
    <section
      className={cn("overflow-hidden rounded-md border", className)}
      {...props}
    >
      <p className="bg-emerald-500 p-4 text-center text-xl font-bold text-primary-foreground">
        Contactanos
      </p>
      <div className="prose max-w-full bg-secondary p-4 text-secondary-foreground">
        <p>¿Tenés alguna duda? ¿Querés saber más sobre el viaje?</p>
        <p>¡No dudes en contactarnos, estamos para ayudarte!</p>

        <Button
          className="not-prose w-full bg-emerald-500 hover:bg-emerald-500/90 focus:bg-emerald-500/90"
          size="lg"
          asChild
        >
          <Link href={link.toString()} className="flex items-center gap-2">
            <FontAwesomeIcon icon={faWhatsapp} className="h-4 w-4" />
            <span>WhatsApp</span>
          </Link>
        </Button>
      </div>
    </section>
  );
}
