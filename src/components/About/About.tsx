import "./About.css";
import { HTMLProps, useEffect, useRef, useState } from "react";
import { CursorProps } from "../../App";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Phone from "../../assets/images/phone_1.png";
import RouteIcon from "../../assets/images/route_icon.png";
import RouteOne from "../../assets/images/route_1.png";
import RouteTwo from "../../assets/images/route_2.png";
import DecorOne from "../../assets/images/decor_1.png";
import DecorTwo from "../../assets/images/decor_6.png";
import DecorThree from "../../assets/images/decor_7.png";
import DecorFour from "../../assets/images/decor_9.png";
import { Elements } from "../Header/Header";

type AboutProps = CursorProps & HTMLProps<HTMLDivElement>;

const elements: Elements[] = [
  {
    image: DecorOne,
    delay: 0.1,
  },
  {
    image: DecorTwo,
    delay: 0.2,
  },
  {
    image: DecorThree,
    delay: 0.3,
  },
  {
    image: DecorThree,
    delay: 0.3,
  },
  {
    image: DecorThree,
    delay: 0.3,
  },
  {
    image: DecorFour,
    delay: 0.4,
  },
];

export default function About({ ...props }: AboutProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end end"],
  });

  const [currentScrollY, setCurrentScrollY] = useState(0);
  useEffect(() => {
    const unsubscribeY = scrollYProgress.on("change", (latest) => {
      setCurrentScrollY(latest);
    });
    return () => {
      unsubscribeY();
    };
  }, [scrollYProgress]);

  const phoneY = useTransform(scrollYProgress, [0, 0.5], ["-450px", "-150px"]);
  const phoneX = useTransform(scrollYProgress, [0, 0.5], ["14%", "17%"]);
  const phoneScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  const elementsVariants = {
    visible: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: { duration: 0.5 },
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
    <div className="about-scroll-area" ref={targetRef} {...props} id="about">
      <div className="about-container">
        <div className="about-content">
          <h3>
            Rotas <span>Multimodais</span> Integradas
          </h3>
          <p>
            Mobiefy combina diversos meios de transporte disponíveis nas
            cidades, oferecendo rotas integradas e ajustáveis conforme suas
            necessidades de mobilidade.
          </p>
        </div>
        <motion.div
          className="phone-container"
          style={{
            top: phoneY,
            scale: phoneScale,
            right: phoneX,
          }}
        >
          <img className="phone" aria-hidden="true" src={Phone} alt="" />
          <motion.img
            className="route-icon"
            aria-hidden="true"
            src={RouteIcon}
            alt=""
            style={{
              right: currentScrollY > 0.5 ? "-10px" : "40px",
              scale: currentScrollY > 0.5 ? 1.4 : 1,
              top: currentScrollY > 0.5 ? "290px" : "305px",
              boxShadow:
                currentScrollY > 0.5
                  ? "-11px 8px 53.8px 0px rgba(0, 0, 0, 0.15)"
                  : "none",
            }}
          />
          <motion.img
            className="route-one"
            aria-hidden="true"
            src={RouteOne}
            alt=""
            style={{
              right: currentScrollY > 0.65 ? "230px" : "40px",
              scale: currentScrollY > 0.65 ? 1.2 : 1,
              top: currentScrollY > 0.65 ? "500px" : "477px",
              boxShadow:
                currentScrollY > 0.65
                  ? "39.349px 23.146px 127.652px 0px rgba(0, 0, 0, 0.13)"
                  : "none",
            }}
          />
          <motion.img
            className="route-two"
            aria-hidden="true"
            src={RouteTwo}
            alt=""
            style={{
              right: currentScrollY > 0.8 ? "-50px" : "40px",
              scale: currentScrollY > 0.8 ? 1.2 : 1,
              top: currentScrollY > 0.8 ? "730px" : "710px",
              boxShadow:
                currentScrollY > 0.8
                  ? "39.349px 23.146px 127.652px 0px rgba(0, 0, 0, 0.13)"
                  : "none",
            }}
          />
        </motion.div>
        {elements.map((element, idx) => (
          <motion.img
            key={idx}
            className={`about-el-${idx + 1}`}
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
    </div>
  );
}
