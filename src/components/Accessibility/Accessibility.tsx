import "./Accessibility.css";
import { HTMLProps, useEffect, useRef, useState } from "react";
import { CursorProps } from "../../App";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { Elements } from "../Header/Header";
import BlockOne from "../../assets/images/block_1.png";
import BlockTwo from "../../assets/images/block_2.png";
import BlockThree from "../../assets/images/block_3.png";
import BlockFour from "../../assets/images/block_4.png";
import BlockFive from "../../assets/images/block_5.png";

import DecorOne from "../../assets/images/decor_8.png";
import DecorTwo from "../../assets/images/decor_3.png";
import DecorThree from "../../assets/images/decor_7.png";
import DecorFour from "../../assets/images/decor_1.png";
import DecorFive from "../../assets/images/decor_6.png";

import ManBaloon from "../../assets/images/man_baloon.png";

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
    image: DecorFour,
    delay: 0.4,
  },
  {
    image: DecorFive,
    delay: 0.5,
  },
];

export default function About({ ...props }: AboutProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
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

  const blocks = [
    {
      image: BlockOne,
      x: useTransform(scrollYProgress, [0, 0.2], [0, 1]),
      opacity: currentScrollY > 0,
    },
    {
      image: BlockTwo,
      x: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]),
      opacity: currentScrollY > 0.2,
    },
    {
      image: BlockThree,
      x: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
      opacity: currentScrollY > 0.4,
    },
    {
      image: BlockFour,
      x: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
      opacity: currentScrollY > 0.6,
    },
    {
      image: BlockFive,
      x: useTransform(scrollYProgress, [0.8, 1], [0, 1]),
      opacity: currentScrollY > 0.8,
    },
  ];

  const balloonY = useTransform(scrollYProgress, [0, 1], ["-550px", "-300px"]);

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
    <div className="acessibility-scroll-area" ref={targetRef} {...props}>
      <div className="acessibility-container">
        <div className="acessibility-content">
          <h3>
            Transporte <span>Adaptado</span> e Inclusivo
          </h3>
          <p>
            Priorizamos a acessibilidade com recursos que facilitam a mobilidade
            no dia a dia de pessoas com mobilidade reduzida, tornando o Mobiefy
            utilizável para todos.
          </p>
        </div>

        <motion.img
          className={`about-man-baloon`}
          aria-hidden="true"
          src={ManBaloon}
          alt=""
          style={{ bottom: balloonY }}
        />

        <div className="block-container">
          {blocks.map((block, idx) => (
            <motion.img
              key={idx}
              className={`about-block-${idx + 1}`}
              aria-hidden="true"
              src={block.image}
              alt=""
              initial={{ opacity: 0 }}
              animate={{
                opacity: block.opacity ? 1 : 0,
                scale: block.opacity ? 1 : 0.8,
              }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          ))}
        </div>

        {elements.map((element, idx) => (
          <motion.img
            key={idx}
            className={`acessibility-el-${idx + 1}`}
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
