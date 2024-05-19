"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AdminModal from "./admin/AdminModal";
import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import {
  faClose,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomeCarousel() {
  const autoplayOptions = {
    delay: 4000,
    playOnInt: true,
    // rootNode: (emblaRoot) => emblaRoot.parentElement,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);
  const [showModal, setShowModal] = useState(false);

  const services = [
    {
      title: "Oil and Gas",
      bg_image: "oil_and_gas",
      description:
        "With a proven track record in integrated Oil & Gas operations and a strong commitment to make meaningful contributions to the economy of Nigeria, Maash Engineering is being increasingly accepted as a preferred strategic partner. \n \n We seek to maximize value creation and strengthen the integration of our operations all the way down the value chain.",
    },
    {
      title: "Heavy Duty Leasing",
      bg_image: "heavy_duty_leasing",
      description:
        "We lease Construction equipments ranging from bulldozers, airlifts, heavy duty cranes, air compressors, concrete pumps and mixers, Bulldozers (crawlers and wheels), Cranes (heavy duty mobile, tower and crane), dumpers, excavators, compressors, ton heavy duty loader, etc.",
    },
    {
      title: "Pipeline Welding & Maintenance",
      bg_image: "pipeline_welding",
      description:
        "We are well know and highly respected for our honesty and Integrity and posses many years of technical and commercial Experience in maintenances and repairs/upgrade of oil and gas pipeline.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(services[0]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const numberOfSlides = 3;

  // useEffect(() => {
  //     setTimeout(() => {
  //         setCurrentSlideIndex((currentSlideIndex + 1) % numberOfSlides);
  //     }, 15000);
  // }, [currentSlideIndex]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`slider-items embla__slide ${service.bg_image}`}
              >
                <div className="slider-content embla__slide w-full h-full  flex justify-center items-center">
                  <div className="content-container w-11/12 opacity-100">
                    <h1 className="text-4xl lg:text-7xl font-bold text-white">
                      {service.title}
                    </h1>
                    <p className="text-white lg:w-[465px] whitespace-pre-line pt-4">
                      {service.description}
                    </p>
                    <button
                      onClick={() => setShowModal(true)}
                      className="bg-white text-black font-bold py-2 px-14 rounded mt-4"
                    >
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AdminModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalHeader>Contact Us</ModalHeader>
        <ModalBody>
          <div className="modal-ch p-5 w-full">
            <div className="modal-body h-full flex justify-center items-center">
              <div className="modal-body-contents w-full h-full flex justify-center gap-6 items-center">
                <div className="email p-2 lg:p-4 flex justify-center items-center gap-2 rounded-lg bg-neutral-800 text-white">
                  <a
                    href="mailto:info@maashengineering.com"
                    className="text-4xl"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <p className="cursor-pointer">Email us</p>
                </div>

                <div className="phone p-2 lg:p-4 flex justify-center items-center gap-2 rounded-lg bg-rose-500 text-white">
                  <a
                    href="tel:+234(0) 333 53851"
                    className="text-4xl"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                  </a>
                  <p className="cursor-pointer">Call Us</p>
                </div>

                <div className="address p-2 lg:p-4 flex justify-center items-center gap-2 rounded-lg bg-sky-500 text-white">
                  <a
                    href="https://maps.app.goo.gl/oXBhZzcEfo73RwUQA"
                    className="text-4xl"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                  </a>
                  <p className="cursor-pointer">Find Us</p>
                </div>
              </div>
            </div>
            {/* <div className='modal-footer'>
                <button>Cancel</button>
                <button>Save</button>
            </div> */}
          </div>
        </ModalBody>
      </AdminModal>
    </>
  );
}

export default HomeCarousel;

// div className="w-full h-96 relative">
//         <Image
//           src="/Oil and Gas.png"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center"
//           alt="Oil and Gas"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center text-white">
//             <h1 className="text-4xl font-bold mb-4">Oil and Gas</h1>
//             <p className="text-xl font-semibold">
//               We are a leading provider of oilfield services in the Middle East.
//               Our team of experts is always ready to take on the most complex
//               projects and deliver the best results.
//             </p>
//           </div>
//         </div>
//       </div>
