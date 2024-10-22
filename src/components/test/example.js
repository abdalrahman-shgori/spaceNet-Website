import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

import { MenuToggle } from "./menutoggle"; // Ensure correct import path
import { Navigation } from "./navigation"; // Ensure correct import path
import "./style.css";
import { useDimensions } from "./usedimentsion";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`, // Circle shape when open
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)", // Circle shape when closed
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef); // Get height for the circular clipPath

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="sidebar"
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
