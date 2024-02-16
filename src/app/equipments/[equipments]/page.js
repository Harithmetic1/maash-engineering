"use client";
import DownloadSpecs from "@/components/DownloadSpecs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useStore } from "@/store/store";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useEffect, useId, useState } from "react";

const Equipment = ({ params }) => {
  const getEquipmentByID = useStore((state) => state.getEquipmentByID);
  const id = useId();
  const [equipmentDetails, setEquipmentDetails] = useState({});
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["equipment", params.equipments],
    queryFn: async () => {
      const data = await getEquipmentByID(params.equipments);
      // setEquipmentData(data);
      return data;
    },
  });

  const thumbnailImages = () => {
    if (data?.gallery) {
      if (data?.gallery.length >= 3) {
        return [data.gallery[1], data.gallery[2]];
      } else {
        return data.gallery;
      }
    }
  };

  const getEquipmentDetails = () => {
    const equipmentDeets = {};

    Object.keys(data)?.map((details) => {
      if (
        details !== "id" &&
        details !== "name" &&
        details !== "description" &&
        details !== "condition" &&
        details !== "thumbnail" &&
        details !== "gallery" &&
        details !== "createdAt" &&
        details !== "updatedAt" &&
        details !== "rate" &&
        data[details] !== null
      ) {
        if (details === "model") {
          equipmentDeets["Engine Model"] = data[details];
        } else if (details === "engineCapacity") {
          equipmentDeets["Engine Capacity"] = data[details];
        } else if (details === "bucketCapacity") {
          equipmentDeets["Bucket Capacity"] = data[details];
        } else {
          equipmentDeets[details.charAt(0).toUpperCase() + details.slice(1)] =
            data[details];
        }
      }
    });
    setEquipmentDetails(equipmentDeets);
  };

  useEffect(() => {
    if (data) {
      getEquipmentDetails();
    }
  }, [data]);

  const whatsAppNumber = "2347014357004";

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="w-full hidden lg:flex">
        <DownloadSpecs />
      </div>
      {isLoading ? (
        <div className="h-screen">
          <div className="flex justify-center items-center w-full h-full animate-spin">
            <Image src="/loading.svg" alt="loader" width={60} height={60} />
          </div>
        </div>
      ) : (
        <div className="main-content-container flex flex-col lg:flex-row w-full justify-evenly pb-32 items-center gap-10 lg:w-10/12">
          <div className="left lg:pt-10">
            <div className="equipment-model pb-5">
              <h1 className="text-2xl hidden lg:flex sm:text-2xl md:text-4xl text-black font-bold">
                {data?.manufacturer}
              </h1>
            </div>
            <div className="equipment-catalogue-container flex flex-col justify-center items-center gap-2">
              <div className="equipment-catalogue flex justify-center items-center gap-2">
                <div className="main-picture w-[95vw] h-[286px] lg:w-[40.972vw] lg:h-[59.119vh] relative">
                  {data?.thumbnail && (
                    <Image
                      src={data?.thumbnail}
                      alt="CAT equipment"
                      fill="responsive"
                      className="object-cover rounded-tl-xl rounded-bl-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                    />
                  )}
                </div>
                <div className="other-pictures flex flex-col items-center justify-center gap-2 lg:w-[14.931vw] h-fit relative">
                  {thumbnailImages()?.map((image, index) => (
                    <div
                      key={id}
                      className="lg:w-[14.931vw] lg:h-[29.057vh] relative"
                    >
                      {image && (
                        <Image
                          src={image}
                          alt="CAT equipment"
                          fill="responsive"
                          className="object-cover rounded-tr-xl"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                        />
                      )}
                    </div>
                  ))}
                  {/* <div className="lg:w-[14.931vw] lg:h-[29.057vh] relative">
                  <Image
                    src={images[1]}
                    alt="CAT equipment"
                    fill="responsive"
                    className="object-cover rounded-tr-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="lg:w-[14.931vw] lg:h-[29.057vh] relative">
                  <Image
                    src="/equipment_3.png"
                    alt="CAT equipment"
                    fill="responsive"
                    className="object-cover rounded-br-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                  />
                </div> */}
                </div>
              </div>
              <div className="w-[100vw] flex lg:hidden">
                <DownloadSpecs />
              </div>
              <div className="view-all hidden w-full lg:flex items-center justify-end ">
                {data?.gallery && data?.gallery.length > 2 && (
                  <button className="bg-white border border-zinc-700 lg:w-[14.931vw] shadow text-zinc-700 rounded px-4 py-2">
                    View all photos
                  </button>
                )}
              </div>
              <div className="equipment-details px-5 lg:px-0 py-2 lg:py-2 w-full flex flex-col justify-between  items-start gap-4 lg:gap-12">
                <div className="equipment-name-condition">
                  <h1 className="equipment-name text-[21px] font-bold ">
                    {data?.name}
                  </h1>
                  <p className="equipment-condition font-bold">
                    <span className="font-bold mr-2">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    {data.condition}
                  </p>
                </div>
                <div className="equipment-description">
                  <p className="equipment-description-text w-full lg:w-[40.833vw]">
                    {data.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right equipment-price-specification lg:h-[75vh] w-full px-5">
            <div className="equipment-price-container flex flex-col h-full justify-start items-start gap-2 w-full">
              <div className="price w-full flex justify-between lg:justify-start items-center">
                <h1 className="lg:hidden flex justify-center items-baseline text-[27px] font-bold">
                  ₦{data?.rate}
                  <span className="text-xs font-normal">Day</span>
                </h1>
                <button className="bg-neutral-800 py-3 lg:hidden rounded justify-center items-center gap-2.5 inline-flex w-[168px] lg:w-[21.181vw] cursor-pointer">
                  <a
                    href={`https://wa.me/${whatsAppNumber}?text=Hello%20there%2C%20I%20am%20interested%20in%20your%20equipment%20for%20rent`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white cursor-pointer"
                  >
                    Contact Owner
                  </a>
                </button>
              </div>
              <div className="specifications flex flex-col justify-center items-start gap-3">
                <h1 className="lg:flex hidden text-[27px] items-baseline font-bold">
                  ₦{data?.rate}
                  <span className="text-xs font-normal">/Day</span>
                </h1>
                {equipmentDetails &&
                  Object.keys(equipmentDetails).map((detail, index) => (
                    <div key={index} className="specification">
                      <p className="text-zinc-500 text-xs">{detail}</p>
                      <p className="text-black text-base">
                        {equipmentDetails[detail]}
                      </p>
                    </div>
                  ))}
              </div>
              <div className="call-to-action-btn hidden lg:flex pt-7 border-t w-full border-neutral-200">
                <button className="bg-neutral-800 py-3 rounded justify-center items-center gap-2.5 hidden lg:inline-flex w-full lg:w-[21.181vw] cursor-pointer">
                  <a
                    href={`https://wa.me/${whatsAppNumber}?text=Hello%20there%2C%20I%20am%20interested%20in%20your%20equipment%20for%20rent`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white w-full cursor-pointer"
                  >
                    Contact Owner
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Equipment;
