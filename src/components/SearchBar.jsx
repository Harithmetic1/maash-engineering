"use client";
import React, { useState } from "react";
import { useStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SearchResults from "@/components/SearchResults";

const SearchBar = () => {
  const { searchEquipments } = useStore((state) => state);

  const [searchTerm, setSearchTerm] = useState("");

  const {
    isLoading: isSearchLoading,
    data: searchedData,
    isError: isSearchError,
    error: searchError,
  } = useQuery({
    queryKey: ["searchedEquipments", searchTerm],
    queryFn: async () => {
      const data = await searchEquipments(searchTerm);
      console.log(data);
      return data;
    },
    enabled: searchTerm.length > 0,
  });

  const handleSearchedEquipments = () => {
    if (isSearchLoading) {
      return (
        <div className="z-10 absolute top-14 left-0 w-[90vw] md:w-[40vw] bg-white rounded-b-lg">
          <div className="flex justify-center items-center w-full h-full animate-spin">
            <Image src="/loading.svg" alt="loader" width={60} height={60} />
          </div>
        </div>
      );
    } else if (isSearchError) {
      return (
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-lg font-bold text-[#363636]">
            {searchError.message}
          </p>
        </div>
      );
    } else if (searchedData?.result) {
      return <SearchResults data={searchedData.result} />;
    }
  };

  return (
    <div className="search-bar flex w-[90vw] md:w-[40vw] relative bg-admin-primary justify-between items-center rounded">
      <div className="icon-search w-full flex gap-14 justify-center items-center px-5 py-4">
        <div className="search-icon">
          <FontAwesomeIcon width={24} height={24} icon={faSearch} />
        </div>
        <div className="search-input w-full">
          <input
            type="text"
            className="outline-none w-full bg-admin-primary"
            placeholder="Find Equipment"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      {/* <div className="search-button w-32 h-full">
        <button className="bg-black text-white px-5 py-4 w-full h-full">
          Search
        </button>
      </div> */}
      {handleSearchedEquipments()}
    </div>
  );
};

export default SearchBar;
