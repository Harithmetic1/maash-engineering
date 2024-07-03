"use client";
import Link from "next/link";
import React from "react";
import ProfileDetails from "./ProfileDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "@/store/store";

const AdminNavbar = () => {
  const { toggleShowSideBar } = useStore((state) => state);
  return (
    <div className="navbar-container w-full p-5 border-b border-b-admin-secondary">
      <div className="user-details flex justify-between gap-5 items-center w-11/12">
        <div className="desktop-only">
          <Link href="/" className="text-sm">
            Go back to site
          </Link>
        </div>
        <div className="mobile-only hamburger" onClick={toggleShowSideBar}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ProfileDetails />
      </div>
    </div>
  );
};

export default AdminNavbar;
