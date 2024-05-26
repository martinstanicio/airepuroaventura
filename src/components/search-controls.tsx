"use client";

import { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import FilterBar from "./filter-bar";
import SearchBar from "./search-bar";

export type Props = HTMLAttributes<HTMLDivElement>;

export default function SearchControls({ className, ...props }: Props) {
  return (
    <div className={cn("space-y-4", className)} {...props}>
      <SearchBar />
      <FilterBar />
    </div>
  );
}
