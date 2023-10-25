import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Brand from "./brand";
import { Button } from "./ui/button";

const social = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100054648900632",
    icon: faFacebookSquare,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/airepuroaventura/",
    icon: faInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/WMZXPI7AYTWNL1/",
    icon: faWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="dark bg-black text-foreground">
      <div className="mx-auto max-w-4xl space-y-12 px-4 py-8">
        <div className="flex flex-col justify-between gap-x-4 gap-y-12 sm:flex-row sm:items-center">
          <Brand className="mx-auto sm:mx-0" />
          <div className="flex justify-evenly gap-6">
            {social.map(({ label, href, icon }, i) => (
              <Button asChild variant="ghost" size="icon" key={i}>
                <a href={href} target="_blank">
                  <FontAwesomeIcon icon={icon} className="text-2xl" />
                  <span className="sr-only">{label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 text-center sm:flex-row">
          <p>Aire Puro Aventura &copy; {new Date().getFullYear()}</p>
          <p>
            Página web diseñada por{" "}
            <a
              href="mailto:staniciomartin@gmail.com"
              target="_blank"
              className="font-bold text-primary hover:underline focus:underline"
            >
              Martín Stanicio
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
