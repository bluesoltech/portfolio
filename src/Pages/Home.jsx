import React, { useState, useEffect, useRef } from "react";
import Services from "../component/Services";
import Logoslider from "../component/Logoslider";
import pc from "../assets/img/sa.webp";
import About from "../component/About/About";
import { Link } from "react-router-dom";

// import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [card, setCard] = useState("1");
  const [loadmore, setLoadamore] = useState(true);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;
  return (
    <div className="bg-[#0F0E0E]">
      <div className="h-[95vh] flex flex-col items-center justify-evenly bg-[#0F0E0E] text-white">
        <p className="text-4xl leading-[60px] md:text-7xl text-center font-[poppins] md:leading-[110px]">
          <div className="z-4 absolute w-[150px] h-[50px] border-white border-[1px] rounded-[100%] rotate-[-30deg] transition-all duration-300 hover:rotate-[30deg] "></div>
          We provide<br></br> IT Solutions for <br></br>your{" "}
          <span className="font-bold ">TASTE</span>
        </p>
        <div className="w-full">
          <Logoslider />
        </div>
      </div>
      <div className="flex justify-center items-center  mb-8">
        <div className="flex flex-col justify-center items-center md:w-[65%] 2xl:w-[65%] p-4">
          <div className="flex flex-col-reverse md:flex-row justify-between w-full">
            <div className="flex flex-col md:w-[50%] justify-around ">
              <p className="text-2xl text-center md:text-3xl md:text-start lg:text-5xl text-white p-2 transition-all duration-300 hover:rotate-[-2deg]">
                Solution to your digital Problems
              </p>
              <p className="text-sm text-center text-gray-500 py-4 w-full md:text-[25px] md:text-start md:flex md:justify-start transition-all duration-300 hover:rotate-[-2deg]">
                10 YEARS OF EXPERIENCE IN OUTSOURCING
              </p>
            </div>
            <div
              className="w-full md:w-[50%] h-auto transition-all duration-300 hover:rotate-2"
              s
            >
              {/* <div className="absolute">Hi! Nice to meet you</div> */}
              <img className="w-full h-auto object-contain" src={pc} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 md:flex-row p-6 transition-all duration-300">
        <div
          id="1"
          onClick={(e) => {
            // console.log(e);
            setCard(e.target.id.toString());
          }}
          className={
            card == "1"
              ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300 "
              : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
          }
        >
          {card == "1" || isMobile ? (
            <div
              id="1"
              className="flex flex-col h-full justify-between items-center p-3"
            >
              <div>
                <h1 id="1" className="text-3xl  mb-3 xl:mt-5">
                  Cyber Security
                </h1>
                <p id="1" className="text-md  text-gray-500">
                  Cybersecurity is the practice of protecting computer systems,
                  networks, and data from theft, damage, unauthorized access, or
                  other cyber threats. As technology continues to advance, the
                  importance of cybersecurity has grown exponentially. Here are
                  key aspects of cybersecurity
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Link to="/services/cyber">
                  <button className="bg-gray-200 hover:bg-black hover:text-white p-2 rounded-xl text-black">
                    Click here
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <h1
              id="1"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
              className="text-3xl md:text-2xl mx-auto "
            >
              CYBER SECURITY
            </h1>
          )}
        </div>
        <div
          id="2"
          onClick={(e) => {
            setCard(e.target.id.toString());
          }}
          className={
            card == "2"
              ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
              : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
          }
        >
          {card == "2" || isMobile ? (
            <div
              id="2"
              className="flex flex-col h-full justify-between items-center p-3"
            >
              <div>
                <h1 id="2" className="text-3xl  mb-3 xl:mt-5">
                  Web Development
                </h1>
                <p id="2" className="text-md  text-gray-500">
                  Web development involves the creation and maintenance of
                  websites and web applications. It encompasses a range of
                  tasks, including web design, front-end and back-end
                  development, database management, and server configuration.
                  Here's an overview of key aspects of web development.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Link to="/services/web">
                  <button className="bg-gray-200 hover:bg-black hover:text-white p-2 rounded-xl text-black">
                    Click here
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <h1
              id="2"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
              className="text-3xl md:text-2xl mx-auto"
            >
              WEB DEVELOPMENT
            </h1>
          )}
        </div>
        <div
          id="3"
          onClick={(e) => {
            setCard(e.target.id.toString());
          }}
          className={
            card == "3"
              ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
              : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
          }
        >
          {card == "3" || isMobile ? (
            <div
              id="3"
              className="flex flex-col h-full justify-between items-center p-3"
            >
              <div>
                <h1 id="3" className="text-3xl mb-3 xl:mt-5">
                  App Development
                </h1>
                <p id="3" className="text-md  text-gray-500">
                  App development is the process of creating an application that
                  performs specific functions. It’s carried out by software
                  developers and relies on a variety of tools and approaches.
                </p>
              </div>
              <div className="w-full flex justify-end">
                <Link to="/services/app">
                  <button className="bg-gray-200 hover:bg-black hover:text-white p-2 rounded-xl text-black">
                    Click here
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <h1
              id="3"
              style={{
                writingMode: "vertical-lr",
                textOrientation: "upright",
              }}
              className="text-3xl md:text-2xl mx-auto"
            >
              APP DEVELOPMENT
            </h1>
          )}
        </div>
        {loadmore && isMobile && (
          <button
            onClick={() => {
              setLoadamore(false);
            }}
            className="border-[1px] border-white p-2 text-white rounded"
          >
            See all services
          </button>
        )}
        {(!loadmore || !isMobile) && (
          <div
            id="4"
            onClick={(e) => {
              setCard(e.target.id.toString());
            }}
            className={
              card == "4"
                ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
                : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
            }
          >
            {card == "4" || isMobile ? (
              <div
                id="4"
                className="flex flex-col h-full justify-between items-center p-3"
              >
                <div>
                  <h1 id="4" className="text-3xl  mb-3 xl:mt-5">
                    Data Analytics
                  </h1>
                  <p id="4" className="text-md  text-gray-500">
                    Data analytics involves examining and interpreting data to
                    extract valuable insights and support decision-making
                    processes. It encompasses a variety of techniques and
                    approaches to analyze structured and unstructured data. Here
                    are key aspects of data analytics.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <Link to="/services/data">
                    <button className="bg-gray-200 hover:bg-black hover:text-white p-2 rounded-xl text-black">
                      Click here
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <h1
                id="4"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className="text-3xl md:text-2xl mx-auto"
              >
                DATA ANALYTICS
              </h1>
            )}
          </div>
        )}

        {(!loadmore || !isMobile) && (
          <div
            id="6"
            onClick={(e) => {
              setCard(e.target.id.toString());
            }}
            className={
              card == "6"
                ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
                : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px] md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
            }
          >
            {card == "6" || isMobile ? (
              <div
                id="6"
                className="flex flex-col h-full justify-between items-center p-3"
              >
                <div>
                  <h1 id="6" className="text-3xl  mb-3 xl:mt-5">
                    SEO optimization
                  </h1>
                  <p id="6" className="text-md  text-gray-500">
                    Search Engine Optimization (SEO) is the practice of
                    enhancing a website's visibility on search engines like
                    Google, Bing, and Yahoo. The goal is to improve the
                    website's ranking in search engine results pages (SERPs) for
                    relevant keywords, thereby attracting more organic
                    (non-paid) traffic. Here are key aspects of SEO
                    optimization.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <Link to="/services/seo">
                    <button className="bg-gray-200 hover:bg-black hover:text-white p-2 rounded-xl text-black">
                      Click here
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <h1
                id="6"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className=" text-3xl md:text-2xl mx-auto"
              >
                SEO OPTIMIZATION
              </h1>
            )}
          </div>
        )}
        {(!loadmore || !isMobile) && (
          <div
            id="7"
            onClick={(e) => {
              setCard(e.target.id.toString());
            }}
            className={
              card == "7"
                ? "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[500px]  md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-300"
                : "hover:bg-white hover:text-black text-white cursor-pointer w-full h-auto md:w-[100px]  md:h-[480px] lg:h-[400px] border-[1px] border-white rounded transition-all duration-1000"
            }
          >
            {card == "7" || isMobile ? (
              <div
                id="7"
                className="flex flex-col h-full justify-between items-center p-3"
              >
                <div>
                  <h1 id="7" className="text-3xl mb-3 xl:mt-5">
                    Graphic Design
                  </h1>
                  <p id="7" className="text-md  text-gray-500">
                    Graphic design is a creative process that involves visual
                    communication and the use of visual elements to convey a
                    message, tell a story, or present information. Graphic
                    designers use a combination of images, typography, color,
                    and layout techniques to create visually appealing and
                    effective designs. Here are key aspects of graphic design.
                  </p>
                </div>
                <div className="w-full flex justify-end">
                  <Link to="/services/graphic">
                    <button className="bg-gray-200 hover:bg-black hover:text-white p-2 rounded-xl text-black">
                      Click here
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              <h1
                id="7"
                style={{
                  writingMode: "vertical-lr",
                  textOrientation: "upright",
                }}
                className="text-3xl md:text-2xl mx-auto"
              >
                GRAPHIC DESIGN
              </h1>
            )}
          </div>
        )}
      </div>
      <About />
      <Services />
      <div className="w-full flex justify-center pb-8">
        <div className="w-[65%] grid md:grid-cols-2">
          <div className="text-5xl lg:text-7xl text-white p-4 h-[50vh] flex items-center text-center">
            Let's Solve All Your DIGITAL Problems
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-gray-500 md:text-2xl lg:text-4xl text-center mb-4">
              Give us a ping!<br></br> We will contact you.
            </h1>
            <Link to="/contact">
              <button className="bg-white py-1 px-3 rounded-xl focus:border-none hover:bg-gray-200">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
