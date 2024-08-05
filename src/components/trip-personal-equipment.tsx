import { micromark } from "micromark";

import { Trip } from "@/lib/trips";

export default function TripPersonalEquipment({ personalEquipment }: Trip) {
  return (
    <section className="prose">
      <h2>Equipo Personal</h2>

      <ul>
        {personalEquipment.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {personalEquipment.footer && (
        <div
          dangerouslySetInnerHTML={{
            __html: micromark(personalEquipment.footer),
          }}
        />
      )}
    </section>
  );
}
