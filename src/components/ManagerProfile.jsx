import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {
    faArrowRight,
  } from "@fortawesome/free-solid-svg-icons";

const ManagerProfile = () => {
  return (
    <div className="manager-profile flex flex-col gap-6 justify-center items-center">
              <div className="manager-profile-pic w-52 h-52 relative">
                <Image
                  src="/IBRAHIM, AMINU BAGUDU.png"
                  alt="oil worker working at an oil rig"
                  fill="responsive"
                  className="object-contain rounded-xl"
                />
              </div>
              <div className="managers-details text-center flex flex-col justify-center items-center">
                <h4 className="text-neutral-800 text-base font-bold">
                  IBRAHIM, AMINU BAGUDU
                </h4>
                <p>Chief Executive Officer</p>
                <Link href="/about/manager-profile" className="cursor-pointer">
                  <FontAwesomeIcon icon={faArrowRight} width={16} height={16} />
                </Link>
              </div>
            </div>
  )
}

export default ManagerProfile;