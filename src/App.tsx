import { MouseEventHandler, useEffect, useState } from "react";
import "./App.css";
import { motion, useSpring } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import MobieClub from "./pages/MobieClub/MobieClub";
import Navbar from "./components/Navbar/Navbar";

export type CursorProps = {
  cursorEnter?: MouseEventHandler;
  cursorLeave?: MouseEventHandler;
};

function App() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const cursorX = useSpring(0, { stiffness: 500, damping: 30, mass: 1 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 30, mass: 1 });
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", ""); // Remove the '#' symbol
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0); // Small delay to ensure the element is available in the DOM
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

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

      <Navbar cursorEnter={cursorEnter} cursorLeave={cursorEnter} />

      <Routes>
        <Route
          path="/"
          element={<Home cursorEnter={cursorEnter} cursorLeave={cursorLeave} />}
        />
        <Route
          path="/termos-de-uso"
          element={
            <TermsAndConditions
              cursorEnter={cursorEnter}
              cursorLeave={cursorLeave}
            />
          }
        />
        <Route
          path="/politica-de-privacidade"
          element={
            <PrivacyPolicy
              cursorEnter={cursorEnter}
              cursorLeave={cursorLeave}
            />
          }
        />
        <Route
          path="/mobieclub"
          element={
            <MobieClub cursorEnter={cursorEnter} cursorLeave={cursorLeave} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
