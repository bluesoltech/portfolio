import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../assets/img/tmlogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isAbout, setAbout] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {}, [isAbout]);

  const scrollToAbout = () => {
    // console.log("about");
    navigate("/");
    // setAbout(true);

    const aboutPageElement = document.getElementById("about_page");
    // console.log(aboutPageElement);
    if (aboutPageElement) {
      aboutPageElement.scrollIntoView({ behavior: "smooth" });
    } else {
      setTimeout(scrollToAbout, 100);
    }
  };

  const handleContact = () => {
    navigate("/contact");
  };
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-8 sticky">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center w-full">
              <div className="flex-shrink-0">
                <img className="h-12 w-auto" src={logo} alt="Workflow" />
              </div>
              <div className="hidden md:block w-full">
                <div className="ml-10 flex justify-between items-center ">
                  <div>
                    <Link
                      className="mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
                      to="/"
                    >
                      Home
                    </Link>

                    <Link
                      className="mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
                      to="/"
                      onClick={scrollToAbout}
                    >
                      About
                    </Link>

                    <Link
                      className="mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
                      to="/services"
                    >
                      Services
                    </Link>

                    {/* <Link
                      className="mr-4 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-black hover:text-white"
                      to="/blog"
                    >
                      Blog
                      
                    </Link> */}
                  </div>

                  <button
                    onClick={handleContact}
                    className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium "
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          className="absolute z-2 bg-white rounded m-2 right-0 w-[150px] "
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden " id="mobile-menu">
              <div
                ref={ref}
                className=" space-y-1 sm:px-3 flex flex-col justify-center items-center pb-2"
              >
                <Link
                  className="w-full hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  to="/"
                >
                  Home
                </Link>

                <a
                  className="w-full hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  onClick={scrollToAbout}
                >
                  About
                </a>

                <Link
                  className="w-full hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  to="/services"
                >
                  Services
                </Link>

                <Link
                  className="w-full hover:bg-gray-200 text-black block px-3 py-2 rounded-md text-base font-medium text-center"
                  to="/blog"
                >
                  Blog
                </Link>

                <div className="flex ">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 ">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};
export default Navbar;
