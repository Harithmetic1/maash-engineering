"use client";
import AdminLayout from "@/app/adminLayout";
import AddManagerButton from "@/components/admin/AddManagerButton";
import AdminManager from "@/components/admin/AdminManager";
import { useStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const AdminManagerPage = () => {
  const { getManagers } = useStore((state) => state);

  const { data, error, isLoading } = useQuery({
    queryKey: ["managers"],
    queryFn: getManagers,
  });

  return (
    <AdminLayout>
      <div className="manager-container">
        <div className="manager-header flex justify-between items-center p-4 w-full">
          <div className="flex justify-start items-center">
            <h1 className="text-2xl font-bold text-admin-secondary">
              Managers
            </h1>
          </div>
          <AddManagerButton />
        </div>
        {data?.length > 0 ? (
          data?.map((manager, index) => (
            <AdminManager {...manager} key={manager?.id} />
          ))
        ) : (
          <div className="flex justify-center items-center w-full h-full py-11">
            <p className="text-lg font-bold text-[#363636]">
              No managers available
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminManagerPage;
