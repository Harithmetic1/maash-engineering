import DownloadSpecs from "@/components/DownloadSpecs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const equipment = () => {
  const whatsAppNumber = "2347014357004";

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <div className="w-full hidden lg:flex">
        <DownloadSpecs />
      </div>
      <div className="main-content-container flex flex-col lg:flex-row w-full justify-evenly pb-32 items-center gap-10 lg:w-10/12">
        <div className="left lg:pt-10">
          <div className="equipment-model pb-5">
            <h1 className="text-2xl hidden lg:flex sm:text-2xl md:text-4xl text-black font-bold">
              CAT
            </h1>
          </div>
          <div className="equipment-catalogue-container flex flex-col justify-center items-center gap-2">
            <div className="equipment-catalogue flex justify-center items-center gap-2">
              <div className="main-picture w-[95vw] h-[286px] lg:w-[40.972vw] lg:h-[59.119vh] relative">
                <Image
                  src="/CAT equipment.png"
                  alt="CAT equipment"
                  fill="responsive"
                  className="object-cover rounded-tl-xl rounded-bl-xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="other-pictures flex flex-col items-center justify-center gap-2 lg:w-[14.931vw] h-fit relative">
                <div className="lg:w-[14.931vw] lg:h-[29.057vh] relative">
                  <Image
                    src="/equipment_2.png"
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
                </div>
              </div>
            </div>
            <div className="w-[100vw] flex lg:hidden">
              <DownloadSpecs />
            </div>
            <div className="view-all hidden w-full lg:flex items-center justify-end ">
              <button className="bg-white border border-zinc-700 lg:w-[14.931vw] shadow text-zinc-700 rounded px-4 py-2">
                View all photos
              </button>
            </div>
            <div className="equipment-details px-5 lg:px-0 py-2 lg:py-2 w-full flex flex-col justify-between  items-start gap-4 lg:gap-12">
              <div className="equipment-name-condition">
                <h1 className="equipment-name text-[21px] font-bold ">
                  Caterpillar Excavator
                </h1>
                <p className="equipment-condition font-bold">
                  <span className="font-bold">
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  Good
                </p>
              </div>
              <div className="equipment-description">
                <p className="equipment-description-text w-full lg:w-[40.833vw]">
                  The Cat® 320D Excavator delivers maximum power and performance
                  in a mini size to help you work in a wide range of
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="right equipment-price-specification lg:h-[85vh] w-full px-5">
          <div className="equipment-price-container flex flex-col h-full justify-start items-start gap-2 w-full">
            <div className="price w-full flex justify-between lg:justify-start items-center">
              <h1 className="text-[27px] font-bold">
                ₦55,000
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
              <div className="availability">
                <p className="text-zinc-500 text-xs">Availability</p>
                <p className="text-green-600 text-base">Ready</p>
              </div>
              <div className="Manufacturer">
                <p className="text-zinc-500 text-xs">Manufacturer</p>
                <p className="text-black text-base">Caterpillar</p>
              </div>
              <div className="Dig Depth">
                <p className="text-zinc-500 text-xs">Dig Depth</p>
                <p className="text-black text-base">182.8 in</p>
              </div>
              <div className="Model No">
                <p className="text-zinc-500 text-xs">Model No</p>
                <p className="text-black text-base">D6H</p>
              </div>
              <div className="Engine Model">
                <p className="text-zinc-500 text-xs">Engine Model</p>
                <p className="text-black text-base">CAT 33066</p>
              </div>
              <div className="Net Power">
                <p className="text-zinc-500 text-xs">Net Power</p>
                <p className="text-black text-base">69.5 HP</p>
              </div>
            </div>
            <div className="call-to-action-btn hidden lg:flex pt-7 border-t w-full border-neutral-200">
              <button className="bg-neutral-800 py-3 rounded justify-center items-center gap-2.5 hidden lg:inline-flex w-full lg:w-[21.181vw] cursor-pointer">
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default equipment;
