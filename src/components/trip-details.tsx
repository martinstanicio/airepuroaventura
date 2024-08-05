import { micromark } from "micromark";

import { Trip } from "@/lib/trips";
import { shortDate } from "@/lib/utils";

export default function TripDetails({ startDate, endDate, description }: Trip) {
  return (
    <section className="prose prose-em:text-primary">
      <p className="lead mt-0">
        Desde {shortDate.format(new Date(startDate))} hasta{" "}
        {shortDate.format(new Date(endDate))}
      </p>

      <div dangerouslySetInnerHTML={{ __html: micromark(description) }} />
    </section>
  );
}
