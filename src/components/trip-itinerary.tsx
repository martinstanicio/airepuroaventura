import { micromark } from "micromark";

import { Trip } from "@/lib/trips";

export default function TripItinerary({ itinerary }: Trip) {
  return (
    <section className="prose">
      <h2>Itinerario</h2>

      {itinerary.map(({ title, content }, i) => {
        const contentHtml = content.reduce((accumulator, paragraph) => {
          const parsed = micromark(paragraph);
          accumulator += parsed;
          return accumulator;
        }, "");

        return (
          <div key={i}>
            <h3>{title}</h3>

            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        );
      })}
    </section>
  );
}
