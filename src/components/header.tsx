"use client";

import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

import Brand from "./brand";
import Navbar from "./navbar";

export default function Header() {
  const { ref, inView } = useInView({
    initialInView: true,
    fallbackInView: false,
  });

  return (
    <>
      <div ref={ref} />
      <header
        className={cn(
          "sticky top-0 z-50 flex items-center justify-between bg-background p-4 transition-colors",
          !inView && "dark",
        )}
      >
        <Brand />
        <Navbar />
      </header>
    </>
  );
}
