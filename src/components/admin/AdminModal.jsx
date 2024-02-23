"use client";
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
  } from '@chakra-ui/react'

const AdminModal = ({ children, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          { children }
        </ModalContent>
      </Modal>
  )
}

export default AdminModal;