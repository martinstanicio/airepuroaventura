import { Trip } from "@/lib/trips";
import { shortDate } from "@/lib/utils";

export default function TripDetails({ startDate, endDate, description }: Trip) {
  return (
    <section className="prose">
      <p className="lead mt-0">
        Desde {shortDate.format(new Date(startDate))} hasta{" "}
        {shortDate.format(new Date(endDate))}
      </p>

      {description.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </section>
  );
}
