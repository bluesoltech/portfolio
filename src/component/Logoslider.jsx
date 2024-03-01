import { useState, useEffect } from "react";
import Slider from "react-infinite-logo-slider";

import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaVuejs,
  FaGitAlt,
  FaPython,
  FaAws,
  FaFigma,
} from "react-icons/fa";
import {
  SiAdobeaftereffects,
  SiAdobexd,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiCanva,
  SiWebflow,
} from "react-icons/si";

const Logoslider = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Slider
      width={windowSize[0] > 700 ? "200px" : "125px"}
      duration={20}
      pauseOnHover={true}
      blurBorders={false}
      blurBoderColor={"#fff"}
    >
      <Slider.Slide>
        <FaReact className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaNodeJs className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaAngular className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaHtml5 className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaCss3 className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaVuejs className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaGitAlt className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaPython className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaAws className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <FaFigma className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <SiAdobepremierepro className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <SiAdobephotoshop className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <SiAdobeillustrator className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <SiAdobexd className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <SiAdobeaftereffects className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <SiCanva className="text-5xl" />
      </Slider.Slide>
      <Slider.Slide>
        <SiWebflow className="text-5xl" />
      </Slider.Slide>
    </Slider>
  );
};

export default Logoslider;
