import React from "react";
import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import AdminModal from "./AdminModal";
import { useStore } from "@/store/store";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddUserButton = () => {
  const { openAddUserModal, closeAddUserModal, addUserModal, registerUser } =
    useStore((state) => state);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { mutateAsync, isPending, isError, error, isSuccess } = useMutation({
    queryKey: "registerUser",
    mutationFn: async (payload) => {
      const addPayload = await registerUser(payload);
      return addPayload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleRegisterUser = async (data) => {
    await mutateAsync(data);
    if (isSuccess) {
      closeAddUserModal();
    }
  };

  return (
    <div>
      <button
        className="bg-admin-secondary text-white px-3 py-2 rounded-md"
        onClick={openAddUserModal}
      >
        Add User
      </button>
      <AdminModal isOpen={addUserModal?.isOpen} onClose={closeAddUserModal}>
        <ModalHeader>Add User</ModalHeader>
        <ModalBody>
          <form>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <InputField
                  register={register}
                  name={"username"}
                  error={errors.username}
                  label="Username"
                  type="text"
                />
              </div>
              <div className="flex flex-col mt-4">
                <InputField
                  register={register}
                  name={"email"}
                  error={errors.email}
                  label="Email"
                  type="text"
                />
              </div>
              <div className="flex flex-col mt-4">
                <InputField
                  register={register}
                  name={"password"}
                  error={errors.password}
                  label="Password"
                  inputType={"password"}
                />
              </div>
              <div className="flex flex-col mt-4">
                <InputField
                  register={register}
                  name={"role"}
                  error={errors.role}
                  label="Role"
                  inputType={"userSelect"}
                />
              </div>
            </div>
            <button
              className="float-right mt-4 bg-blue-500 rounded-lg font-medium px-4 text-white py-2"
              onClick={handleSubmit(handleRegisterUser)}
            >
              {isPending ? "Loading..." : "Submit"}
            </button>
            <button
              className="float-right mt-4 mr-2 hover:border hover:border-red-300 rounded-lg px-4 py-2"
              onClick={closeAddUserModal}
            >
              Cancel
            </button>
          </form>
        </ModalBody>
      </AdminModal>
    </div>
  );
};

export default AddUserButton;
