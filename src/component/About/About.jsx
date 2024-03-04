import "./about.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Item({ title, content }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section id="about_page">
      <div className="h-fit py-5 px-2 text-white hover:text-black" ref={ref}>
        <h1 className="w-full  text-center text-2xl ">{title}</h1>
        <figure className="absolute progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        <p className="text-gray-500 text-[11px] text-justify p-2 ">{content}</p>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="relative grid md:grid-cols-2 py-8 md:py-2">
      <div className="absolute w-full text-gray-400 text-center md:top-[46%] text-3xl md:text-7xl ">
        About Us
      </div>
      <Item
        title="Our Mission"
        content="At Blue Soltech, we always strive to build a better business atmosphere through giving out excellent deliveries. The sole of our mission lies in creating amazing, powerful and premium quality products to serve you better."
      />
      <Item
        title="Our Vision"
        content="We see ourselves at the forefront of technological advancements, leading the charge in developing solutions that not only meet the needs of today but anticipate the challenges and opportunities of tomorrow. Our relentless pursuit of innovation ensures that we remain the go-to partner for cutting-edge solutions."
      />
      <Item
        title="Our History"
        content="In the face of industry evolution and technological advancements, Blue Soltech demonstrated remarkable adaptability. We embraced change, pivoted when necessary, and continued to innovate. Our ability to stay ahead of the curve has been a hallmark of our success."
      />
      <Item
        title="Our Goal"
        content="Improve morale and productivity. They give your employees purpose and something to focus their efforts toward, leading to higher job satisfaction. Motivate and engage employees. Employees who know what’s expected of them may feel more empowered to prioritize important tasks and motivated to work hard."
      />
    </div>
  );
}
