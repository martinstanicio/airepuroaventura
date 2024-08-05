"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function PastTripBox({ className, ...props }: Props) {
  return (
    <section
      className={cn("overflow-hidden rounded-md border", className)}
      {...props}
    >
      <p className="bg-destructive p-4 text-center text-xl font-bold text-destructive-foreground">
        ¡Salida ya realizada!
      </p>
      <div className="prose max-w-full bg-secondary p-4 text-secondary-foreground">
        <p>
          Esta es una salidas turistica que <b>realizamos en el pasado</b>, está
          en nuestra plataforma únicamente a <b>modo informativo</b> para
          aquellos que quieran ver qué actividades solemos realizar.
        </p>

        <Button
          className="not-prose w-full"
          variant="destructive"
          size="lg"
          asChild
        >
          <Link href="/salidas">Ver todas las salidas</Link>
        </Button>
      </div>
    </section>
  );
}
