import React from 'react'
import Image from "next/image";


const DownloadSpecs = () => {
  return (
    <div className="download-specs w-full py-[9px] bg-neutral-50 justify-center items-center gap-[13px] inline-flex">
      <div className='w-9/12 flex justify-end items-center gap-3'>
      <p className='text-xs lg:text-sm'>CAT Excavator full specifications</p>
        <Image src="/pdf_outline.svg" alt="pdf" width={27} height={27} />
        <Image src="/download.svg" alt="download_icon" width={27} height={27} />
      </div>
    </div>
  )
}

export default DownloadSpecs;