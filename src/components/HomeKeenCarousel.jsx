import React from "react";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { useKeenSlider } from "keen-slider/react";

const HomeKeenCarousel = () => {
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
          }, 4000);
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
      <div ref={sliderRef} className="keen-slider">
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
    </>
  );
};

export default HomeKeenCarousel;
