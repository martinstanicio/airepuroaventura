import {
  faFacebookSquare,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { cn } from "@/lib/utils";

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
] as const;

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function SocialIcons({ className, ...props }: Props) {
  return (
    <div className={cn("flex justify-evenly gap-6", className)} {...props}>
      {social.map(({ label, href, icon }, i) => (
        <Button asChild variant="ghost" size="icon" key={i}>
          <a href={href} target="_blank">
            <FontAwesomeIcon icon={icon} className="text-2xl" />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}