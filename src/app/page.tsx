import AboutUs from "@/components/about-us";
import ContactUs from "@/components/contact-us";
import Hero from "@/components/hero";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Separator />
        <AboutUs />
        <Separator />
        <ContactUs />
      </main>
    </>
  );
}
