import { useRef } from "react";
import "./App.css";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // const example = useTransform(scrollYProgress, [x, y], [x, y]);

  const buttonX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={targetRef} style={{ height: "200vh", backgroundColor: "aqua" }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "pink",
          position: "sticky",
          top: 0,
        }}
      >
        <motion.button
          style={{ position: "absolute", top: "50%", left: buttonX }}
        >
          Hello
        </motion.button>
      </div>
    </div>
  );
}

export default App;
