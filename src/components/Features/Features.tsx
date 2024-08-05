import { useEffect, useRef, useState } from "react";
import "./Features.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { CursorProps } from "../../App";
import PhoneFrame from "../../assets/images/phone_frame.png";
import Screen from "../../assets/images/screen_1.png";
import Button from "../Button/Button";
import PaymentPopUp from "../../assets/images/payment_successfull.png";
import DecorOne from "../../assets/images/decor_2.png";
import DecorTwo from "../../assets/images/decor_6.png";
import DecorThree from "../../assets/images/decor_7.png";
import DecorFour from "../../assets/images/decor_8.png";
import DecorFive from "../../assets/images/decor_9.png";
import DecorSix from "../../assets/images/decor_10.png";
import DecorSeven from "../../assets/images/decor_4.png";
import DecorEight from "../../assets/images/decor_11.png";
import DecorNine from "../../assets/images/decor_12.png";
import DecorTen from "../../assets/images/decor_13.png";
import DecorEleven from "../../assets/images/decor_14.png";

type FeaturesProps = CursorProps;

export default function Features({ cursorEnter, cursorLeave }: FeaturesProps) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [isButtonClicked, setIsButtonClick] = useState(false);

  const [currentScrollY, setCurrentScrollY] = useState(0);
  useEffect(() => {
    const unsubscribeY = scrollYProgress.on("change", (latest) => {
      setCurrentScrollY(latest);
    });
    document.body.style.backgroundColor =
      currentScrollY > 0 ? "#322e53" : "rgba(0,0,0,0)";
    return () => {
      unsubscribeY();
      document.body.style.backgroundColor = "";
    };
  }, [currentScrollY, scrollYProgress]);

  const phoneRotate = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["-90deg", "0deg"]
  );
  const phoneY = useTransform(scrollYProgress, [0.2, 0.8], ["13%", "50%"]);
  const wordTop = useTransform(
    scrollYProgress,
    [0.75, 0.8],
    ["-70px", "-230px"]
  );
  const containerTop = useTransform(scrollYProgress, [0, 0.2], ["70%", "0%"]);

  const mainText = "Pague pela sua viagem dentro do app com apenas";
  const words = mainText.split(" ");
  const worddsInterval = [
    useTransform(scrollYProgress, [0.5, 0.53], [1, 0]),
    useTransform(scrollYProgress, [0.53, 0.56], [1, 0]),
    useTransform(scrollYProgress, [0.56, 0.59], [1, 0]),
    useTransform(scrollYProgress, [0.59, 0.63], [1, 0]),
    useTransform(scrollYProgress, [0.63, 0.66], [1, 0]),
    useTransform(scrollYProgress, [0.66, 0.7], [1, 0]),
    useTransform(scrollYProgress, [0.7, 0.73], [1, 0]),
    useTransform(scrollYProgress, [0.73, 0.76], [1, 0]),
    useTransform(scrollYProgress, [0.76, 0.8], [1, 0]),
  ];

  const confetti = [
    {
      image: DecorOne,
      finalX: "7%",
      finalY: "40%",
    },
    {
      image: DecorTwo,
      finalX: "67%",
      finalY: "10%",
    },
    {
      image: DecorThree,
      finalX: "95%",
      finalY: "35%",
    },
    {
      image: DecorFour,
      finalX: "85%",
      finalY: "48%",
    },
    {
      image: DecorFive,
      finalX: "15%",
      finalY: "52%",
    },
    {
      image: DecorSix,
      finalX: "82%",
      finalY: "83%",
    },
    {
      image: DecorSeven,
      finalX: "25%",
      finalY: "34%",
    },
    {
      image: DecorEight,
      finalX: "80%",
      finalY: "16%",
    },
    {
      image: DecorNine,
      finalX: "26%",
      finalY: "5%",
    },
    {
      image: DecorTen,
      finalX: "70%",
      finalY: "40%",
    },
    {
      image: DecorEleven,
      finalX: "30%",
      finalY: "87%",
    },
    {
      image: DecorFive,
      finalX: "56%",
      finalY: "82%",
    },
    {
      image: DecorSeven,
      finalX: "73%",
      finalY: "65%",
    },
    {
      image: DecorNine,
      finalX: "97%",
      finalY: "75%",
    },
    {
      image: DecorThree,
      finalX: "30%",
      finalY: "65%",
    },
    {
      image: DecorThree,
      finalX: "55%",
      finalY: "20px",
    },
    {
      image: DecorFour,
      finalX: "10%",
      finalY: "80%",
    },
    {
      image: DecorEight,
      finalX: "1%",
      finalY: "8%",
    },
    {
      image: DecorFive,
      finalX: "92%",
      finalY: "0",
    },
    {
      image: DecorTwo,
      finalX: "2%",
      finalY: "65%",
    },
    {
      image: DecorSix,
      finalX: "15%",
      finalY: "20%",
    },
  ];

  return (
    <div className="features-scroll-area" ref={targetRef}>
      <motion.div className="features-container" style={{ top: containerTop }}>
        <div className="features-content">
          <h3>
            {words.map((word, index) => (
              <motion.span
                key={index}
                style={{ opacity: worddsInterval[index] }}
              >
                {word + " "}
              </motion.span>
            ))}
          </h3>
          <motion.span
            style={{
              bottom: wordTop,
              opacity: isButtonClicked && currentScrollY > 0.95 ? 0 : 1,
            }}
          >
            um clique
          </motion.span>
        </div>

        <motion.div
          className="features-phone-position"
          style={{
            y: "-50%",
            x: "50%",
            rotate: phoneRotate,
            right: phoneY,
            opacity: currentScrollY >= 1 ? 0 : 1,
          }}
        >
          <div className="features-phone-container">
            <img
              aria-hidden="true"
              className="features-frame"
              src={PhoneFrame}
              alt=""
            />
            <img
              aria-hidden="true"
              className="features-screen"
              src={Screen}
              alt=""
            />
            <motion.div
              className="features-button"
              style={{ zIndex: isButtonClicked ? 3 : 4 }}
              animate={{
                scale: currentScrollY > 0.95 ? [1, 1.1, 1, 1.1, 1] : undefined,
                boxShadow:
                  currentScrollY > 0.95
                    ? [
                        "0px 0px 0px 0px rgba(0, 0, 0, 0.10)",
                        "0px 5px 17.9px 0px rgba(0, 0, 0, 0.10)",
                        "0px 0px 0px 0px rgba(0, 0, 0, 0.10)",
                        "0px 5px 17.9px 0px rgba(0, 0, 0, 0.10)",
                        "0px 0px 0px 0px rgba(0, 0, 0, 0.10)",
                      ]
                    : undefined,
              }}
              transition={{
                duration: 0.6,
                delay: 2,
                repeatDelay: 2,
                repeat: Infinity,
              }}
            >
              <Button
                variant="mobile"
                onMouseEnter={cursorEnter}
                onMouseLeave={cursorLeave}
                onClick={() => setIsButtonClick(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="none"
                >
                  <path
                    fill="#fff"
                    d="M8.83 1.286A5.68 5.68 0 1 1 .31 6.204l.004-.184A5.68 5.68 0 0 1 8.83 1.286Zm-2.84 1.51a.568.568 0 0 0-.568.569 1.704 1.704 0 1 0 0 3.407v1.136a.58.58 0 0 1-.491-.226l-.04-.057a.568.568 0 0 0-.983.567 1.704 1.704 0 0 0 1.423.852h.091a.568.568 0 0 0 .502.564l.066.004a.568.568 0 0 0 .568-.568l.1-.003a1.704 1.704 0 0 0-.1-3.405V4.501a.582.582 0 0 1 .492.226l.039.057a.568.568 0 0 0 .983-.567 1.704 1.704 0 0 0-1.422-.852h-.092a.568.568 0 0 0-.568-.568Zm.568 3.976a.568.568 0 0 1 0 1.136V6.772ZM5.422 4.501v1.135a.568.568 0 1 1 0-1.135Z"
                  />
                </svg>
                Pagar R$4,40
              </Button>
            </motion.div>
            <div
              className="features-overlay"
              style={{
                opacity: isButtonClicked ? 1 : 0,
              }}
            ></div>
            <img
              aria-hidden="true"
              className="features-payment"
              src={PaymentPopUp}
              alt=""
              style={{ bottom: isButtonClicked ? 0 : "-190px" }}
            />
          </div>
        </motion.div>

        <div className="features-confetti">
          {confetti.map((element, idx) => (
            <motion.img
              key={idx}
              className={`confetti-el-${idx + 1}`}
              aria-hidden="true"
              src={element.image}
              alt=""
              animate={{
                bottom: isButtonClicked ? element.finalY : "50%",
                left: isButtonClicked ? element.finalX : "50%",
              }}
              style={{
                opacity: isButtonClicked && currentScrollY > 0.95 ? 1 : 0,
                rotate: isButtonClicked ? 1 : 0.5,
              }}
            />
          ))}
        </div>
      </motion.div>
      <div id="features"></div>
    </div>
  );
}
