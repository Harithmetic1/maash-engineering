"use client";
import { useStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Link from "next/link";
import ManagerProfile from "./ManagerProfile";

const AboutManagers = () => {
  const { getManagers } = useStore((state) => state);
  const { data, error, isLoading } = useQuery({
    queryKey: ["managers"],
    queryFn: getManagers,
  });
  return (
    <div className="managers-profiles w-full flex flex-col gap-4 lg:flex-row justify-center items-center">
      {
        // Managers Profile
        data?.map((manager, i) => (
          <Link href="/about/[manager]" as="/about/manager" key={i}>
            <ManagerProfile {...manager} key={i} />
          </Link>
        ))
      }
    </div>
  );
};

export default AboutManagers;
