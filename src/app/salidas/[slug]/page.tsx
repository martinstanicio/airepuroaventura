import { Metadata } from "next";
import { notFound } from "next/navigation";

import BookingBox from "@/components/booking-box";
import ContactBox from "@/components/contact-box";
import PastTripBox from "@/components/past-trip-box";
import PriceBox from "@/components/price-box";
import TripAccordion from "@/components/trip-accordion";
import TripHeader from "@/components/trip-header";
import { getAllTrips, getTrip, isUpcomingTrip } from "@/lib/trips";

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

export function generateMetadata({ params }: Props): Metadata {
  const trip = getTrip(params.slug);

  if (!trip || trip.pending) notFound();

  const { title, description, slug, img } = trip;
  const metaDescription = description.split("\n")[0];
  const url = `/salidas/${slug}`;

  return {
    title,
    description: metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: metaDescription,
      url,
      images: img,
    },
  };
}

export default function TripPage({ params }: Props) {
  const trip = getTrip(params.slug);

  if (!trip || trip.pending) notFound();

  return (
    <article className="container py-8 lg:flex lg:items-start lg:justify-center lg:gap-8">
      <div className="w-full max-w-prose space-y-8 max-lg:mx-auto">
        <TripHeader trip={trip} />
        {isUpcomingTrip(trip) && (
          <PriceBox className="lg:hidden" price={trip.price} />
        )}
        <ContactBox trip={trip} />
        <TripAccordion trip={trip} />
        {isUpcomingTrip(trip) ? (
          <>
            <PriceBox className="lg:hidden" price={trip.price} />
            <BookingBox className="lg:hidden" trip={trip} />
          </>
        ) : (
          <PastTripBox className="lg:hidden" />
        )}
      </div>
      <div className="max-w-sm space-y-8 max-lg:hidden lg:sticky lg:top-24">
        {isUpcomingTrip(trip) ? (
          <>
            <PriceBox price={trip.price} />
            <BookingBox trip={trip} />
          </>
        ) : (
          <PastTripBox />
        )}
      </div>
    </article>
  );
}
