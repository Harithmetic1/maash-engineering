import React from "react";

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminModal from "./AdminModal";
import { useStore } from "@/store/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import EditInputField from "./EditInputField";

const EditUserButton = ({ id, email, username, role }) => {
  const [editUserModalIsOpen, setEditUserModalIsOpen] = React.useState(false);

  const { editUser } = useStore((state) => state);

  const { register, handleSubmit, formState: errors } = useForm();

  const queryClient = useQueryClient();

  // console.log("Edit User Button", id, email, username, role);

  const { mutateAsync } = useMutation({
    queryKey: "editUser",
    mutationFn: async (payload) => {
      const addPayload = await editUser(id, payload);
      return addPayload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleSubmitForm = async (data) => {
    console.log(data);
    await mutateAsync(data);
    setEditUserModalIsOpen(false);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();
    setEditUserModalIsOpen(false);
  };

  return (
    <div key={id}>
      <button
        className="text-admin-secondary px-3 py-2 rounded-md"
        onClick={() => setEditUserModalIsOpen(true)}
      >
        <FontAwesomeIcon icon={faEdit} width={20} height={20} />
      </button>
      <AdminModal
        isOpen={editUserModalIsOpen}
        onClose={() => setEditUserModalIsOpen(false)}
      >
        <ModalHeader>Edit User</ModalHeader>
        <ModalBody>
          <form>
            <EditInputField
              label="Role"
              name="role"
              inputType={"userSelect"}
              register={register}
              error={errors.role}
              value={role}
            />
            <button
              className="float-right mt-4 bg-blue-500 rounded-lg font-medium px-4 text-white py-2"
              onClick={handleSubmit(handleSubmitForm)}
            >
              Submit
            </button>
            <button
              className="float-right mt-4 mr-2 hover:border hover:border-red-300 rounded-lg px-4 py-2"
              onClick={(e) => handleCloseModal(e)}
            >
              Cancel
            </button>
          </form>
        </ModalBody>
      </AdminModal>
    </div>
  );
};

export default EditUserButton;
