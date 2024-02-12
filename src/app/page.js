"use client";

import EquipmentCard from "@/components/EquipmentCard";
import Footer from "@/components/Footer";
import HomeCarousel from "@/components/HomeCarousel";
import Navbar from "@/components/Navbar";
import { useStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const getEquipments = useStore((state) => state.getEquipments);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["equipments"],
    queryFn: getEquipments,
    // placeholderData: [],
  });

  const handleFetchFeaturedEquipments = () => {
    console.log(`data: ${data && data[0]}`);
    if (isPending) {
      return (
        <div className="flex justify-center items-center w-full h-full animate-spin py-11">
          <Image src="/loading.svg" alt="loader" width={60} height={60} />
        </div>
      );
    } else if (isError) {
      return (
        <div className="flex justify-center items-center w-full h-full py-11">
          <p className="text-lg font-bold text-[#363636]">{error.message}</p>
        </div>
      );
    } else if (data.length > 0) {
      return (
        <div className="featured-equipment-cards  py-11 gap-5 md:justify-between items-center">
          {data?.map((equipment) => (
            <div key={equipment?.id}>
              <EquipmentCard {...equipment} />
            </div>
          ))}
        </div>
      );
    } else if (data.length === 0) {
      return (
        <div className="flex justify-center items-center w-full h-full py-11">
          <p className="text-lg font-bold text-[#363636]">
            No featured equipment available
          </p>
        </div>
      );
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="header">
        <Navbar />
        <HomeCarousel />
      </section>
      <section className="flex flex-col items-center justify-center w-full h-full">
        <div className="section-container mt-14 w-[90vw] mb-40">
          <div className="section-header">
            <h3 className="text-lg font-bold text-start pb-2 text-[#363636]">
              Equipments
            </h3>
            <h1 className="text-4xl font-bold text-[#363636]">
              BROWSE OUR EQUIPMENT, ON THE FLY
            </h1>
          </div>
          <div className="featured-equipments">
            <p className="text-neutral-700 pt-6 text-lg font-bold">
              Featured Equipment
            </p>
            <div className="border-2 w-[177px] border-black"></div>
          </div>
          {handleFetchFeaturedEquipments()}
          <div className="featured-equipments w-[90vw]">
            <Link
              href="/equipments"
              className="bg-neutral-800 text-white py-3 px-9 rounded w-40"
            >
              Browse Equipments
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
