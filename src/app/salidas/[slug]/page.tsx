import { notFound } from "next/navigation";

import BookingBox from "@/components/booking-box";
import ContactBox from "@/components/contact-box";
import PriceBox from "@/components/price-box";
import TripAccordion from "@/components/trip-accordion";
import TripHeader from "@/components/trip-header";
import { getAllTrips, getTrip } from "@/lib/trips";

export function generateStaticParams() {
  const allTrips = getAllTrips();
  const slugs = allTrips.map((trip) => {
    return { slug: trip.slug };
  });

  return slugs;
}

export interface Props {
  params: ReturnType<typeof generateStaticParams>[number];
}

export function generateMetadata({ params }: Props) {
  const trip = getTrip(params.slug);

  if (!trip) notFound();

  const { title, slug } = trip;
  const url = `/salidas/${slug}`;

  return {
    title,
    alternates: { canonical: url },
    openGraph: { title, url },
  };
}

export default function TripPage({ params }: Props) {
  const trip = getTrip(params.slug);

  if (!trip) notFound();

  return (
    <article className="container py-8 lg:flex lg:items-start lg:justify-center lg:gap-8">
      <div className="max-w-prose space-y-8">
        <TripHeader trip={trip} />
        <PriceBox className="lg:hidden" price={trip.price} />
        <BookingBox className="lg:hidden" trip={trip} />
        <TripAccordion trip={trip} />
        <ContactBox trip={trip} />
      </div>
      <div className="max-w-sm space-y-8 max-lg:hidden lg:sticky lg:top-24">
        <PriceBox price={trip.price} />
        <BookingBox trip={trip} />
      </div>
    </article>
  );
}
