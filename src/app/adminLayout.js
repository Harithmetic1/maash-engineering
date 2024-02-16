import AdminNavbar from "@/components/admin/AdminNavbar";
import SideBar from "@/components/admin/SideBar";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex justify-normal items-center">
      <SideBar />
      <ToastContainer />
      <div className="w-full h-screen flex flex-col justify-start ">
        <AdminNavbar />
        <div className="h-[95svh] w-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
