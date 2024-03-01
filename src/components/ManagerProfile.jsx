import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faArrowRight, faUser } from "@fortawesome/free-solid-svg-icons";

const ManagerProfile = ({
  id,
  firstName,
  lastName,
  profileImage,
  jobTitle,
}) => {
  return (
    <div className="manager-profile flex flex-col gap-6 justify-center items-center">
      <div className="manager-profile-pic w-52 h-52 relative">
        {profileImage ? (
          <Image
            src="/IBRAHIM, AMINU BAGUDU.png"
            alt="oil worker working at an oil rig"
            fill="responsive"
            className="object-contain rounded-xl"
          />
        ) : (
          <FontAwesomeIcon
            icon={faUser}
            className="rounded-[50%] p-6 border-black text-6xl border-2"
          />
        )}
      </div>
      <div className="managers-details text-center flex flex-col justify-center items-center">
        <h4 className="text-neutral-800 text-base font-bold">
          {firstName}, {lastName}
        </h4>
        <p>{jobTitle}</p>
        <Link href={`/about/${id}`} className="cursor-pointer">
          <FontAwesomeIcon icon={faArrowRight} width={16} height={16} />
        </Link>
      </div>
    </div>
  );
};

export default ManagerProfile;
