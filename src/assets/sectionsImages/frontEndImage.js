import * as React from "react";
import { motion } from "framer-motion";

const FrontEndSvg = (props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={74}
      height={59}
      fill="none"
      {...props}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          opacity: 1,
          transition: { duration: 2 }
        },
        hidden: {
          opacity: 0
        }
      }}
    >
      <motion.path
        d="M2.219 15.115c0-4.306 0-6.459.838-8.104a7.688 7.688 0 0 1 3.36-3.36c1.645-.838 3.798-.838 8.104-.838h44.594c4.306 0 6.46 0 8.104.838a7.688 7.688 0 0 1 3.36 3.36c.838 1.645.838 3.798.838 8.104v29.217c0 4.306 0 6.46-.838 8.104a7.688 7.688 0 0 1-3.36 3.36c-1.645.838-3.798.838-8.104.838H14.52c-4.307 0-6.46 0-8.104-.838a7.688 7.688 0 0 1-3.36-3.36c-.838-1.645-.838-3.798-.838-8.104V15.115Z"
        stroke="#051A2F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.802}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.path
        d="M29.13 18.19 17.595 29.723 29.13 41.256M44.506 18.19 56.04 29.723 44.506 41.256"
        stroke={props.hoveredcardid === props.itemID ? "#FFFFFF" : "#9D89FC"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.802}
        style={{ transition: "stroke 0.5s" }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </motion.svg>
  );
};

export default FrontEndSvg;
