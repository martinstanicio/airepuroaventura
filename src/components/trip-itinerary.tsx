import { micromark } from "micromark";

import { NotPendingTrip } from "@/lib/trips";

export default function TripItinerary({ itinerary }: NotPendingTrip) {
  return (
    <section className="prose prose-em:text-primary">
      <h2>Itinerario</h2>

      {itinerary.map(({ title, content }, i) => (
        <div key={i}>
          <h3>{title}</h3>

          <div dangerouslySetInnerHTML={{ __html: micromark(content) }} />
        </div>
      ))}
    </section>
  );
}
