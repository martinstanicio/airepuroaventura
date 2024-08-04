"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@radix-ui/react-label";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "./ui/input";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);

    // update the search param if it exists and has content, otherwise remove it
    if (search) newParams.set("busqueda", search);
    else newParams.delete("busqueda");

    // if user not in "salidas", use push to save the change to history
    // otherwise, use replace to avoid extra history entries
    if (pathname !== "/salidas") {
      push(`/salidas/?${newParams.toString()}`);
    } else {
      replace(`/salidas/?${newParams.toString()}`);
    }
  });

  return (
    <div className="relative flex items-center gap-4 text-foreground">
      <Label htmlFor="search" className="sr-only">
        Barra de búsqueda
      </Label>
      <FontAwesomeIcon
        icon={faSearch}
        className="pointer-events-none absolute left-3"
      />
      <Input
        type="search"
        id="search"
        placeholder="Trekking..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
