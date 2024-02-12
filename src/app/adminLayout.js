import AdminNavbar from "@/components/admin/AdminNavbar";
import SideBar from "@/components/admin/SideBar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex justify-normal items-center">
      <SideBar />
      <div className="w-full h-screen flex flex-col justify-start">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
