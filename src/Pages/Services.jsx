import React from "react";
import Hero from "../component/Hero";
import Servicecont from "../component/Servicecont";
import Servicestype from "../component/Servicestype";
import img3 from "../assets/img/human-brain-detailed-structure.jpg";

const Services = () => {
  return (
    <div className="!overflow-y-hidden bg-[#0F0E0E] text-white">
      {/* <Hero title="Our Services" subtitle=" Service" imagePath={img3} /> */}
      <Servicecont />
      <Servicestype />
    </div>
  );
};

export default Services;
