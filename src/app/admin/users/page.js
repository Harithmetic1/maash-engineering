"use client";
import AdminLayout from "@/app/adminLayout";
import UserRow from "@/components/admin/UserRow";
import { useStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import AddUserButton from "@/components/admin/AddUserButton";

const AdminUser = () => {
  const { getUsers } = useStore((state) => state);

  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const handleFetchUsers = () => {
    if (isLoading) {
      return (
        <tr className="flex justify-center items-center w-full h-full animate-spin py-11">
          <td>
            <Image src="/loading.svg" alt="loader" width={60} height={60} />
          </td>
        </tr>
      );
    } else if (error) {
      return (
        <tr className="flex justify-center items-center w-full h-full py-11">
          <td>
            <p className="text-lg font-bold text-[#363636]">{error.message}</p>
          </td>
        </tr>
      );
    } else if (data.length > 0) {
      return data
        ?.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((user, index) => (
          <UserRow {...user} index={index} key={user?.id} />
        ));
    } else if (data.length === 0) {
      return (
        <tr className="flex justify-center items-center w-full h-full py-11">
          <td>
            <p className="text-lg font-bold text-[#363636]">
              No users available
            </p>
          </td>
        </tr>
      );
    }
  };

  return (
    <AdminLayout>
      <div className="w-full flex justify-center items-center h-full">
        <div className="w-11/12 h-[70svh]">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-admin-secondary">Users</h1>
            <AddUserButton />
          </div>
          <div className="user-table-container mt-10 w-[100svw] lg:max-w-[75svw] overflow-x-scroll lg:overflow-hidden bg-admin-primary rounded-3xl">
            <table className="w-[255svw] lg:w-full h-fit overflow-scroll lg:overflow-hidden">
              <thead className="w-full h-14 bg-admin-primary rounded-t-3xl">
                <tr>
                  <th className="text-center w-1/12">S/N</th>
                  <th className="text-center w-2/12">UserName</th>
                  <th className="text-center w-3/12">Email</th>
                  <th className="text-center w-2/12">Role</th>
                  <th className="text-center w-2/12">Last Login</th>
                  <th className="text-center w-4/12">Action</th>
                </tr>
              </thead>
              <tbody>{handleFetchUsers()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUser;
