"use client";
import AdminLayout from "@/app/adminLayout";
import UserRow from "@/components/admin/UserRow";
import { useStore } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";

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
      return data?.map((user, index) => (
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
            <button className="bg-admin-secondary text-white px-3 py-2 rounded-md">
              Add User
            </button>
          </div>
          <div className="user-table-container mt-10 bg-admin-primary rounded-3xl">
            <table className="w-full h-fit">
              <thead className="w-full h-14 bg-admin-primary rounded-t-3xl">
                <tr>
                  <th className="text-center">S/N</th>
                  <th className="text-center">UserName</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Role</th>
                  <th className="text-center">Last Login</th>
                  <th className="text-center">Action</th>
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
