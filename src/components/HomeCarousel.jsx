'use client';
import React, { useEffect, useState } from 'react'


function HomeCarousel() {

    const services = [
        {
            title: 'Oil and Gas',
            bg_image : 'oil_and_gas',
            description: 'With a proven track record in integrated Oil & Gas operations and a strong commitment to make meaningful contributions to the economy of Nigeria, Maash Engineering is being increasingly accepted as a preferred strategic partner. \n \n We seek to maximize value creation and strengthen the integration of our operations all the way down the value chain.'
        },
        {
            title: 'Heavy Duty Leasing',
            bg_image : 'heavy_duty_leasing',
            description: 'We lease Construction equipments ranging from bulldozers, airlifts, heavy duty cranes, air compressors, concrete pumps and mixers, Bulldozers (crawlers and wheels), Cranes (heavy duty mobile, tower and crane), dumpers, excavators, compressors, ton heavy duty loader, etc.'
        },
        {
            title: 'Pipeline Welding & Maintenance',
            bg_image : 'pipeline_welding',
            description: 'We are well know and highly respected for our honesty and Integrity and posses many years of technical and commercial Experience in maintenances and repairs/upgrade of oil and gas pipeline.'
        },
];

    const [currentSlide, setCurrentSlide] = useState(services[0]);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const numberOfSlides = 3;


    useEffect(() => {
        setTimeout(() => {
            setCurrentSlideIndex((currentSlideIndex + 1) % numberOfSlides);
        }, 15000);
    }, [currentSlideIndex]);

    const handleShowSlider = (index) => {
        switch (index) {
            case 0:
            return <div key={services[0].title} className={`slider-items ${index == 0 ? "slide-in" : "fade-out"} w-[100vw] h-[90svh] ${services[0].bg_image}`}>
                <div className="slider-content w-full h-full  flex justify-center items-center">
                    <div className="content-container w-11/12 opacity-100">
                        <h1 className='text-7xl font-bold text-white'>{services[0].title}</h1>
                        <p className='text-white lg:w-[465px] whitespace-pre-line pt-4'>{services[0].description}</p>
                        <button className='bg-white text-black font-bold py-2 px-14 rounded mt-4'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
                break;
            case 1:
            return <div key={services[1].title} className={`slider-items ${index == 1 ? "slide-in" : "fade-out"} w-[100vw] h-[90svh] ${services[1].bg_image}`}>
                <div className="slider-content w-full h-full  flex justify-center items-center">
                    <div className="content-container w-11/12 opacity-100">
                        <h1 className='text-7xl font-bold text-white'>{services[1].title}</h1>
                        <p className='text-white lg:w-[465px] whitespace-pre-line pt-4'>{services[1].description}</p>
                        <button className='bg-white text-black font-bold py-2 px-14 rounded mt-4'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
                break;
            case 2:
            return <div key={services[2].title} className={`slider-items ${index == 2 ? "slide-in" : "fade-out"} w-[100vw] h-[90svh] ${services[2].bg_image}`}>
                <div className="slider-content w-full h-full  flex justify-center items-center">
                    <div className="content-container w-11/12 opacity-100">
                        <h1 className='text-7xl font-bold text-white'>{services[2].title}</h1>
                        <p className='text-white lg:w-[465px] whitespace-pre-line  pt-4'>{services[2].description}</p>
                        <button className='bg-white text-black font-bold py-2 px-14 rounded mt-4'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            break;
            default:
               return  <div key={services[0].title} className={`slider-items w-[100vw] h-[90svh] ${services[0].bg_image}`}>
                    <div className="slider-content w-full h-full flex justify-center items-center">
                        <div className="content-container w-11/12 opacity-100">
                            <h1 className='text-7xl font-bold text-white'>{services[0].title}</h1>
                            <p className='text-white lg:w-[465px] whitespace-pre-line pt-4'>{services[0].description}</p>
                            <button className='bg-white text-black font-bold py-2 px-14 rounded mt-4'>
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
                break;
        }
    }



  return (
    <div>
        {
            handleShowSlider(currentSlideIndex)
        }
    </div>
  )
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