import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { useStore } from "@/store/store";
import Image from "next/image";
import AdminModal from "./AdminModal";
import EditInputField from "./EditInputField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

const ProfileDetails = () => {
  const { user, editProfile } = useStore((state) => state);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = React.useState(false);
  const router = useRouter();

  const { register, handleSubmit, formState: errors } = useForm();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    queryKey: "editUser",
    mutationFn: async (payload) => {
      const addPayload = await editProfile(payload);
      return addPayload;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const handleEditProfile = async (data) => {
    await mutateAsync(data);
    setIsEditProfileOpen(false);
    router.replace("/admin");
  };

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <div className="user flex justify-center items-center gap-2">
            <Image
              src="/admin-user.svg"
              alt="User-icon"
              width={32}
              height={32}
            />
            <div className="name-role">
              <h1 className="text-admin-secondary text-sm font-bold">
                {user && user?.user.username}
              </h1>
              <p className="text-admin-secondary text-xs">{user?.user.role}</p>
            </div>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader>Profile Settings</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <ul className="list-none p-0 m-0">
              <li
                className="p-2 text-sm font-bold cursor-pointer rounded-sm hover:bg-admin-link-bg"
                onClick={() => setIsEditProfileOpen(true)}
              >
                Edit Profile
              </li>
              <li className="p-2 text-sm font-bold cursor-pointer rounded-sm hover:bg-admin-link-bg">
                Change Password
              </li>
              <li className="p-2 text-sm font-bold cursor-pointer rounded-sm hover:bg-admin-link-bg">
                Logout
              </li>
            </ul>
          </PopoverBody>
        </PopoverContent>
      </Popover>

      <AdminModal
        isOpen={isEditProfileOpen}
        onClose={() => setIsEditProfileOpen(false)}
      >
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalBody>
          <div className="name flex flex-col gap-2 justify-center items-start w-full">
            <EditInputField
              register={register}
              error={errors.username}
              value={user?.user.username}
              label="Username"
              name="username"
            />
            <EditInputField
              register={register}
              error={errors.email}
              value={user?.user.email}
              label="Email"
              name="email"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="ghost"
            mr={3}
            onClick={() => setIsEditProfileOpen(false)}
          >
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={handleSubmit(handleEditProfile)}>
            Submit
          </Button>
        </ModalFooter>
      </AdminModal>
      <AdminModal
        isOpen={isChangePasswordOpen}
        onClose={() => setIsChangePasswordOpen(false)}
      >
        <ModalHeader>Change Password</ModalHeader>
        <ModalBody>
          <div className="name flex flex-col gap-2 justify-center items-start w-full">
            <EditInputField
              register={register}
              error={errors.password}
              value={user?.user.password}
              label="Password"
              name="password"
              inputType="password"
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            variant="ghost"
            mr={3}
            onClick={() => setIsChangePasswordOpen(false)}
          >
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => setIsChangePasswordOpen(false)}
          >
            Submit
          </Button>
        </ModalFooter>
      </AdminModal>
    </>
  );
};

export default ProfileDetails;
