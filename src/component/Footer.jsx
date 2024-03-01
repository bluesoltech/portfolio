import React from "react";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../assets/img/logonew.png";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-white dark:text-gray-100">
      <div className="container flex text-black flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 flex justify-start">
          <a rel="noopener noreferrer" href="/">
            <div className="flex items-center justify-center rounded-full">
              <img className="w-10" src={logo} />
            </div>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm gap-3 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-800 font-bold inline-block">
              OUR SERVICES:
            </h3>
            <ul className="space-y-1">
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <Link to="/services/cyber">Cyber Security</Link>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <Link to="/services/web">Web Development</Link>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <Link to="/services/app">Apps Development</Link>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <Link to="/services/data">Data Analytics</Link>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <Link to="/services/seo">SEO Optimization</Link>
              </li>
              {/* <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <Link to="/services/smma">Social Media Management</Link>
              </li> */}
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <Link to="/services/graphic">Graphic Design</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-800 font-bold inline-block">
              CONTACT INFO:
            </h3>
            <ul className="space-y-1">
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <a rel="" href="#">
                  +91 92746 82710
                </a>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <a rel="" href="#">
                  ask@bluesoltech.in
                </a>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <a rel="" href="#">
                  102, Solaris Business Hub, Opp. The National Higher Secondary
                  School, Bhuyangdev, Ahmedabad, Gujarat 380013.
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-800 font-bold inline-block">
              Social media:
            </h3>
            <div className="flex justify-start space-x-3">
              <a
                rel=""
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
                <TiSocialTwitter className="text-2xl" />
              </a>
              <a
                rel=""
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
                <TiSocialYoutube className="text-2xl" />
              </a>
              <a
                rel=""
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <TiSocialLinkedin className="text-2xl" />
              </a>
              <a
                rel=""
                href="#"
                title="Youtube"
                className="flex items-center p-1"
              >
                <TiSocialInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © 2023 Blue Soltech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
