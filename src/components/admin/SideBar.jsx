import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useStore } from "@/store/store";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const router = useRouter();
  const { logout } = useStore((state) => state);
  const handleLogOut = () => {
    logout();
    router.push("/admin");
  };
  return (
    <div className="sidebar-container bg-admin-primary h-[100vh] w-80 flex flex-col justify-between items-center">
      <div className="sidebar-logo w-full p-6">
        <Image
          src="/maash_eng_logo.png"
          alt="Maash Eng Logo"
          width={186}
          height={60}
        />
      </div>
      <div className="sidebar-links w-full">
        <ul className="pr-5 pl-0 w-full">
          <li className="p-6 bg-admin-link-bg w-full">
            <Link
              href="/admin/products"
              className="flex justify-start items-center gap-2"
            >
              <Image
                src="/equipment.svg"
                alt="Equipments-icon"
                width={24}
                height={24}
              />{" "}
              Equipments
            </Link>
          </li>
          <li className="p-6 w-full">
            <Link
              href="/admin/managers"
              className="flex justify-start items-center gap-2"
            >
              <Image
                src="/managers.svg"
                alt="Managers-icon"
                width={24}
                height={24}
              />{" "}
              Managers
            </Link>
          </li>
          <li className="p-6 w-full">
            <Link
              href="/admin/services"
              className="flex justify-start items-center gap-2"
            >
              <Image
                src="/services.svg"
                alt="services-icon"
                width={24}
                height={24}
              />{" "}
              Services
            </Link>
          </li>
          <li className="p-6 w-full">
            <Link
              href="/admin/company"
              className="flex justify-start items-center gap-2"
            >
              <Image
                src="/company.svg"
                alt="Company-icon"
                width={24}
                height={24}
              />{" "}
              Company
            </Link>
          </li>
          <li className="p-6 w-full">
            <Link
              href="/admin/users"
              className="flex justify-start items-center gap-2"
            >
              <Image src="/users.svg" alt="Users-icon" width={24} height={24} />{" "}
              Users
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-logout w-full">
        <div
          className="flex p-6 justify-start items-center text-admin-secondary gap-1 cursor-pointer"
          onClick={handleLogOut}
        >
          <FontAwesomeIcon icon={faSignOutAlt} width={15} height={15} /> Logout
        </div>
      </div>
    </div>
  );
};

export default SideBar;
