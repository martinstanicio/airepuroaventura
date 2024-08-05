import { micromark } from "micromark";

import { Trip } from "@/lib/trips";

export default function TripIncludes({ includes }: Trip) {
  return (
    <section
      className="prose"
      dangerouslySetInnerHTML={{ __html: micromark(includes) }}
    />
  );
}
