import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/cyber.png";

const About = (index) => {
  const [activeTab, setActiveTab] = useState("first");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const products = [
    { name: "Award Winning", icon: "▶" },
    { name: "Professional Staff", icon: "▶" },
    { name: "Web Developing", icon: "▶" },
    { name: "24/7 Support", icon: "▶" },
    // Add more products as needed
  ];
  return (
    <div id="about_page">
      <div className="container flex flex-col justify-center items-center mx-auto mt-8 max-w-screen-xl">
        <motion.div
          className="card"
          initial={{
            opacity: 0,
            // if odd index card, slide from right instead of left
            y: index % 2 === 0 ? -50 : 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
        >
          {/* <h5 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-gray-600">
            About Company
          </h5> */}
        </motion.div>

        {/* <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-4">
            <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card, slide from right instead of left
                x: index % 2 === 0 ? 50 : -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              <img
                className="object-cover w-full h-64 lg:h-full"
                src={img1} // Replace with your image URL
                alt="Right Side Image"
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2 p-4">
            <motion.div
              className="card"
              initial={{
                opacity: 0,
                // if odd index card, slide from right instead of left
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0, // Slide in to its original position
                transition: {
                  duration: 1, // Animation duration
                },
              }}
              viewport={{ once: true }}
            >
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 text-gray-600">
                The Best IT Solution
              </h1>

              <p className="mb-4 text-gray-600">
                “Once a new technology rolls over you, if you're not part of the
                steamroller, you're part of the road.”
              </p>
              <p className="mb-4 text-gray-600">
                With a team of highly skilled engineers adept in the latest
                software standards, we leverage our extensive knowledge to
                provide tailored solutions that meet client needs, expectations,
                and budgets. By prioritizing client satisfaction, we are proud
                to maintain support for our first business client. Our
                commitment to excellence and attention to detail ensures we
                exceed expectations, while our adaptability and expertise drive
                success for both new and longstanding clients.
              </p>

               <ul className="list-disc p-4">
                {products.map((product, index) => (
                  <li key={index} className="flex items-center mb-2 text-gray-600">
                    <span className="mr-2">{product.icon}</span>
                    <span>{product.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div> */}
      </div>
      <div className="border w-[1220px] mx-auto mt-4 shadow-lg p-6 mb-6 bg-transparent rounded-md ">
        {/* Tabs */}
        <ul className="inline-flex pt-2 px-1 w-full border-b text-white">
          <li
            className={`px-4 font-semibold py-2 rounded-t  ${
              activeTab === "first"
                ? "bg-slate-100 border-t border-r border-l -mb-px text-black"
                : ""
            }`}
          >
            <div
              onClick={() => handleTabClick("first")}
              className="cursor-pointer"
            >
              Our Mission
            </div>
          </li>
          <li
            className={`px-4 font-semibold py-2 rounded-t  ${
              activeTab === "second"
                ? "bg-slate-100 border-t border-r border-l text-black -mb-px"
                : ""
            }`}
          >
            <div
              onClick={() => handleTabClick("second")}
              className="cursor-pointer"
            >
              Our Vision
            </div>
          </li>
          <li
            className={`px-4 font-semibold py-2 rounded-t  ${
              activeTab === "third"
                ? "bg-slate-100 border-t border-r border-l text-black -mb-px"
                : ""
            }`}
          >
            <div
              onClick={() => handleTabClick("third")}
              className="cursor-pointer"
            >
              Our History
            </div>
          </li>
          <li
            className={`px-4 font-semibold py-2 rounded-t  ${
              activeTab === "fourth"
                ? "bg-slate-100 border-t border-r border-l text-black -mb-px"
                : ""
            }`}
          >
            <div
              onClick={() => handleTabClick("fourth")}
              className="cursor-pointer"
            >
              Our Goal
            </div>
          </li>
        </ul>

        {/* Tab Contents */}
        <div id="tab-contents ">
          <div
            id="first"
            className={`p-4 ${activeTab === "first" ? "" : "hidden"}`}
          >
            <div className="flex flex-col pt-6 sm:flex-row bg-slate-100 bg-transparent ">
              <motion.div
                className="card"
                initial={{
                  opacity: 0,
                  // if odd index card, slide from right instead of left
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                {/* Left side content */}
                <div className="w-full sm:w-[550px] p-4 sm:p-10">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
                    Our Mission
                  </h1>
                  <p className="text-gray-300">
                    We take pride in preserving the highly valued services.
                  </p>
                  <p className="text-gray-600">
                    At Blue Soltech, we always strive to build a better business
                    atmosphere through giving out excellent deliveries. The sole
                    of our mission lies in creating amazing, powerful and
                    premium quality products to serve you better.
                  </p>
                  {/* Add more content as needed */}
                </div>
              </motion.div>

              {/* Right side image */}
              <div className="w-full sm:w-1/2 order-first sm:order-last">
                <motion.div
                  className="card"
                  initial={{
                    opacity: 0,
                    // if odd index card, slide from right instead of left
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    className="h-auto object-cover"
                    src={img1}
                    alt="Right Side Image"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div
            id="second"
            className={`p-4 ${activeTab === "second" ? "" : "hidden"}`}
          >
            <div className="flex flex-col mt-6 sm:flex-row bg-slate-100 bg-transparent">
              <motion.div
                className="card"
                initial={{
                  opacity: 0,
                  // if odd index card, slide from right instead of left
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                {/* Left side content */}
                <div className="w-full sm:w-[550px] p-4 sm:p-10">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
                    Our Vision
                  </h1>
                  <p className="text-gray-300">
                    Pioneering Technological Frontiers
                  </p>
                  <p className="text-gray-600">
                    We see ourselves at the forefront of technological
                    advancements, leading the charge in developing solutions
                    that not only meet the needs of today but anticipate the
                    challenges and opportunities of tomorrow. Our relentless
                    pursuit of innovation ensures that we remain the go-to
                    partner for cutting-edge solutions.
                  </p>
                  {/* Add more content as needed */}
                </div>
              </motion.div>

              {/* Right side image */}
              <div className="w-full sm:w-1/2 order-first sm:order-last">
                <motion.div
                  className="card"
                  initial={{
                    opacity: 0,
                    // if odd index card, slide from right instead of left
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    className="h-auto object-cover"
                    src={img1}
                    alt="Right Side Image"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div
            id="third"
            className={`p-4 ${activeTab === "third" ? "" : "hidden"}`}
          >
            <div className="flex flex-col mt-6 sm:flex-row bg-slate-100 bg-transparent">
              <motion.div
                className="card"
                initial={{
                  opacity: 0,
                  // if odd index card, slide from right instead of left
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                {/* Left side content */}
                <div className="w-full sm:w-[550px] p-4 sm:p-10">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
                    Our History
                  </h1>
                  <p className="text-gray-300">
                    Building Tomorrow: The Legacy of Blue Soltech
                  </p>
                  <p className="text-gray-600">
                    We see ourselves at the forefront of technological
                    advancements, leading the charge in developing solutions
                    that not only meet the needs of today but anticipate the
                    challenges and opportunities of tomorrow. Our relentless
                    pursuit of innovation ensures that we remain the go-to
                    partner for cutting-edge solutions.
                  </p>
                  {/* Add more content as needed */}
                </div>
              </motion.div>

              {/* Right side image */}
              <div className="w-full sm:w-1/2 order-first sm:order-last">
                <motion.div
                  className="card"
                  initial={{
                    opacity: 0,
                    // if odd index card, slide from right instead of left
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    className=" h-auto object-cover"
                    src={img1}
                    alt="Right Side Image"
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div
            id="fourth"
            className={`p-4 ${activeTab === "fourth" ? "" : "hidden"}`}
          >
            <div className="flex flex-col mt-6 sm:flex-row bg-slate-100 bg-transparent">
              <motion.div
                className="card"
                initial={{
                  opacity: 0,
                  // if odd index card, slide from right instead of left
                  x: index % 2 === 0 ? 50 : -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0, // Slide in to its original position
                  transition: {
                    duration: 1, // Animation duration
                  },
                }}
                viewport={{ once: true }}
              >
                {/* Left side content */}
                <div className="w-full sm:w-[550px] p-4 sm:p-10">
                  <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-white">
                    Our Goal
                  </h1>
                  <p className="text-gray-300">
                    Empowering Progress: Unveiling Our Strategic Goals as a
                    Leader
                  </p>
                  <p className="text-gray-600">
                    In the dynamic realm of the IT sector, our overarching goal
                    is to redefine excellence through a strategic and visionary
                    approach. At the core of our mission lies a commitment to
                    innovation, anticipating and adapting to the evolving
                    technological landscape. We aim to position ourselves as
                    pioneers, driving progress and setting new standards in the
                    industry.
                  </p>
                  {/* Add more content as needed */}
                </div>
              </motion.div>

              {/* Right side image */}
              <div className="w-full sm:w-1/2 order-first sm:order-last">
                <motion.div
                  className="card"
                  initial={{
                    opacity: 0,
                    // if odd index card, slide from right instead of left
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <img
                    className=" h-auto object-cover"
                    src={img1}
                    alt="Right Side Image"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
