"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface SearchComponentProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export function SearchComponent({
  onSearch,
  placeholder = "Search requirements...",
}: SearchComponentProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="relative w-full md:w-[300px]">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="w-full pl-8"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
}
