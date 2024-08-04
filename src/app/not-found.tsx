import Link from "next/link";

import NotFoundImage from "@/components/not-found-image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container flex items-center justify-center">
      <div className="prose py-8 text-center">
        <NotFoundImage className="mx-auto mb-8 max-w-xs" />
        <h1>Error 404</h1>
        <p>
          La página a la que estás intentando acceder no existe o no está
          disponible.
        </p>
        <Button size="lg" className="not-prose" asChild>
          <Link href="/">Volver a inicio</Link>
        </Button>
      </div>
    </main>
  );
}
