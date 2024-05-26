import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Link from "next/link";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer bg-zinc-950 text-white w-full">
      <div className="footer-container flex flex-col items-center justify-center w-[80vw] m-auto pt-20 pb-20">
        <div className="footer-links w-full flex flex-col lg:flex-row justify-evenly items-center lg:items-start">
          <div className="footer-link">
            {/* <h3 className="text-lg font-bold text-start pb-2 text-[#363636]">
                About Us
              </h3> */}
            <ul className="text-sm flex flex-col items-start justify-center">
              <li className="pb-2">
                <Link href="/admin">Admin Login</Link>
              </li>
              <li className="pb-2">
                <Link href="/about">Company</Link>
              </li>
              <li className="pb-2">
                <Link href="/about">About Us</Link>
              </li>
              <li className="pb-2">
                <Link href="/about">Our Team</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-6 justify-between">
            <div className="social-links flex flex-col items-start justify-center h-full">
              <h3 className="text-lg font-bold text-start pb-2">Email</h3>
              <ul className="text-sm flex flex-col gap-2 items-start h-full justify-center">
                <li className="">
                  {/* <FontAwesomeIcon icon={faPhone} className="text-white" />{" "} */}
                  <span>
                    <a href="mailto:info@maashengineering.com">
                      info@maashengineering.com
                    </a>
                  </span>
                </li>
                <li className="">
                  {/* <FontAwesomeIcon icon={faPhone} className="text-white" />{" "} */}
                  <span>
                    <a href="mailto:info@maashengineering.com">
                      bagudu.ibrahim@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="social-links flex flex-col items-start justify-center h-full">
              <h3 className="text-lg font-bold text-start pb-2">Phone</h3>
              <ul className="text-sm flex flex-col gap-2 items-start h-full justify-center">
                <li className="">
                  {/* <FontAwesomeIcon icon={faPhone} className="text-white" />{" "} */}
                  <span>
                    <a href="tel:+2348033152846">+234 803 315 2846</a>
                  </span>
                </li>
                <li className="">
                  {/* <FontAwesomeIcon icon={faPhone} className="text-white" />{" "} */}
                  <span>
                    <a href="tel:+2349060000232">+234 906 000 0232</a>
                  </span>
                </li>
                <li className="">
                  {/* <FontAwesomeIcon icon={faPhone} className="text-white" />{" "} */}
                  <span>
                    <a href="tel:+2348038499748">+234 803 849 9748</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy flex justify-start items-center pb-9">
        <p className="text-xs m-auto text-start pb-2 w-[90vw]">
          © 2023 Maash Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
