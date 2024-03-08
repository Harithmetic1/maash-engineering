import Link from "next/link";
import React from "react";
import ProfileDetails from "./ProfileDetails";

const AdminNavbar = () => {
  return (
    <div className="navbar-container w-full p-5 border-b border-b-admin-secondary">
      <div className="user-details flex justify-between gap-5 items-center w-11/12">
        <Link href="/" className="text-sm">
          Go back to site
        </Link>
        <ProfileDetails />
      </div>
    </div>
  );
};

export default AdminNavbar;
