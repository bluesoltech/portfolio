import React, { useEffect } from "react";
import img1 from "../assets/img/cyber.png";
import img2 from "../assets/img/data.png";
import img3 from "../assets/img/wab.png";
import img4 from "../assets/img/app.png";
import img5 from "../assets/img/seo.png";
import img6 from "../assets/img/Graphic.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Servicestype = (index) => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto mt-0 mb-8">
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
          <h5 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-white">
            Key Services<br></br>For Your Business
          </h5>
        </motion.div>
        <div className="flex flex-col mt-6 sm:flex-row">
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
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black-600">
                Cyber Security
              </h1>
              <p className="text-gray-500">
                Cybersecurity is the practice of protecting computer systems,
                networks, and data from theft, damage, unauthorized access, or
                other cyber threats. As technology continues to advance, the
                importance of cybersecurity has grown exponentially. Here are
                key aspects of cybersecurity.
              </p>
              <Link to="/services/cyber">
                <button className="my-4 bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
                  Go to page
                </button>
              </Link>
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
                className="w-[300px] h-auto object-cover"
                src={img1}
                alt="Right Side Image"
              />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col mt-3 sm:flex-row">
          <div className="w-full sm:w-1/2">
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
                className="w-[300px] object-cover"
                src={img2}
                alt="Right Side Image"
              />
            </motion.div>
          </div>
          {/* Right side image */}
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
            <div className="w-full sm:w-[550px] p-4 sm:p-10">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black-600">
                Data Analytics
              </h1>
              <p className="text-gray-500">
                Data analytics involves examining and interpreting data to
                extract valuable insights and support decision-making processes.
                It encompasses a variety of techniques and approaches to analyze
                structured and unstructured data. Here are key aspects of data
                analytics.{" "}
              </p>
              <Link to="/services/data">
                <button className="my-4 bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
                  Go to page
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col mt-3 sm:flex-row">
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
            <div className="w-full sm:w-[550px] p-4 sm:p-10">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black-600">
                Web Development
              </h1>
              <p className="text-gray-500">
                Web development involves the creation and maintenance of
                websites and web applications. It encompasses a range of tasks,
                including web design, front-end and back-end development,
                database management, and server configuration. Here's an
                overview of key aspects of web development.{" "}
              </p>
              <Link to="/services/web">
                <button className="my-4 bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
                  Go to page
                </button>
              </Link>
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
                className="w-[300px] h-auto object-cover"
                src={img3}
                alt="Right Side Image"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col mt-3 sm:flex-row">
          {/* Left side content */}

          <div className="w-full sm:w-1/2 ">
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
                className="w-[320px] object-cover"
                src={img4}
                alt="Right Side Image"
              />
            </motion.div>
          </div>
          {/* Right side image */}
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
            <div className="w-full sm:w-[550px] p-4 sm:p-10">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black-600">
                Apps Development
              </h1>
              <p className="text-gray-500">
                App development is the process of creating an application that
                performs specific functions. It’s carried out by software
                developers and relies on a variety of tools and approaches.{" "}
              </p>
              <Link to="/services/app">
                <button className="my-4 bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
                  Go to page
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col mt-3 sm:flex-row">
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
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black-600">
                SEO Optimization{" "}
              </h1>
              <p className="text-gray-500">
                Search Engine Optimization (SEO) is the practice of enhancing a
                website's visibility on search engines like Google, Bing, and
                Yahoo. The goal is to improve the website's ranking in search
                engine results pages (SERPs) for relevant keywords, thereby
                attracting more organic (non-paid) traffic. Here are key aspects
                of SEO optimization.{" "}
              </p>
              <Link to="/services/seo">
                <button className="my-4 bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
                  Go to page
                </button>
              </Link>
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
                className="w-[300px] h-auto object-cover"
                src={img5}
                alt="Right Side Image"
              />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col mt-3 sm:flex-row">
          {/* Left side content */}

          <div className="w-full sm:w-1/2 ">
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
                className="w-[320px] object-cover"
                src={img6}
                alt="Right Side Image"
              />
            </motion.div>
          </div>
          {/* Right side image */}
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
            <div className="w-full sm:w-[550px] p-4 sm:p-10">
              <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-black-600">
                Graphic Design
              </h1>
              <p className="text-gray-500">
                Graphic design is a creative process that involves visual
                communication and the use of visual elements to convey a
                message, tell a story, or present information. Graphic designers
                use a combination of images, typography, color, and layout
                techniques to create visually appealing and effective designs.
                Here are key aspects of graphic design.
              </p>{" "}
              <Link to="/services/graphic">
                <button className="my-4 bg-blue-500 px-3 py-1 rounded hover:bg-blue-700">
                  Go to page
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Servicestype;
