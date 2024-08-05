import "./Header.css";
import Button from "../Button/Button";
import { CursorProps } from "../../App";
import { HTMLProps } from "react";
import { motion } from "framer-motion";
import DecorOne from "../../assets/images/decor_1.png";
import DecorTwo from "../../assets/images/decor_2.png";
import DecorThree from "../../assets/images/decor_3.png";
import DecorFour from "../../assets/images/decor_5.png";
import DecorFive from "../../assets/images/decor_6.png";
import DecorSix from "../../assets/images/decor_7.png";

type HeaderProps = CursorProps & HTMLProps<HTMLDivElement>;
export type Elements = {
  image: string;
  delay: number;
};

export default function Header({ cursorEnter, cursorLeave }: HeaderProps) {
  const elements: Elements[] = [
    {
      image: DecorOne,
      delay: 0,
    },
    // {
    //   image: DecorOne,
    //   delay: 0.1,
    // },
    {
      image: DecorTwo,
      delay: 0.2,
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
    {
      image: DecorSix,
      delay: 0.6,
    },
    {
      image: DecorSix,
      delay: 0.7,
    },
    {
      image: DecorSix,
      delay: 0.8,
    },
  ];

  return (
    <div className="header-container">
      <nav className="header-navbar">
        <span className="header-logo">Mobiefy</span>
        <ol className="header-navigation">
          <li>
            <a
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
              href="#about"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              onMouseEnter={cursorEnter}
              onMouseLeave={cursorLeave}
              href="#features"
            >
              Vantagens
            </a>
          </li>
          <li>
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
              Baixar App
            </Button>
          </li>
        </ol>
      </nav>
      <div className="header-content">
        <p>
          Desbloqueando viagens inteligentes com seu passaporte de mobilidade
          eficiente!
        </p>
        <Button onMouseEnter={cursorEnter} onMouseLeave={cursorLeave}>
          Comece Já
        </Button>
      </div>
      <div className="header-elements">
        {elements.map((element, idx) => (
          <motion.img
            key={idx}
            className={`header-el-${idx + 1}`}
            aria-hidden="true"
            src={element.image}
            alt=""
            animate={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: element.delay }}
          />
        ))}
      </div>
    </div>
  );
}
