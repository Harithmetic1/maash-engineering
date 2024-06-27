"use client";
import React, { useEffect, useState, useRef } from "react";
import AdminModal from "./admin/AdminModal";
import { ModalBody, ModalCloseButton, ModalContent } from "@chakra-ui/react";
import Image from "next/image";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const ViewAllBtn = ({ gallery, manufacturer, name }) => {
  const [openGallery, setOpenGallery] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = React.useState([]);

  const modalRef = useRef(null);

  const [sliderRef] = useKeenSlider();

  const handleOutsideModalClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      document.removeEventListener("mousedown", handleOutsideModalClick);
      setOpenGallery(false);
    }
  };

  const handleOpenGallery = () => {
    if (!openGallery) {
      document.addEventListener("mousedown", handleOutsideModalClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideModalClick);
    }
    setOpenGallery(true);
  };

  return (
    <>
      <div className="view-all w-full flex items-center justify-end ">
        {gallery && gallery.length > 2 && (
          <button
            onClick={handleOpenGallery}
            className="bg-white border border-zinc-700 w-full lg:w-[14.931vw] shadow text-zinc-700 rounded px-4 py-2"
          >
            View all photos
          </button>
        )}
      </div>
      <AdminModal
        modalSize="full"
        background="transparent"
        isOpen={openGallery}
        onClose={() => setOpenGallery(false)}
      >
        <ModalCloseButton />
        <ModalBody
          backgroundColor={"transparent"}
          className="justify-center items-center"
        >
          <div ref={modalRef} className="equipment flex h-[95svh] items-center">
            {gallery && (
              // <section className="embla">
              <div ref={sliderRef} className="keen-slider">
                {gallery.map((src, idx) => (
                  <div
                    className="keen-slider__slide relative w-[60vw] h-[50vh]"
                    key={`${name} ${idx}`}
                  >
                    <Image
                      src={src}
                      alt={`${manufacturer} ${name} ${idx}`}
                      fill
                      className="object-contain modal-img"
                    />
                  </div>
                ))}
              </div>
              // </section>
            )}
          </div>
        </ModalBody>
      </AdminModal>
    </>
  );
};

export default ViewAllBtn;
