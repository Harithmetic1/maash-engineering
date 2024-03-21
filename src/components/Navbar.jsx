"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";
import AdminModal from "./admin/AdminModal";
import { ModalHeader, ModalFooter, ModalBody, Button } from "@chakra-ui/react";
import {
  faClose,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

function Navbar({ showSearchIcon = true }) {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(!showSearch);
    setShowNav(false);
  };

  const handleShowNav = () => {
    setShowNav(!showNav);
    setShowSearch(false);
  };

  return (
    <>
      <nav className="p-3 hidden sm:flex text-sm lg:text-base xl:px-20  justify-evenly items-center w-full">
        <div className="nav-icon w-full md:w-5/12">
          <Image
            src="/maash_eng_logo.png"
            alt="Maash Engineering Logo"
            width={186}
            height={60}
          />
        </div>
        <div className="nav-links w-full md:w-7/12 flex justify-end gap-10 items-center">
          <div className="links border-r-2 border-black">
            <ul className="flex justify-between items-center">
              <li className="inline-block mr-5 cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="inline-block mr-5 cursor-pointer">
                <Link href="/equipments">Equipments</Link>
              </li>
              <li className="inline-block mr-5 cursor-pointer">
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="button">
            <button
              className="bg-black text-white font-bold py-2 px-3 rounded"
              onClick={() => setShowModal(true)}
            >
              Contact Us
            </button>
            {/* {showModal && <Modal onClose={() => setShowModal(false)} />} */}

            <AdminModal isOpen={showModal} onClose={() => setShowModal(false)}>
              <ModalHeader>Contact Us</ModalHeader>
              <ModalBody>
                <div className="modal-ch p-5 w-full">
                  <div className="modal-body h-full flex justify-center items-center">
                    <div className="modal-body-contents w-full h-full flex justify-center gap-6 items-center">
                      <div className="email p-4 flex justify-center items-center gap-2 rounded-lg bg-neutral-800 text-white">
                        <a
                          href="mailto:info@maashengineering.com"
                          className="text-4xl"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <p className="cursor-pointer">Email us</p>
                      </div>

                      <div className="phone p-4 flex justify-center items-center gap-2 rounded-lg bg-rose-500 text-white">
                        <a
                          href="tel:+234(0) 333 53851"
                          className="text-4xl"
                          target="_blank"
                        >
                          <FontAwesomeIcon icon={faPhone} />
                        </a>
                        <p className="cursor-pointer">Call Us</p>
                      </div>

                      <div className="address p-4 flex justify-center items-center gap-2 rounded-lg bg-sky-500 text-white">
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
          </div>
        </div>
      </nav>

      <nav
        className={`p-3 flex flex-col sm:hidden text-sm lg:text-base xl:px-20 justify-evenly items-center w-full`}
      >
        <div className="mobile-navbar w-full z-10 flex justify-between items-center">
          <div className="hamburger-menu" onClick={handleShowNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <div className="nav-icon flex items-center justify-center w-full">
            <Image
              src="/maash_eng_logo.png"
              alt="Maash Engineering Logo"
              width={186}
              height={60}
            />
          </div>
          {showSearchIcon && (
            <div className="search-icon" onClick={handleShowSearch}>
              <FontAwesomeIcon
                icon={faSearch}
                className="text-black text-[24px] text-center"
              />
            </div>
          )}
        </div>
        <div
          className={`nav-links z-0 ${
            showNav ? "reveal-nav" : "hide-nav"
          } w-full flex flex-col justify-center gap-4 items-center`}
        >
          <div className="links w-full">
            <ul className="flex flex-col gap-4 w-full justify-between items-center">
              <li className="inline-block cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="inline-block cursor-pointer">
                <Link href="/equipments">Equipments</Link>
              </li>
              <li className="inline-block cursor-pointer">
                <Link href="/about">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="button">
            <button
              className="bg-black text-white font-bold py-2 px-3 rounded"
              onClick={() => setShowModal(true)}
            >
              Contact Us
            </button>
            {/* {showModal && <Modal onClose={() => setShowModal(false)} />} */}
          </div>
        </div>
        <div
          className={`search-bar z-0 ${
            showSearch ? "reveal-search" : "hide-search"
          } w-full flex flex-col justify-center gap-4 items-center`}
        >
          <SearchBar />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
