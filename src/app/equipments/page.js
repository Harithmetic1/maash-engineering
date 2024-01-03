import EquipmentCard from "@/components/EquipmentCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Equipments = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className="equipments-page-header flex flex-col justify-center items-center w-full h-[48vh] py-14">
        <div className="equipments-page-header-container hidden sm:flex justify-center items-center w-full h-full">
          <div className="search-bar flex w-[90vw] md:w-[40vw] bg-white justify-between items-center">
            <div className="icon-search w-full flex gap-14 justify-center items-center px-5 py-4">
              <div className="search-icon">
                <FontAwesomeIcon width={24} height={24} icon={faSearch} />
              </div>
              <div className="search-input w-full ">
                <input
                  type="text"
                  className="outline-none"
                  placeholder="Find Equipment"
                />
              </div>
            </div>
            <div className="search-button w-32 h-full">
              <button className="bg-black text-white px-5 py-4 w-full h-full">
                Search
              </button>
            </div>
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
              className="outline-none"
            >
              <option value="all">All Categories</option>
              <option value="Caterpillar">Caterpillar</option>
              <option value="Komatsu">Komatsu</option>
              <option value="Hitachi">Hitachi</option>
              <option value="Volvo">Volvo</option>
            </select>
          </div>
          <div className="sort-select text-zinc-800 text-base font-bold">
            <select
              name="sort"
              id="sort"
              defaultValue={"all"}
              className="outline-none"
            >
              <option value="all">Sort by</option>
              <option value="Name">Name</option>
              <option value="Price">Price</option>
            </select>
          </div>
        </div>
        <div className="equipment-card-container w-full gap-6 gap-y-12 row px-5 sm:px-10 pb-24">
          {[...Array(8)].map((_, index) => (
            <EquipmentCard key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Equipments;
