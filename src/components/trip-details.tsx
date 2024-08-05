import { micromark } from "micromark";

import { Trip } from "@/lib/trips";
import { shortDate } from "@/lib/utils";

export default function TripDetails({ startDate, endDate, description }: Trip) {
  const descriptionHtml = description.reduce((accumulator, paragraph) => {
    const parsed = micromark(paragraph);
    accumulator += parsed;
    return accumulator;
  }, "");

  return (
    <section className="prose">
      <p className="lead mt-0">
        Desde {shortDate.format(new Date(startDate))} hasta{" "}
        {shortDate.format(new Date(endDate))}
      </p>

      <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
    </section>
  );
}
