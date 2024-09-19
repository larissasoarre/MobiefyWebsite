import "./Conclusion.css";
import { CursorProps } from "../../App";
import { useEffect, useRef } from "react";
import Button from "../Button/Button";
import { Elements } from "../Header/Header";
import { motion, useAnimation, useInView } from "framer-motion";

import DecorOne from "../../assets/images/decor_1.png";
import DecorTwo from "../../assets/images/decor_3.png";
import DecorThree from "../../assets/images/decor_5.png";
import DecorFour from "../../assets/images/decor_6.png";
import DecorFive from "../../assets/images/decor_7.png";
import DecorSix from "../../assets/images/decor_11.png";

const elements: Elements[] = [
  {
    image: DecorOne,
    delay: 0.1,
  },
  {
    image: DecorOne,
    delay: 0.2,
  },
  {
    image: DecorTwo,
    delay: 0.3,
  },
  {
    image: DecorThree,
    delay: 0.4,
  },
  {
    image: DecorFour,
    delay: 0.5,
  },
  {
    image: DecorFive,
    delay: 0.6,
  },
  {
    image: DecorFive,
    delay: 0.7,
  },
  {
    image: DecorFive,
    delay: 0.8,
  },
  {
    image: DecorSix,
    delay: 0.9,
  },
];

export default function Conclusion({ cursorEnter, cursorLeave }: CursorProps) {
  const targetRef = useRef(null);

  const elementsVariants = {
    visible: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 0.5, delay: 1 },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  const controls = useAnimation();
  const ref = useRef<HTMLImageElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="conclusion-container" ref={targetRef}>
      <svg
        className="conclusion-decoration"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1512 251"
        fill="none"
      >
        <path
          d="M0 0H1512V130C1042.5 293.5 495.5 289 0 130V0Z"
          fill="#322E53"
        />
      </svg>
      <div className="conclusion-content">
        <h3>De norte a sul, mova-se com liberdade e eficiência</h3>
        <Button
          onMouseEnter={cursorEnter}
          onMouseLeave={cursorLeave}
          onClick={() =>
            window.open(
              "https://github.com/larissasoarre/Mobiefy",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          Download App
        </Button>
      </div>
      {elements.map((element, idx) => (
        <motion.img
          key={idx}
          className={`conclusion-el-${idx + 1}`}
          aria-hidden="true"
          src={element.image}
          alt=""
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={elementsVariants}
        />
      ))}
    </div>
  );
}
