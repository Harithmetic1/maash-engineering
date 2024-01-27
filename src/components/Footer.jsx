import React from 'react'
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faWhatsapp,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";


const Footer = () => {
  return (
    <footer className="footer bg-zinc-950 text-white w-full">
        <div className="footer-container flex flex-col items-center justify-center w-[80vw] m-auto pt-20 pb-20">
          <div className="footer-links w-full flex justify-evenly items-start">
            <div className="footer-link">
              {/* <h3 className="text-lg font-bold text-start pb-2 text-[#363636]">
                About Us
              </h3> */}
              <ul className="text-sm flex flex-col items-start justify-center">
                <li className="pb-2">Company</li>
                <li className="pb-2">About Us</li>
                <li className="pb-2">Careers</li>
                <li className="pb-2">FAQ&#39;S</li>
                <li className="pb-2">Team</li>
                <li className="pb-2">Contact Us</li>
              </ul>
            </div>
            <div className="social-links flex flex-col items-start justify-center h-full">
              <h3 className="text-lg font-bold text-start pb-2">Follow us</h3>
              <ul className="text-sm flex gap-2 items-center h-full justify-center">
                <li className="pb-2">
                  <FontAwesomeIcon icon={faFacebook} className="text-white" />
                </li>
                <li className="pb-2">
                  <FontAwesomeIcon icon={faTwitter} className="text-white" />
                </li>
                <li className="pb-2">
                  <FontAwesomeIcon icon={faInstagram} className="text-white" />
                </li>
                <li className="pb-2">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-white" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy flex justify-start items-center pb-9">
            <p className="text-xs m-auto text-start pb-2 w-[90vw]">
                © 2023 Maash Engineering. All rights reserved.
            </p>
        </div>
      </footer>
  )
}

export default Footer;