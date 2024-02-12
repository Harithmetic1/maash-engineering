import Footer from "@/components/Footer";
import ManagerProfile from "@/components/ManagerProfile";
import Navbar from "@/components/Navbar";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Navbar />
      <div className="about-page-header h-[95svh] w-full flex justify-center items-center">
        <div className="about-page-header-container flex flex-col lg:justify-between justify-evenly items-center h-[50vh]">
          <h2 className="text-2xl sm:text-2xl md:text-4xl text-center font-bold text-white border-b-[6px] w-[50vw] sm:w-[50vh] pb-3">
            ABOUT US
          </h2>
          <h1 className="text-white text-3xl lg:text-[65px] text-center font-bold">
            Maash Engineering
          </h1>
        </div>
      </div>
      <section className="w-full h-fit md:h-[90svh] lg:px-20 px-6 lg:m-auto pt-20 pb-36 flex justify-center items-center bg-zinc-100">
        <div className="about-page-content h-full flex justify-center items-center w-full">
          <div className="about-page-content-text h-full flex flex-col gap-5 md:gap-20 justify-between w-full">
            <div className="top">
              <p className="text-lg md:text-2xl font-semibold text-neutral-800 w-full text-center md:text-left lg:w-[54vw]">
                We are a team of passionate people whose goal is to improve
                everyone&#39;s life through disruptive products. We build great
                products to solve your business problems.
              </p>
            </div>
            <div className="bottom flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
              <div className="about-us-content-pic relative w-[95vw] md:w-[33.2vw] h-64 ">
                <Image
                  src="/Oil-worker.png"
                  alt="oil worker working at an oil rig"
                  fill="responsive"
                  className="object-cover"
                />
              </div>
              <div className="about-us-content-text w-[95vw] md:w-[39vw]">
                <div className="about-us-content-text-header w-full pb-2 flex justify-center md:justify-end items-center">
                  <h4 className="sm:text-lg md:text-xl border-b-neutral-800 border-b-[1px] pb-2 w-fit text-right text-[26px] font-bold text-neutral-800">
                    Our Goal
                  </h4>
                </div>
                <p className="text-lg sm:text-lg md:text-2xl text-center md:text-right text-[32px] font-semibold text-neutral-800">
                  As a business entity, we strive to exceed client expectation
                  in the increasingly challenging Nigerian business environment,
                  while maximizing returns to our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit lg:h-[90svh] px-4 lg:px-20 pt-10 lg:m-auto pb-36 flex justify-center items-start">
        <div className="about-page-content h-full flex flex-col justify-start items-start gap-11 w-full">
          <div className="section-headers flex justify-between items-center w-full">
            <h4 className="text-lg sm:text-lg md:text-2xl border-b-neutral-800 border-b-[1px] pb-2 w-fit text-center text-[26px] font-bold text-neutral-800">
              Our Managers
            </h4>
            <div className="managers-profile-link hidden items-center justify-center gap-2">
              <FontAwesomeIcon icon={faArrowRight} width={16} height={16} />
              <span className="text-black text-sm hidden md:flex font-medium w-fit">
                Managers Profile
              </span>
            </div>
          </div>
          <p className="text-black text-base font-medium">
            Biographies of Maash managers: the people we trust to guide our
            company towards the future.
          </p>
          <div className="managers-profiles w-full flex flex-col gap-4 lg:flex-row justify-between items-center">
            {
              // Managers Profile
              Array.from({ length: 4 }).map((_, i) => (
                <Link href="/about/[manager]" as="/about/manager" key={i}>
                  <ManagerProfile key={i} />
                </Link>
              ))
            }
          </div>
        </div>
      </section>
      <section className="mission-vision-location w-full h-fit lg:h-[90svh] flex justify-center items-start">
        <div className=" w-full h-full flex justify-center items-baseline">
          <div className="mission-vision-location-container w-full  h-full text-sm md:text-base flex flex-col gap-3 py-5 px-4 items-center lg:flex-row justify-evenly lg:items-end">
            <div className="vision w-full md:w-5/12 lg:w-1/3 xl:w-3/12 flex flex-col gap-5 justify-center items-center h-80 bg-white rounded shadow">
              <div className="vision-header flex justify-between items-center">
                <h4 className="text-neutral-800 text-[26px] font-bold pb-[10px] border-b-black border-b">
                  Our Vision
                </h4>
              </div>
              <div className="vision-content">
                <p className="text-neutral-800 w-[239px] text-center">
                  To be your one-stop Shop for Engineering Solution to
                  Construction, Oil & Gas and other Engineering Installations.
                </p>
              </div>
            </div>
            <div className="vision w-full md:w-5/12 lg:w-1/3 xl:w-3/12 flex flex-col gap-5 justify-center items-center h-80 bg-white rounded shadow">
              <div className="vision-header flex justify-between items-center">
                <h4 className="text-neutral-800 text-[26px] font-bold pb-[10px] border-b-black border-b">
                  Our Operation
                </h4>
              </div>
              <div className="vision-content w-[239px]">
                <p className="text-neutral-800 text-left w-[239px]">
                  MAASH Engineering Provides
                </p>
                <ul className="list-disc">
                  <li>Leasing of Construction Equipment Design</li>
                  <li>
                    Installation and Commissioning of oil & Gas Facilities
                  </li>
                  <li>
                    Consultancy to the oil & gas industry as well as other
                    Engineering Sectors
                  </li>
                </ul>
              </div>
            </div>
            <div className="vision w-full md:w-5/12 lg:w-1/3 xl:w-3/12 flex flex-col gap-5 justify-center items-center h-80 bg-white rounded shadow">
              <div className="vision-header flex justify-between items-center">
                <h4 className="text-neutral-800 text-[26px] font-bold pb-[10px] border-b-black border-b">
                  Where to Find Us
                </h4>
              </div>
              <div className="vision-content">
                <p className="text-neutral-800 w-[239px] text-center">
                  Plot No. 5 Nnamdi Azikwe Express Way, Kaduna
                  www.maashengineering.com info@maashengineering.com Hotline:
                  +234(0) 333 53851
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
