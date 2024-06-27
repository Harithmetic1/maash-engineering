"use client";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";

const AdminModal = ({
  children,
  isOpen,
  onClose,
  modalSize = "xl",
  background = "white",
}) => {
  return (
    <Modal size={modalSize} isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent background={background}>{children}</ModalContent>
    </Modal>
  );
};

export default AdminModal;
