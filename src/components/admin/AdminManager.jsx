"use client";
import React from "react";
import { faEdit, faTrash, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import AdminModal from "./AdminModal";
import { useStore } from "@/store/store";

import Image from "next/image";
import EditInputField from "./EditInputField";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AdminManager = ({
  id,
  firstName,
  lastName,
  profileImage,
  jobTitle,
  bio,
  profileDocument,
}) => {
  const {
    editManagers,
    deleteManager,
    editManagerModal,
    openEditManagerModal,
    closeEditManagerModal,
    deleteModal,
    openDeleteModal,
    closeDeleteModal,
  } = useStore((state) => state);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    queryKey: "editManager",
    mutationFn: async (payload) => {
      const addPayload = await editManagers(id, payload);
      return addPayload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("managers");
    },
  });

  const {
    mutateAsync: deleteManagerMutate,
    isPending: ispendingDeleteManager,
    isError: isErrorDeleteManager,
    error: errorDeleteManager,
    isSuccess: isSucessDeleteManager,
  } = useMutation({
    queryKey: "deleteManager",
    mutationFn: async (payload) => {
      const addPayload = await deleteManager(payload);
      return addPayload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("managers");
    },
  });

  const handleEditManager = (data) => {
    const fd = new FormData();
    Object.keys(data).forEach((key) => {
      if (
        data[key] == "" ||
        data[key] == undefined ||
        data[key] == null ||
        data[key].length == 0
      ) {
        return;
      }
      console.log("key", key, data[key]);
      if (key == "image") {
        fd.append(key, data[key][0]);
      } else {
        fd.append(key, data[key]);
      }
    });
    mutateAsync(fd);
    closeEditManagerModal();
  };

  const handleDeleteManager = () => {
    deleteManagerMutate(id);
    closeDeleteModal();
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    closeEditManagerModal();
  };

  return (
    <div className="manager-card-container border-b border-black p-10">
      <div className="manager-card flex justify-between">
        <div className="manager flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="manger-profile-pic">
              {profileImage ? (
                <Image
                  src={profileImage}
                  alt="ibrahim"
                  className="rounded-full object-cover"
                  width={100}
                  height={100}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUser}
                  className="rounded-[50%] p-6 border-black text-6xl border-2"
                />
              )}
            </div>

            <div className="manager-action flex gap-5">
              {profileDocument && (
                <button className="edit-manager-btn text-gray-600 px-3 py-1 h-10 rounded-md">
                  <Image
                    src="/pdf_outline.svg"
                    alt="pdf"
                    width={20}
                    height={20}
                  />
                </button>
              )}
              <button
                className="edit-manager-btn text-gray-600 px-3 py-1 h-10 rounded-md"
                onClick={openEditManagerModal}
              >
                <FontAwesomeIcon icon={faEdit} width={20} height={20} />
              </button>
              <button
                className="delete-manager-btn text-gray-600 px-3 py-1 h-10  rounded-md"
                onClick={openDeleteModal}
              >
                <FontAwesomeIcon icon={faTrash} width={20} height={20} />
              </button>
            </div>
          </div>
          <div className="manager-info flex flex-col gap-2 lg:w-9/12">
            <h1 className="text-2xl font-bold text-admin-secondary">
              {firstName} {lastName}
            </h1>
            <p className="text-admin-secondary text-lg font-semibold">
              {jobTitle}
            </p>
            <p className="text-admin-secondary text-sm">{bio}</p>
          </div>
        </div>
      </div>
      <AdminModal
        isOpen={editManagerModal?.isOpen}
        onClose={closeEditManagerModal}
      >
        <ModalHeader>Edit Manager</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(handleEditManager)}>
            <div className="form-group">
              <EditInputField
                register={register}
                error={errors.first_name}
                name={"firstName"}
                label="First Name"
                type="text"
                placeholder="Ibrahim"
                value={firstName}
              />
              <EditInputField
                register={register}
                error={errors.last_name}
                name={"lastName"}
                label="Last Name"
                type="text"
                placeholder="Aminu"
                value={lastName}
              />
              <EditInputField
                register={register}
                error={errors.job_title}
                name={"jobTitle"}
                label="Job Title"
                type="text"
                placeholder=""
                value={jobTitle}
              />
              <EditInputField
                register={register}
                error={errors.image}
                name={"image"}
                label="Profile Image"
                inputType="file"
                type="file"
              />
              <EditInputField
                register={register}
                error={errors.bio}
                name={"bio"}
                label="Description"
                inputType="textarea"
                type="text"
                placeholder="Enter Manager Bio"
                value={bio}
              />
            </div>
            <button className="float-right mt-4 bg-blue-500 rounded-lg font-medium px-4 text-white py-2">
              Submit
            </button>
            <button
              className="float-right mt-4 mr-2 hover:border hover:border-red-300 rounded-lg px-4 py-2"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
          </form>
        </ModalBody>

        {/* <ModalFooter>
          <Button variant="ghost" mr={3} onClick={closeEditManagerModal}>
            Cancel
          </Button>
          <Button colorScheme="blue">
            Submit
          </Button>
        </ModalFooter> */}
      </AdminModal>
      <AdminModal isOpen={deleteModal?.isOpen} onClose={closeDeleteModal}>
        <ModalHeader>Delete Alert</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this equipment?</p>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={closeDeleteModal}>
            No
          </Button>
          <Button colorScheme="red" onClick={() => handleDeleteManager()}>
            Yes
          </Button>
        </ModalFooter>
      </AdminModal>
    </div>
  );
};

export default AdminManager;
