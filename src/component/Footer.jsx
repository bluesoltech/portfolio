import React from "react";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import logo from "../assets/img/tmlogo.png";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-100 dark:text-gray-100">
      <div className="container flex text-black flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 flex justify-start">
          <a rel="noopener noreferrer" href="/">
            <div className="flex items-center justify-center rounded-full">
              <img className="xl:w-[60px] w-[40px]" src={logo} />
            </div>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-sm gap-3 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="tracki uppercase dark:text-gray-800 text-[17px] font-bold inline-block">
              OUR SERVICES
            </h3>
            <ul className="space-y-3">
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
          <div className="space-y-6">
            <h3 className="tracki uppercase dark:text-gray-800 text-[17px] font-bold inline-block">
              CONTACT INFO
            </h3>
            <ul className="space-y-1">
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <a rel="" href="tel:92746 82710">
                  +91 92746 82710
                </a>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">

                <a className="text-indigo-500 cursor-pointer" href="mailto:info@bluesoltech.com ?">
                  info@bluesoltech.com
                </a>
              </li>
              <li className="p-1 transition-all duration-300 hover:text-blue-800 text-base">
                <a rel="" href="https://maps.app.goo.gl/KXDqPFBpxQz7us5p7">
                  102, Solaris Business Hub, Opp. The National Higher Secondary
                  School, Bhuyangdev, Ahmedabad, Gujarat 380063
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="tracki uppercase dark:text-gray-800 text-[17px] font-bold inline-block">
              Join us on social media
            </h3>
            <div className="flex justify-start space-x-3">
              <Link to="https://www.instagram.com/bluesoltech.__/"></Link>
              <a
                rel=""
                href="https://twitter.com/bluesoltech__ ?"
                title="Twitter"
                className="flex items-center p-1"
              >
                <TiSocialTwitter className="text-2xl" />
              </a>
              <a
                rel=""
                href="https://www.youtube.com/@BlueSoltech"
                title="Youtube"
                className="flex items-center p-1"
              >
                <TiSocialYoutube className="text-2xl" />
              </a>
              {/* <a
                rel=""
                href="https://www.linkedin.com/company/bluesoltech ?"
                title="Linkedin"
                className="flex items-center p-1"
              >
                <TiSocialLinkedin className="text-2xl" />
              </a> */}
              <a
                rel=""
                href="https://www.facebook.com/Bluesoltech/"
                title="Linkedin"
                className="flex items-center p-1"
              >
                <FaFacebookF className="text-2xl" />
              </a>
              <a
                rel=""
                href="https://www.instagram.com/bluesoltech.__/ ?"
                title="Instagram"
                className="flex items-center p-1"
              >
                <TiSocialInstagram className="text-2xl" />
              </a>
              <a
                rel=""
                href="https://in.pinterest.com/bluesoltech12/"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaPinterestP className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        @ 2023 Blue Soltech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;