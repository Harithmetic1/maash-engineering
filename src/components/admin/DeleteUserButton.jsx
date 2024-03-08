import React from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminModal from "./AdminModal";
import { useStore } from "@/store/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";

const DeleteUserButton = ({ id }) => {
  const { deleteUser } = useStore();

  const [deleteModal, setDeleteModal] = React.useState(false);

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    queryKey: "deleteUser",
    mutationFn: async (id) => {
      const addPayload = await deleteUser(id);
      return addPayload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleDeleteUser = async (id) => {
    await mutateAsync(id);
    setDeleteModal(false);
  };

  return (
    <div>
      <button
        className="text-admin-secondary px-3 py-2 rounded-md"
        onClick={() => setDeleteModal(true)}
      >
        <FontAwesomeIcon icon={faTrash} width={20} height={20} />
      </button>
      <AdminModal isOpen={deleteModal} onClose={() => setDeleteModal(false)}>
        <ModalHeader>Delete User</ModalHeader>
        <ModalBody>
          <p>Are you sure you want to delete this user?</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={() => setDeleteModal(false)}>
            No
          </Button>
          <Button colorScheme="red" onClick={() => handleDeleteUser(id)}>
            Yes
          </Button>
        </ModalFooter>
      </AdminModal>
    </div>
  );
};

export default DeleteUserButton;
