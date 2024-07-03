"use client";
import AdminLayout from "@/app/adminLayout";
import InputField from "@/components/admin/EditInputField";
import { useStore } from "@/store/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Edit = ({ params }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { editEquipment, getEquipmentByID } = useStore((state) => state);

  const {
    isLoading,
    isError: isLoadEquipmentError,
    data,
    error: loadEquipmentError,
  } = useQuery({
    queryKey: ["equipment", params.equipment],
    queryFn: async () => {
      const data = await getEquipmentByID(params.equipment);
      return data;
    },
  });

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    queryKey: "editEquipment",
    mutationFn: async (payload) => {
      const editPayload = await editEquipment(data?.id, payload);
      router.push("/admin/products");
      return editPayload;
    },
  });

  const handleSubmitForm = (data) => {
    const formData = new FormData();
    console.log(data);
    Object.keys(data).forEach((key) => {
      if (data[key] == "" || data[key].length === 0) {
        return;
      }
      if (key === "gallery") {
        for (let i = 0; i < data[key].length; i++) {
          formData.append(`gallery`, data[key][i], data[key][i]?.name);
        }
      } else if (key === "thumbnail") {
        formData.append(`thumbnail`, data[key][0], data[key][0]?.name);
      } else {
        formData.append(key, data[key]);
      }
    });
    mutate(formData);
    if (isSuccess) {
      router.push("/admin/products");
    }
    console.log(data);
  };
  return (
    <AdminLayout>
      <div className="flex flex-col justify-center items-center  w-full">
        <form
          className="flex flex-col gap-4 w-full lg:w-2/3 shadow p-4 lg:p-10"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <h1 className="text-2xl font-bold ">Edit Equipment</h1>
          <div className="flex justify-center items-center gap-4">
            <div className="flex flex-col lg:flex-row w-full gap-4">
              <div className="flex flex-col justify-start items-center gap-2 w-full lg:w-2/4">
                <InputField
                  register={register}
                  error={errors.name}
                  name="name"
                  label="Name"
                  value={data?.name}
                />
                <InputField
                  register={register}
                  error={errors.serial}
                  name="serial"
                  label="Serial"
                  value={data?.serial}
                />
                <InputField
                  register={register}
                  error={errors.model}
                  name="model"
                  label="Model"
                  value={data?.model}
                />
                <InputField
                  register={register}
                  error={errors.capacity}
                  name="capacity"
                  label="Capacity"
                  value={data?.capacity}
                />
                <InputField
                  register={register}
                  error={errors.engineCapacity}
                  name="engineCapacity"
                  label="Engine Capacity"
                  required={false}
                  value={data?.engineCapacity}
                />
                <InputField
                  register={register}
                  error={errors.bucketCapacity}
                  name="bucketCapacity"
                  label="Bucket Capacity"
                  required={false}
                  value={data?.bucketCapacity}
                />
                <InputField
                  register={register}
                  error={errors.condition}
                  name="condition"
                  label="Condition"
                  value={data?.condition}
                />
                <InputField
                  register={register}
                  error={errors.description}
                  name="description"
                  label="Description"
                  inputType="textarea"
                  required={false}
                  value={data?.description}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputField
                  register={register}
                  error={errors.manufacturer}
                  name="manufacturer"
                  label="Manufacturer"
                  value={data?.manufacturer}
                />
                <InputField
                  register={register}
                  error={errors.rate}
                  name="rate"
                  label="Rate"
                  value={data?.rate}
                />
                <InputField
                  register={register}
                  error={errors.year}
                  name="year"
                  label="Year"
                  value={data?.year}
                />
                <InputField
                  register={register}
                  error={errors.status}
                  name="status"
                  label="Status"
                  inputType="select"
                  value={data?.status}
                />
                <div className="equipment-thumbnail">
                  <p className="text-md font-bold">Thumbnail</p>
                  {data?.thumbnail && (
                    <Image
                      src={data?.thumbnail}
                      alt="thumbnail"
                      width={200}
                      height={200}
                    />
                  )}
                </div>
                <InputField
                  register={register}
                  name="thumbnail"
                  label="Edit Thumbnail"
                  error={errors.thumbnail}
                  multiple={false}
                  inputType="file"
                />
                <div className="equipment-gallery">
                  <p className="text-md font-bold">Gallery</p>
                  <div className="flex justify-start items-center gap-2">
                    {data?.gallery?.map((image, index) => (
                      <Image
                        key={index}
                        src={image}
                        alt="gallery"
                        width={50}
                        height={50}
                      />
                    ))}
                  </div>
                </div>
                <InputField
                  register={register}
                  name="gallery"
                  label="Edit gallery"
                  error={errors.image}
                  inputType="file"
                  required={false}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" w-full text-admin-primary flex justify-center items-center bg-admin-secondary p-2 rounded-xl"
          >
            Edit Equipment
            {isPending ? (
              <span className="flex justify-center items-center w-10 h-[30] animate-spin text-white">
                <Image
                  src="/loading_white.svg"
                  className="text-white"
                  alt="loader"
                  width={30}
                  height={30}
                />
              </span>
            ) : (
              ""
            )}
          </button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default Edit;
