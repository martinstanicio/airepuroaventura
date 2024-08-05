import { micromark } from "micromark";

import { Separator } from "@/components/ui/separator";
import { Trip } from "@/lib/trips";

export default function TripIncludes({ includes, notIncludes }: Trip) {
  return (
    <section className="prose">
      <h2>Incluye</h2>

      <ul className="list-['✓'] marker:text-green-600">
        {includes.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {includes.footer && (
        <div dangerouslySetInnerHTML={{ __html: micromark(includes.footer) }} />
      )}

      <Separator />

      <h2>No incluye</h2>

      <ul className="list-['X'] marker:text-destructive">
        {notIncludes.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {notIncludes.footer && (
        <div
          dangerouslySetInnerHTML={{ __html: micromark(notIncludes.footer) }}
        />
      )}
    </section>
  );
}
