import { micromark } from "micromark";

import { NotPendingTrip } from "@/lib/trips";

export default function TripPersonalEquipment({
  personalEquipment,
}: NotPendingTrip) {
  return (
    <section
      className="prose"
      dangerouslySetInnerHTML={{
        __html: micromark(personalEquipment),
      }}
    />
  );
}
