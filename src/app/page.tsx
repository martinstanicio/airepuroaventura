import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";
import UpcomingTrips from "@/components/upcoming-trips";
import { getUpcomingTrips } from "@/lib/trips";

export default function Home() {
  const upcomingTrips = getUpcomingTrips();

  return (
    <>
      <main>
        <Hero />
        <Separator />
        <AboutUs />

        {upcomingTrips.length > 0 && (
          <>
            <Separator />
            <UpcomingTrips />
          </>
        )}

        <Separator />
        <ContactUs />
      </main>
    </>
  );
}
