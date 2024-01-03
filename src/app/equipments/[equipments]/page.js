import DownloadSpecs from "@/components/DownloadSpecs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import React from "react";

const equipment = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <DownloadSpecs />
      <div className="main-content-container flex justify-center items-center lg:w-10/12">
        <div className="left pt-10">
          <div className="equipment-model pb-5">
            <h1 className="text-2xl sm:text-2xl md:text-4xl text-black font-bold">
              CAT
            </h1>
          </div>
          <div className="equipment-catalogue flex justify-center items-center gap-2">
            <div className="main-picture lg:w-[40.972vw] lg:h-[59.119vh] relative">
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default equipment;
