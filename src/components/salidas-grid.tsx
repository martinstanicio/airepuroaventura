"use client";

import { Salida, sortedSalidas, useFilteredSalidas } from "@/lib/salidas";
import { cn } from "@/lib/utils";

import SalidaCard from "./salida-card";

export type Props = {
  as: keyof HTMLElementTagNameMap;
  gridMode?: "fit" | "fill";
  salidas?: Salida[];
  notInteractive?: boolean;
  className?: string;
};

export default function SalidasGrid({
  as: AsElement,
  gridMode = "fill",
  salidas = sortedSalidas,
  notInteractive = false,
  className,
}: Props) {
  const filteredSalidas = useFilteredSalidas(salidas);

  const salidasList = notInteractive ? salidas : filteredSalidas;

  return (
    <AsElement
      className={cn(
        "grid gap-8",
        gridMode === "fill" && "grid-cols-[repeat(auto-fill,minmax(24ch,1fr))]",
        gridMode === "fit" && "grid-cols-[repeat(auto-fit,minmax(24ch,1fr))]",
        className,
      )}
    >
      {salidasList.map((salida, i) => (
        <SalidaCard key={i} priority={i === 0} {...salida} />
      ))}
    </AsElement>
  );
}
