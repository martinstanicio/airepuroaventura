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

      {includes.footer && <p>{includes.footer}</p>}

      <Separator />

      <h2>No incluye</h2>

      <ul className="list-['X'] marker:text-destructive">
        {notIncludes.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {notIncludes.footer && <p>{notIncludes.footer}</p>}
    </section>
  );
}
