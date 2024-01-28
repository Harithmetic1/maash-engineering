"use client";
import EquipmentCard from "@/components/EquipmentCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import {
  getEquipmentByParam,
  getEquipments,
  searchEquipments,
} from "@/api/api";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchResults from "@/components/SearchResults";

const Equipments = () => {
  const [equipments, setEquipments] = useState([]);
  const [sortedEquipmentsTerm, setSortedEquipmentsTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [allManufacturers, setAllManufacturers] = useState([]);
  const [filteredEquipmentTerm, setFilteredEquipmentTerm] = useState("");
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["equipments"],
    queryFn: getEquipments,
  });

  const handleGetManufacturers = () => {
    const manufacturers = [];
    data?.map((equipment) => {
      if (!manufacturers.includes(equipment.manufacturer)) {
        manufacturers.push(equipment.manufacturer);
      }
    });
    setAllManufacturers(manufacturers);
    return manufacturers;
  };

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

  const { isLoading: isFilteredLoading, data: filteredData } = useQuery({
    queryKey: ["filteredEquipments", filteredEquipmentTerm],
    queryFn: async () => {
      const data = await getEquipmentByParam(
        "manufacturer",
        filteredEquipmentTerm
      );
      // console.log(data);
      return data;
    },
    enabled: filteredEquipmentTerm.length > 0,
  });

  const handleSortEquipments = (sortType, dataToSort) => {
    console.log(sortType);
    if (data) {
      if (sortType === "name") {
        const sortedEquipments = dataToSort.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
        setEquipments(sortedEquipments);
        setSorted(true);
      } else if (sortType === "price") {
        const sortedEquipments = dataToSort.sort((a, b) => {
          return a.rate - b.rate;
        });
        setEquipments(sortedEquipments);
        setSorted(true);
      } else if (sortType === "all") {
        setEquipments(dataToSort);
        setSorted(false);
      } else {
        return; // Do nothing
      }
    }
  };

  useEffect(() => {
    handleGetManufacturers();
    if (filteredEquipmentTerm.length === 0) {
      setEquipments(data);
      handleSortEquipments(sortedEquipmentsTerm, data);
    } else {
      setEquipments(filteredData);
      handleSortEquipments(sortedEquipmentsTerm, filteredData);
    }
  }, [filteredData, sortedEquipmentsTerm]);

  // State renderers
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
      console.log(`The searched data is ${searchedData.result}`);
      return <SearchResults data={searchedData.result} />;
    }
  };

  const handleFetchFeaturedEquipments = () => {
    if (isPending) {
      return (
        <div className="flex justify-center items-center w-full h-full animate-spin">
          <Image src="/loading.svg" alt="loader" width={60} height={60} />
        </div>
      );
    }

    if (isError) {
      return (
        <div className="flex justify-center items-center w-full h-full">
          <p className="text-lg font-bold text-[#363636]">{error.message}</p>
        </div>
      );
    }

    if (data) {
      return (
        <div className="featured-equipment-cards  py-11 gap-5 md:justify-between items-center">
          {equipments?.map((equipment) => (
            <div key={equipment.id}>
              <EquipmentCard {...equipment} />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="equipments-page-header flex flex-col justify-center items-center w-full h-[48vh] py-14">
        <div className="equipments-page-header-container hidden sm:flex justify-center items-center w-full h-full">
          <div className="search-bar flex w-[90vw] md:w-[40vw] relative bg-white justify-between items-center">
            <div className="icon-search w-full flex gap-14 justify-center items-center px-5 py-4">
              <div className="search-icon">
                <FontAwesomeIcon width={24} height={24} icon={faSearch} />
              </div>
              <div className="search-input w-full ">
                <input
                  type="text"
                  className="outline-none w-full"
                  placeholder="Find Equipment"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="search-button w-32 h-full">
              <button className="bg-black text-white px-5 py-4 w-full h-full">
                Search
              </button>
            </div>
            {handleSearchedEquipments()}
          </div>
        </div>
        <div className="equipments-page-header-text w-full text-center flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-white">
            TOOLS AND EQUIPMENT, ON THE FLY
          </h1>
        </div>
        <div className="w-[22%] mt-3 h-1.5 bg-white" />
      </div>
      <div className="equipments-page-content w-full flex flex-col justify-center items-center">
        <div className="helpers w-full px-10 pt-24 pb-3 flex justify-between items-center">
          <div className="categories-select text-zinc-800 text-base font-bold">
            <select
              name="categories"
              id="categories"
              defaultValue={"all"}
              onChange={(e) => {
                if (e.target.value === "all") {
                  setFilteredEquipmentTerm("");
                } else {
                  setFilteredEquipmentTerm(e.target.value);
                }
              }}
              className="outline-none"
            >
              <option value="all">All Categories</option>
              {allManufacturers?.map((manufacturer, index) => (
                <option key={index} value={manufacturer}>
                  {manufacturer}
                </option>
              ))}
              {/* <option value="Caterpillar">Caterpillar</option>
              <option value="Komatsu">Komatsu</option>
              <option value="Hitachi">Hitachi</option>
              <option value="Volvo">Volvo</option> */}
            </select>
          </div>
          <div className="sort-select text-zinc-800 text-base font-bold">
            <select
              name="sort"
              id="sort"
              defaultValue={"all"}
              className="outline-none"
              onChange={(e) =>
                setSortedEquipmentsTerm(e.target.value.toLowerCase())
              }
            >
              <option value="all">Sort by</option>
              <option value="Name">Name</option>
              <option value="Price">Price</option>
            </select>
          </div>
        </div>
        <div className="equipment-card-container w-full gap-6 gap-y-12 row px-5 sm:px-10 pb-24">
          {handleFetchFeaturedEquipments()}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Equipments;
