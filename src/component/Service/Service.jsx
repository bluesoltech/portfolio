import React, { useEffect, useState } from "react";
import { IoIosPricetag } from "react-icons/io";
import axios from "axios";
// import TypesOfServices from "../../component/TypesOfServices";
// import img3 from "../../assets/img/human-brain-detailed-structure.jpg";
// import Packages from "../../component/Packages";
// import services from "../../assets/data/Service.js";

const Service = ({ data }) => {
  //   const gridlength = "grid-cols-" + service.packagesData.length;
  const [country, setCountry] = useState("");
  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        setCountry(data.country_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);
  // console.log(country);
  const renderPlanList = () => {
    return (
      <div className=" m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm justify-between gap-5">
        {data.plans.map((plan, index) => (
          <div
            key={index}
            className=" p-5 bg-black w-full xl:w-[300px] h-full m-2 mx-auto rounded-lg flex flex-col xl:h-[400px] "
          >
            <div className=" rounded-t-md h-[20%] flex items-center justify-between">
              <p className="text-gray-300 text-center font-semibold text-lg uppercase">
                {plan.plan_title}
              </p>
              <div className="p-2 bg-gray-300 flex items-center justify-center w-fit h-fit  text-9xl z-[999] rounded-[50%] aspect-square">
                <p className="text-gray-500 text-sm">
                  {country == "India" ? plan.plan_price_inr : plan.plan_price}
                </p>
              </div>
            </div>
            <div className="p-6 flex flex-col justify-evenly h-[80%]  overflow-y-auto">
              <p className="text-gray-300 text-lg font-light leading-7 text-center">
                {plan.plan_headline}
              </p>
              <ul className="list-decimal list-inside mx-1 h-full">
                {plan.key.map((service, i) => {
                  return (
                    <li key={i} className="my-1.5 text-gray-500 text-sm">
                      {service}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="bg-[#0F0E0E] p-2">
      <div className=" flex flex-col gap-10 items-center justify-evenly bg-[#0F0E0E] text-white">
        <div className="h-fit lg:w-[50%] flex flex-col gap-[50px]">
          <div className="w-full flex justify-center items-center text-center">
            <h1 className="font-semibold text-white text-6xl">{data.title}</h1>
          </div>
          <div className=" flex justify-center">
            <img
              src={data.hero_img_url}
              alt="no_img"
              className="w-[70%] rounded"
            />
          </div>
          <div className="flex justify-center items-center text-center">
            <p className="  text-justify text-gray-500 text-[1rem] leading-7">
              {data.overview}
            </p>
          </div>
        </div>
        <div className="h-fit  lg:flex gap-5 items-center justify-center">
          <div className="lg:w-[50%] h-full flex items-center justify-center">
            <img
              src={data.why_img_url}
              alt="no_img"
              className="rounded-lg w-[50%]"
            />
          </div>
          <div className="lg:w-[50%] h-full flex flex-col items-center p-4 gap-10 justify-center">
            <div className="xl:w-[60%] 2xl:w-[50%] flex flex-col items-center p-4 gap-10 justify-center">
              <h1 className="text-4xl text-white">{data.why_title}</h1>
              <p className="text-gray-500 text-justify leading-7">
                {data.why_content}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="xl:mt-[120px] mt-[60px]">
            <h1 className="font-bold items-start xl:items-start justify-start xl:justify-start text-center mb-6 text-gray-300 text-2xl xl:text-3xl">
              Let Us Find Plans
            </h1>
            {renderPlanList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;