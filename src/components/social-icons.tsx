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
    color: "#0866FF",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/airepuroaventura/",
    icon: faInstagram,
    color: "#E4405F",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/message/WMZXPI7AYTWNL1/",
    icon: faWhatsapp,
    color: "#25D366",
  },
] as const;

export type Props = React.HTMLAttributes<HTMLDivElement>;

export default function SocialIcons({ className, ...props }: Props) {
  return (
    <div className={cn("flex justify-evenly gap-6", className)} {...props}>
      {social.map(({ label, href, icon, color }, i) => (
        <Button asChild variant="ghost" size="icon" key={i}>
          <a href={href} target="_blank">
            <FontAwesomeIcon
              icon={icon}
              className="text-3xl text-[var(--icon-color)] dark:text-foreground"
              style={{ "--icon-color": color } as React.CSSProperties}
            />
            <span className="sr-only">{label}</span>
          </a>
        </Button>
      ))}
    </div>
  );
}
