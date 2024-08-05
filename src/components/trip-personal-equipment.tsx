import { micromark } from "micromark";

import { Trip } from "@/lib/trips";

export default function TripPersonalEquipment({ personalEquipment }: Trip) {
  return (
    <section
      className="prose"
      dangerouslySetInnerHTML={{
        __html: micromark(personalEquipment),
      }}
    />
  );
}
