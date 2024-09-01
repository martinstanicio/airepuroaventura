import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

import { Trip } from "@/lib/trips";

import TripDetails from "./trip-details";
import TripIncludes from "./trip-includes";
import TripItinerary from "./trip-itinerary";
import TripPersonalEquipment from "./trip-personal-equipment";

type AccordionEntry = {
  id: string;
  label: string;
  content: React.ReactNode;
};

export default function TripAccordion({ trip }: { trip: Trip }) {
  const content: AccordionEntry[] = [
    {
      id: "details",
      label: "Detalles",
      content: <TripDetails {...trip} />,
    },
    {
      id: "itinerary",
      label: "¿Qué actividades vamos a realizar?",
      content: <TripItinerary {...trip} />,
    },
  ];

  if (trip.personalEquipment) {
    content.push({
      id: "personal-equipment",
      label: "¿Qué tengo que llevar?",
      content: <TripPersonalEquipment {...trip} />,
    });
  }

  if (trip.includes) {
    content.push({
      id: "includes",
      label: "¿Qué está incluido en el viaje?",
      content: <TripIncludes {...trip} />,
    });
  }

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="details"
      className="w-full max-w-prose space-y-4"
    >
      {content.map(({ id, label, content }, i) => (
        <AccordionItem
          key={i}
          value={id}
          className="overflow-hidden rounded-md border bg-secondary text-secondary-foreground"
        >
          <AccordionTrigger className="w-full bg-secondary p-4 font-bold text-secondary-foreground transition-all hover:brightness-95 focus:brightness-95 data-[state='open']:bg-primary data-[state='open']:text-primary-foreground">
            {label}
          </AccordionTrigger>
          <AccordionContent className="p-4" asChild>
            {content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
