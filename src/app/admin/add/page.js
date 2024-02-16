"use client";
import AdminLayout from "@/app/adminLayout";
import InputField from "@/components/admin/InputField";
import { useStore } from "@/store/store";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { addEquipment } = useStore((state) => state);

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    queryKey: "addEquipment",
    mutationFn: (data) => {
      return addEquipment(data);
    },
  });

  const handleSubmitForm = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key === "gallery") {
        for (let i = 0; i < data[key].length; i++) {
          formData.append(`gallery`, data[key][i], data[key][i].name);
        }
      } else if (key === "thumbnail") {
        formData.append(`thumbnail`, data[key][0], data[key][0].name);
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
          className="flex flex-col gap-4 w-2/3 shadow p-10"
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <h1 className="text-2xl font-bold ">Add Equipment</h1>
          <div className="flex justify-center items-center gap-4">
            <div className="flex w-full gap-4">
              <div className="flex flex-col justify-start items-center gap-2 w-2/4">
                <InputField
                  register={register}
                  error={errors.name}
                  name="name"
                  label="Name"
                />
                <InputField
                  register={register}
                  error={errors.serial}
                  name="serial"
                  label="Serial"
                />
                <InputField
                  register={register}
                  error={errors.model}
                  name="model"
                  label="Model"
                />
                <InputField
                  register={register}
                  error={errors.capacity}
                  name="capacity"
                  label="Capacity"
                />
                <InputField
                  register={register}
                  error={errors.engineCapacity}
                  name="engineCapacity"
                  label="Engine Capacity"
                  required={false}
                />
                <InputField
                  register={register}
                  error={errors.bucketCapacity}
                  name="bucketCapacity"
                  label="Bucket Capacity"
                  required={false}
                />
                <InputField
                  register={register}
                  error={errors.condition}
                  name="condition"
                  label="Condition"
                />
                <InputField
                  register={register}
                  error={errors.description}
                  name="description"
                  label="Description"
                  inputType="textarea"
                  required={false}
                />
              </div>
              <div className="flex flex-col gap-2">
                <InputField
                  register={register}
                  error={errors.manufacturer}
                  name="manufacturer"
                  label="Manufacturer"
                />
                <InputField
                  register={register}
                  error={errors.rate}
                  name="rate"
                  label="Rate"
                />
                <InputField
                  register={register}
                  error={errors.year}
                  name="year"
                  label="Year"
                />
                <InputField
                  register={register}
                  error={errors.status}
                  name="status"
                  label="Status"
                  inputType="select"
                />
                <InputField
                  register={register}
                  name="thumbnail"
                  label="Upload Thumbnail"
                  error={errors.thumbnail}
                  multiple={false}
                  inputType="file"
                />
                <InputField
                  register={register}
                  name="gallery"
                  label="Upload Image"
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
            Add Equipment
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

export default page;
