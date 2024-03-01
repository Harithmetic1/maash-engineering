"use client";
import React from "react";
import AdminModal from "./AdminModal";
import { useStore } from "@/store/store";
import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddManagerButton = () => {
  const { addManager, managerModal, openManagerModal, closeManagerModal } =
    useStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    queryKey: "addManager",
    mutationFn: async (payload) => {
      const addPayload = await addManager(payload);
      return addPayload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("managers");
    },
  });

  const handleAddManager = (data) => {
    const fd = new FormData();
    Object.keys(data).forEach((key) => {
      if (key == "image") {
        if (data[key].length > 0) {
          console.log("Image Found", data[key][0]);
          fd.append(key, data[key][0], data[key][0]?.name);
        } else {
          return;
        }
      } else {
        fd.append(key, data[key]);
      }
    });
    mutateAsync(fd);
    closeManagerModal();
  };
  return (
    <div className="flex justify-end items-center gap-4">
      <button
        className="add-manager-btn bg-admin-secondary text-white px-3 py-1 rounded-md"
        onClick={openManagerModal}
      >
        Add Manager
      </button>
      <AdminModal isOpen={managerModal?.isOpen} onClose={closeManagerModal}>
        <ModalHeader>Add Manager</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleAddManager)}>
            <div className="form-group">
              <InputField
                register={register}
                error={errors.first_name}
                name={"firstName"}
                label="First Name"
                type="text"
                placeholder="Ibrahim"
              />
              <InputField
                register={register}
                error={errors.last_name}
                name={"lastName"}
                label="Last Name"
                type="text"
                placeholder="Aminu"
              />
              <InputField
                register={register}
                error={errors.job_title}
                name={"jobTitle"}
                label="Job Title"
                type="text"
                placeholder=""
              />
              <InputField
                register={register}
                error={errors.image}
                name={"image"}
                label="Profile Image"
                inputType="file"
                type="file"
                required={false}
              />
              <InputField
                register={register}
                error={errors.bio}
                name={"bio"}
                label="Description"
                inputType="textarea"
                type="text"
                placeholder="Enter Manager Bio"
              />
            </div>
            <button className="float-right mt-4 bg-blue-500 rounded-lg font-medium px-4 text-white py-2">
              Submit
            </button>
            <button
              className="float-right mt-4 mr-2 hover:border hover:border-red-300 rounded-lg px-4 py-2"
              onClick={closeManagerModal}
            >
              Cancel
            </button>
          </form>
        </ModalBody>
      </AdminModal>
    </div>
  );
};

export default AddManagerButton;
