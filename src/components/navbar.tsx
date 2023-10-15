"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import Link from "next/link";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const links = [
  { label: "Inicio", path: "/" },
  { label: "Salidas", path: "/salidas" },
  { label: "Educación", path: "/educacion" },
  { label: "Contacto", path: "/contacto" },
];

export default function Navbar() {
  return (
    <nav>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <HamburgerMenuIcon className="aspect-square h-4" />
            <span className="sr-only">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {links.map(({ label, path }, i) => (
            <DropdownMenuItem key={i}>
              <Link href={path}>{label}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

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
    </nav>
  );
}
