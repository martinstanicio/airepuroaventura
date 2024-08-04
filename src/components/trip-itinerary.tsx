import { Trip } from "@/lib/trips";

export default function TripItinerary({ itinerary }: Trip) {
  return (
    <section className="prose">
      <h2>Itinerario</h2>

      {itinerary.map(({ title, content }, i) => (
        <div key={i}>
          <h3>{title}</h3>

          {content.map((paragraph, j) => (
            <p key={j}>{paragraph}</p>
          ))}
        </div>
      ))}
    </section>
  );
}
