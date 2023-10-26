"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import Link from "next/link";

import { cn } from "@/lib/utils";

import Brand from "./brand";
import SocialIcons from "./social-icons";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

const links = [
  { label: "Inicio", path: "/" },
  { label: "Salidas", path: "/salidas" },
  { label: "Educación", path: "/educacion" },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <HamburgerMenuIcon className="aspect-square h-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center justify-between gap-8">
          <SheetHeader>
            <Brand className="flex-col text-center" />
          </SheetHeader>

          <NavigationMenu className="flex-initial">
            <NavigationMenuList className="flex-col space-x-0 space-y-3">
              {links.map(({ label, path }, i) => (
                <NavigationMenuItem key={i}>
                  <Link href={path} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle(), "text-lg")}
                    >
                      <SheetClose>{label}</SheetClose>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <SheetFooter>
            <SocialIcons />
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {links.map(({ label, path }, i) => (
            <NavigationMenuItem key={i}>
              <Link href={path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
