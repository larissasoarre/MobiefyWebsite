import { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { motion, useSpring } from "framer-motion";
import About from "./components/About/About";
import Accessibility from "./components/Accessibility/Accessibility";
import Features from "./components/Features/Features";
import Route from "./components/Route/Route";
import Footer from "./components/Footer/Footer";

export type CursorProps = {
  cursorEnter?: MouseEventHandler;
  cursorLeave?: MouseEventHandler;
};

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useSpring(0, { stiffness: 500, damping: 30, mass: 1 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 30, mass: 1 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [cursorX, cursorY]);

  const cursorVariants = {
    default: {
      width: 12,
      height: 12,
      left: -6,
      top: -6,
    },
    hover: {
      width: 80,
      height: 80,
      left: -40,
      top: -40,
      backgroundColor: "var(--color-secondary)",
      mixBlendMode: "exclusion" as const,
    },
  };

  const cursorEnter = () => setCursorVariant("hover");
  const cursorLeave = () => setCursorVariant("default");

  return (
    <>
      <motion.div
        className="cursor"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ duration: 0.2 }}
      />
      <Header cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
      <About />
      <Accessibility />
      <Features cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
      <Route />
      <Footer cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
    </>
  );
}

export default App;
