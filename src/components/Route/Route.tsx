import "./Route.css";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneFrame from "../../assets/images/phone_frame.png";
import Sheet from "../../assets/images/sheet.png";
import Map from "../../assets/images/map.png";
import UserLocation from "../../assets/images/user_location.png";
import Screen from "../../assets/images/previous_screen.png";

export default function Route() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });

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

  const phoneOpacity = useTransform(scrollYProgress, [0, 0.00000001], [0, 1]);
  const phoneTop = useTransform(scrollYProgress, [0, 0.3], ["-50%", "50%"]);
  const phoneLeft = useTransform(scrollYProgress, [0, 0.3], ["50%", "30%"]);
  const mapX = useTransform(scrollYProgress, [0.3, 1], ["0%", "100%"]);
  const mapY = useTransform(scrollYProgress, [0.3, 1], ["0%", "20%"]);

  const locationX = useTransform(scrollYProgress, [0.3, 1], ["60px", "250px"]);
  const locationY = useTransform(
    scrollYProgress,
    [0.3, 0.36, 0.381, 0.5, 0.65, 0.7, 0.8, 0.882, 0.91, 0.992],
    [
      "110px",
      "60px",
      "102px",
      "176px",
      "234px",
      "230px",
      "260px",
      "240px",
      "247px",
      "130px",
    ]
  );

  const mainText = "Acompanhe o seu trajeto e sua localização em tempo real";
  const words = mainText.split(" ");
  const worddsInterval = [
    useTransform(scrollYProgress, [0.3, 0.37], [0, 1]),
    useTransform(scrollYProgress, [0.37, 0.44], [0, 1]),
    useTransform(scrollYProgress, [0.44, 0.51], [0, 1]),
    useTransform(scrollYProgress, [0.51, 0.58], [0, 1]),
    useTransform(scrollYProgress, [0.58, 0.65], [0, 1]),
    useTransform(scrollYProgress, [0.65, 0.72], [0, 1]),
    useTransform(scrollYProgress, [0.72, 0.79], [0, 1]),
    useTransform(scrollYProgress, [0.79, 0.86], [0, 1]),
    useTransform(scrollYProgress, [0.86, 0.93], [0, 1]),
    useTransform(scrollYProgress, [0.93, 1], [0, 1]),
  ];

  return (
    <div className="route-scroll-area" ref={targetRef}>
      <motion.div className="route-container">
        <div className="route-content">
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
        </div>

        <motion.div
          className="route-phone-position"
          style={{
            opacity: phoneOpacity,
            top: phoneTop,
            right: phoneLeft,
          }}
        >
          <div className="route-phone-container">
            <img
              aria-hidden="true"
              className="route-frame"
              src={PhoneFrame}
              alt=""
            />
            <div className="route-phone-screen">
              <img
                aria-hidden="true"
                className="route-previous-screen"
                src={Screen}
                alt=""
                style={{ opacity: currentScrollY > 0.01 ? 0 : 1 }}
              />
              <motion.img
                aria-hidden="true"
                className="route-map"
                src={Map}
                alt=""
                style={{ left: mapX, bottom: mapY }}
              />
              <motion.img
                aria-hidden="true"
                className="route-user-location"
                src={UserLocation}
                alt=""
                style={{
                  right: locationX,
                  top: locationY,
                }}
              />
              <img
                aria-hidden="true"
                className="route-screen"
                src={Sheet}
                alt=""
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
