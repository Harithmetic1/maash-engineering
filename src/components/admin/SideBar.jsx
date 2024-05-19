"use client";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { usePathname, useRouter } from "next/navigation";
import NavLink from "./NavLink";

const SideBar = () => {
  const {
    user,
    equipmentPageAuthUsers,
    managerPageAuthUsers,
    userPageAuthUsers,
  } = useStore((state) => state);
  const router = useRouter();
  const [activeNavLink, setActiveNavLink] = useState("products");
  const { logout } = useStore((state) => state);
  const handleLogOut = () => {
    logout();
    router.push("/admin");
  };

  const pathname = usePathname();

  useEffect(() => {
    console.log(pathname);
    let pathname_array = pathname.split("/");

    setActiveNavLink(pathname_array[pathname_array.length - 1].toLowerCase());
  }, [pathname]);

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
          <NavLink
            route={"/admin/products"}
            routeName={"Equipments"}
            routeImg={"/equipment.svg"}
            routeImgAlt={"Equipments-icon"}
            isActive={activeNavLink == "products"}
            isAuthorized={equipmentPageAuthUsers[user?.user.role]}
          />
          <NavLink
            route={"/admin/managers"}
            routeName={"Managers"}
            routeImg={"/managers.svg"}
            routeImgAlt={"Managers-icon"}
            isActive={activeNavLink == "managers"}
            isAuthorized={managerPageAuthUsers[user?.user.role]}
          />
          <NavLink
            route={"/admin/services"}
            routeName={"Services"}
            routeImg={"/services.svg"}
            routeImgAlt={"services-icon"}
            isActive={activeNavLink == "services"}
            isAuthorized={equipmentPageAuthUsers[user?.user.role]}
          />
          <NavLink
            route={"/admin/company"}
            routeName={"Company"}
            routeImg={"/company.svg"}
            routeImgAlt={"company-icon"}
            isActive={activeNavLink == "company"}
            isAuthorized={equipmentPageAuthUsers[user?.user.role]}
          />
          <NavLink
            route={"/admin/users"}
            routeName={"Users"}
            routeImg={"/users.svg"}
            routeImgAlt={"users-icon"}
            isActive={activeNavLink == "users"}
            isAuthorized={userPageAuthUsers[user?.user.role]}
          />
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
