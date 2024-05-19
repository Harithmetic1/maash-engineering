import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavLink = ({
  route,
  routeName,
  routeImg,
  routeImgAlt,
  isActive,
  isAuthorized,
}) => {
  return (
    <li
      className={`p-6 ${isActive ? "bg-admin-link-bg" : ""} ${
        isAuthorized ? "" : "hidden"
      } w-full`}
    >
      <Link href={route} className="flex justify-start items-center gap-2">
        {routeImg && (
          <Image src={routeImg} alt={routeImgAlt} width={24} height={24} />
        )}{" "}
        {routeName}
      </Link>
    </li>
  );
};

export default NavLink;
