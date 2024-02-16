"use client";
import AdminLayout from "@/app/adminLayout";
import EquipmentRow from "@/components/admin/EquipmentRow";
import SideBar from "@/components/admin/SideBar";
import { useStore } from "@/store/store";
import { faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = () => {
  const { getEquipments } = useStore((state) => state);
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["equipments"],
    queryFn: getEquipments,
    // placeholderData: [],
  });

  const handleFetchProducts = () => {
    if (isPending) {
      return (
        <div className="flex justify-center items-center w-full h-full animate-spin py-11">
          <Image src="/loading.svg" alt="loader" width={60} height={60} />
        </div>
      );
    } else if (isError) {
      return (
        <div className="flex justify-center items-center w-full h-full py-11">
          <p className="text-lg font-bold text-[#363636]">{error.message}</p>
        </div>
      );
    } else if (data.length > 0) {
      return data?.map((equipment, index) => (
        <EquipmentRow {...equipment} index={index} key={equipment?.id} />
      ));
    } else if (data.length === 0) {
      return (
        <div className="flex justify-center items-center w-full h-full py-11">
          <p className="text-lg font-bold text-[#363636]">
            No featured equipment available
          </p>
        </div>
      );
    }
  };

  return (
    <AdminLayout>
      <div className="products-container h-full flex flex-col justify-center items-center ">
        <div className="products h-[70vh] w-11/12">
          <div className="search-bar flex justify-center items-center gap-2 w-[39.792vw] bg-admin-primary rounded-3xl p-3 px-10 text-admin-secondary">
            <FontAwesomeIcon icon={faSearch} width={24} height={24} />
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full"
              placeholder="Search"
            />
          </div>
          <div className="flex justify-end items-center">
            <Link
              href={"/admin/add"}
              className="add-product-btn text-admin-primary bg-admin-secondary py-2 px-4 rounded-3xl"
            >
              Add Product
            </Link>
          </div>
          <div className="products-table w-full h-fit mt-10 bg-admin-primary rounded-3xl">
            <table className="w-full h-fit">
              <thead className="w-full h-14 bg-admin-primary rounded-t-3xl">
                <tr className="w-full h-full">
                  <th className="w-fit h-full text-center">S/N</th>
                  <th className="w-fit h-full text-center">Img</th>
                  <th className="w-fit h-full text-center">Serial</th>
                  <th className="w-fit h-full text-center">Product Name</th>
                  <th className="w-fit h-full text-center">Model</th>
                  <th className="w-fit h-full text-center">Rate</th>
                  <th className="w-fit h-full text-center">Year</th>
                  <th className="w-fit h-full text-center">Status</th>
                  <th className="w-fit h-full text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="w-full h-[10vh] overflow-y-auto">
                {handleFetchProducts()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Products;
