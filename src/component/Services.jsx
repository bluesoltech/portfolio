import React from "react";
import { FaAward } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { MdSupportAgent } from "react-icons/md";

const Services = () => {
  return (
    <div className="bg-[#0F0E0E] p-6 ">
      <div className="md:w-[65%] md:m-auto">
        <div className="mb-[5%]">
          <h1 className="mb-2 md:mb-8 text-md md:text-2xl text-white font-[poppins]">
            EXCLUSIVE SERVICES
          </h1>
          <h5 className="mb-2 text-2xl  md:text-5xl text-white font-[poppins] md:leading-[65px]">
            We deliver high-quality services for our clients{" "}
            <span className="text-gray-500">
              and guarantee the 100% money-back policy
            </span>
          </h5>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 group overflow-hidden transition-all duration-1000 mx-auto hover:border-white">
            <FaAward className=" text-5xl text-gray-400  mb-3" />
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white">
              Award Winning
            </h5>

            {/* <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              fuga nihil accusamus esse expedita sit dignissimos quis excepturi
              quia enim, labore consequuntur amet illo. Voluptatibus!
            </p> */}
          </div>
          <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 group overflow-hidden transition-all duration-500 mx-auto hover:border-white">
            <FaPeopleGroup className=" text-5xl text-gray-400  mb-3" />

            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white">
              Professional Staff
            </h5>

            {/* <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              fuga nihil accusamus esse expedita sit dignissimos quis excepturi
              quia enim, labore consequuntur amet illo. Voluptatibus!
            </p> */}
          </div>
          <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 group overflow-hidden transition-all duration-1000 mx-auto hover:border-white">
            <FiMonitor className=" text-5xl text-gray-400  mb-3" />

            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white">
              Web Development
            </h5>

            {/* <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              fuga nihil accusamus esse expedita sit dignissimos quis excepturi
              quia enim, labore consequuntur amet illo. Voluptatibus!
            </p> */}
          </div>
          <div class="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 group overflow-hidden transition-all duration-1000 mx-auto hover:border-white">
            <MdSupportAgent className=" text-5xl text-gray-400  mb-3" />

            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-400 dark:text-white">
              24X7 Support
            </h5>

            {/* <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
              fuga nihil accusamus esse expedita sit dignissimos quis excepturi
              quia enim, labore consequuntur amet illo. Voluptatibus!
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;