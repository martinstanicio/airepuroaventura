"use client";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@radix-ui/react-label";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "./ui/input";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * @description Updates the search params every time a new character is typed.
   */
  function handleSearch(searchTerm: string) {
    const newParams = new URLSearchParams(searchParams);

    // Update the search param if it exists and has content, otherwise remove it
    if (searchTerm) newParams.set("busqueda", searchTerm);
    else newParams.delete("busqueda");

    replace(`${pathname}?${newParams.toString()}`);
  }

  return (
    <div className="flex items-center gap-4">
      <Label htmlFor="search" className="sr-only">
        Búsqueda y filtros
      </Label>
      <FontAwesomeIcon icon={faSearch} />
      <Input
        type="search"
        id="search"
        placeholder="Travesía..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get("busqueda")?.toString()}
      />
    </div>
  );
}
