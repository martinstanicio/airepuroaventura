import { micromark } from "micromark";

import { NotPendingTrip } from "@/lib/trips";

export default function TripIncludes({ includes }: NotPendingTrip) {
  return (
    <section
      className="prose"
      dangerouslySetInnerHTML={{ __html: micromark(includes) }}
    />
  );
}
