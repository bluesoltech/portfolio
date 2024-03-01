import React from "react";
import { motion } from "framer-motion";

const Servicecont = (index) => {
  return (
    <div className="mb-10 flex items-center justify-center w-full px-4 mt-[48px]">
      <div className="max-w-[840px]  p-0 rounded-md">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center text-gray-600 text-white">
            Change the way to NewIT Services
          </h1>

          <p className="text-gray-500 text-lg text-center  mb-11">
            At Blue Soltech we dare to think differently. We create state of the
            art products which push boundaries and inspire users. Our expert
            team of designers and developers build immersive, beautiful and
            streamlined digital products. Our project managers make sure you are
            integral to creative processes and knowledgeable about your project
            from start to finish.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Servicecont;
