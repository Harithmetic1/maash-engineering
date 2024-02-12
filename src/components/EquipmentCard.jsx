import React from 'react'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const EquipmentCard = ({ manufacturer, name, thumbnail, condition, id }) => {
  return (
    <Link href={`/equipments/${id}`}>
    <div className="featured-equipment-card flex flex-col gap-5 items-center justify-center rounded">
        <div className="featured-equipment-image py-14 md:w-full lg:w-80 w-full h-[306px] relative">
          {
            thumbnail && (
              <Image
                src={thumbnail}
                alt={name}
                layout="fill"
                className="object-cover rounded-lg"
              />
            )
          }
            
        </div>
        <div className="featured-equipment-name flex flex-col gap-3 items-start w-full lg:w-80 justify-center text-start">
          <div className='equipmwnt-title'>
            <h6>Manufacturer: <span className='pl-2'>{manufacturer}</span></h6>
            <h6>Name: <span className='pl-2'>{name}</span></h6>
          </div>
          <div className='price-condition flex justify-between items-center w-full'>
            <p className='price'>
              <span className="text-lg font-bold">₦55,000</span> /{" "}
              <span className="text-sm">Day</span>
            </p>
            <p className='condition'>
              <FontAwesomeIcon icon={faStar} className='text-neutral-600' />
              <span className="text-sm ml-0.5">{condition}</span>
            </p>
          </div> 
        </div>
        <div className="featured-equipment-button w-full lg:w-80 pt-4 pb-4 flex justify-center items-center">
            <button className="bg-neutral-800 w-full text-white py-2 px-9 rounded">
            View Details
            </button>
        </div>
    </div>
    </Link>
  )
}

export default EquipmentCard;