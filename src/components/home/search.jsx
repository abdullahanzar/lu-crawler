"use client";
import React, { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = () => {
    router.push(`/search-result?search=${search}`);
  };
  return (
    <div className="sm:min-w-full min-w-[90%]">
      <PlaceholdersAndVanishInput
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onSubmit={handleSearch}
        placeholders={[
          "BCA LU Question Papers",
          "BCA LU Midsem Papers",
          "B.Tech LU Question Papers",
          "Midsem LU Notes",
          "B.Com Question Papers",
          "Engineering Mathematics - 1 Question Papers",
          "Professional Communication Notes",
          "MCA LU Question Papers",
          "BCA LU Semester 3 Notes",
          "Engineering Mathematics - 2 Question Papers",
          "Business Economics Notes and Question Papers",
          "You search it, we find it.",
        ]}
      />
    </div>
  );
}
