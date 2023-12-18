import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="about-page-main p-4">
        <div className="about-page-header">
          <h1 className="text-2xl sm:text-2xl md:text-4xl font-bold text-black">
            ABOUT US
          </h1>
        </div>
        <div className="about-page-content">
          <div className="about-page-content-text">
            <p className="text-lg sm:text-lg md:text-2xl font-medium text-black">
              We are a team of passionate people whose goal is to improve
              everyone's life through disruptive products. We build great
              products to solve your business problems.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
