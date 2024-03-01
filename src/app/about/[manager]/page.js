"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { useStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";

// import backArrow from "..//public/back-arrow.svg";
import Image from "next/image";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Manger = ({ params }) => {
  const { getManagerByID } = useStore((state) => state);

  const { data, error, isLoading } = useQuery({
    queryKey: ["manager", params.manager],
    queryFn: async () => {
      const data = await getManagerByID(params.manager);
      return data;
    },
  });

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
              <div className="manager-profile-image w-full md:w-[30.903vw] h-[55.975vh] relative rounded-lg overflow-hidden">
                {
                  // Profile Image
                  data?.profileImage ? (
                    <Image
                      src={data?.profileImage}
                      alt="manager"
                      className="w-full object-contain"
                      fill
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faUser}
                      className="rounded-[50%] p-6 border-black text-6xl border-2"
                    />
                  )
                }
              </div>
              <div className="user-details text-white flex flex-col md:hidden text-center">
                <h1 className="text-base font-bold">
                  {data?.firstName}, {data?.lastName}
                </h1>
                <p className="text-[11px] font-bold pb-10">{data?.jobTitle}</p>
              </div>
            </div>

            <div className="manager-profile-details px-5 w-full md:w-[50vw] flex flex-col justify-center items-start gap-2 md:ml-10">
              <h1 className="text-2xl md:flex hidden font-bold text-[#363636]">
                {data?.firstName}, {data?.lastName}
              </h1>
              <p className="text-lg md:flex hidden font-bold text-[#363636] pb-10">
                {data?.jobTitle}
              </p>
              <p className="text-[11px] md:text-lg font-medium pt-6 text-[#363636]">
                {data?.bio}
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
