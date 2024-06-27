"use client";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

import AdminModal from "./admin/AdminModal";
import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import {
  faClose,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeKeenCarousel = () => {
  const [showModal, setShowModal] = useState(false);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 6000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

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

  return (
    <>
      <div ref={sliderRef} className="home keen-slider">
        {services.map((service, index) => (
          <div
            key={service.title}
            className={`slider-items keen-slider__slide ${service.bg_image}`}
          >
            <div className="slider-content w-full h-full  flex justify-center items-center">
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

      <AdminModal isOpen={showModal} onClose={() => setShowModal(false)}>
        <ModalHeader>Contact Us</ModalHeader>
        <ModalBody>
          <div className="modal-ch p-5 w-full">
            <div className="modal-body h-full flex justify-center items-center">
              <div className="modal-body-contents w-full h-full flex justify-center gap-6 items-center">
                <div className="email p-2 lg:p-4 flex justify-center items-center gap-2 rounded-lg bg-neutral-800 text-white">
                  <a
                    href="mailto:info@maashengineering.com"
                    className="text-4xl flex justify-center items-center gap-2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p className="cursor-pointer text-base">Email us</p>
                  </a>
                </div>

                <div className="phone p-2 lg:p-4 flex justify-center items-center gap-2 rounded-lg bg-rose-500 text-white">
                  <a
                    href="tel:+234(0) 333 53851"
                    className="text-4xl flex justify-center items-center gap-2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faPhone} />
                    <p className="cursor-pointer text-base">Call Us</p>
                  </a>
                </div>

                <div className="address p-2 lg:p-4 flex justify-center items-center gap-2 rounded-lg bg-sky-500 text-white">
                  <a
                    href="https://maps.app.goo.gl/oXBhZzcEfo73RwUQA"
                    className="text-4xl flex justify-center items-center gap-2"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="cursor-pointer text-base">Find Us</p>
                  </a>
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
};

export default HomeKeenCarousel;
