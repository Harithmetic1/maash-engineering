"use client";
import AdminNavbar from "@/components/admin/AdminNavbar";
import SideBar from "@/components/admin/SideBar";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

const AdminLayout = ({ children }) => {
  // const { user } = useStore((state) => state);

  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("maashStore")) {
      const user = JSON.parse(localStorage.getItem("maashStore"));
      if (!user) {
        toast.error("Please login to access the admin panel");
        router?.push("/admin");
      }
    }
  }, []);

  return (
    <div className="flex justify-normal">
      <SideBar />
      <ToastContainer />
      <div className="w-full h-screen flex flex-col justify-start ">
        <AdminNavbar />
        <div className="h-[95svh] p-4 w-full overflow-x-hidden overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
