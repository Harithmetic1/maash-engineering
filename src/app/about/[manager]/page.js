import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

// import backArrow from "..//public/back-arrow.svg";
import Image from "next/image";

const Manger = () => {
  return (
    <main>
      <Navbar />
      <div className="main-contianer md:px-20">
        <div className="topArrow md:flex hidden w-full pt-5 justify-start items-center">
          <Link href="/about">
            <Image src="/back-arrow.svg" width={21} height={21} alt="arrow" />
          </Link>
        </div>
        <div className="manager-profile-container md:h-[70vh] flex justify-center items-center pb-14">
          <div className="manager-profile w-full md:w-[90vw] flex flex-col md:flex-row justify-center items-center">
            <div className="w-full md:w-fit px-5 bg-black md:bg-white">
              <div className="topArrow flex md:hidden w-full pt-5 justify-start items-center">
                <Link href="/about">
                  <Image
                    src="/arrow-back-white.svg"
                    width={21}
                    height={21}
                    alt="arrow"
                  />
                </Link>
              </div>
              <div className="manager-profile-image w-full md:w-[30.903vw] h-[55.975vh] relative rounded-full overflow-hidden">
                <Image
                  src="/Ibrahim.png"
                  alt="manager"
                  className="w-full object-contain"
                  fill
                />
              </div>
              <div className="user-details text-white flex flex-col md:hidden text-center">
                <h1 className="text-base font-bold">IBRAHIM, AMINU BAGUDU</h1>
                <p className="text-[11px] font-bold pb-10">
                  Chief Executive Officer
                </p>
              </div>
            </div>

            <div className="manager-profile-details px-5 w-full md:w-[50vw] flex flex-col justify-center items-start gap-2 md:ml-10">
              <h1 className="text-2xl md:flex hidden font-bold text-[#363636]">
                IBRAHIM, AMINU BAGUDU
              </h1>
              <p className="text-lg md:flex hidden font-bold text-[#363636] pb-10">
                Chief Executive Officer
              </p>
              <p className="text-[11px] md:text-lg font-medium pt-6 text-[#363636]">
                Ibrahim holds an MSc in Oil & Gas Engineering at the prestigious
                Robert Gordon University Scotland and HND in Mechanical/Marine
                Engineering at St. Lawrence College of Applied Arts &
                Technology, Canada. He joined NNPC in July 1984 as a Graduate
                Trainee under the NNPC Petrochemical PH1 Project. He has more
                than 34 years of oil and gas industry experience covering the
                maintenance of rotating machinery, Gas Development projects,
                strategic planning and business development, Project Management
                and Facility installations in Oil and Gas Operations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Manger;
