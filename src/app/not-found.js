import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";

const Notfound = () => {
  return (
    <div>
      <Navbar />
      <div className="h-screen flex flex-col gap-3 justify-center items-center">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
          className="flex justify-center items-center w-full"
        >
          <iframe
            src="https://giphy.com/embed/lnaIzsFXSAss5osoy3"
            width="40%"
            height="40%"
            className="giphy-embed inset-0"
          ></iframe>
        </div>
        <p>
          <a href="https://giphy.com/gifs/miposicionamientoweb-lnaIzsFXSAss5osoy3">
            via GIPHY
          </a>
        </p>
        <h1 className="text-5xl font-bold text-center h-full">
          Oops!! That page doesn't exist,{" "}
          <span>
            <Link href="/" className="text-blue-600 underline">
              Go to Homepage.
            </Link>
          </span>{" "}
        </h1>
      </div>
      <Footer />
    </div>
  );
};

export default Notfound;
