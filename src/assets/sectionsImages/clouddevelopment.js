import * as React from "react";
import { motion } from "framer-motion";

const CloudDevelopmentSvg = (props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={74}
      height={54}
      fill="none"
      {...props}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.path
        stroke="#051A2F"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.802}
        d="M47.354 44.365h13.84c5.868-.84 10.379-6.009 10.379-12.11 0-6.194-4.652-11.302-10.652-12.022-1.612-9.861-10.17-17.386-20.487-17.386-7.917 0-14.799 4.431-18.3 10.95a15.58 15.58 0 0 0-4.19-.57c-8.598 0-15.569 6.97-15.569 15.569s6.97 15.57 15.57 15.57h8.65"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.75,
          delay: 1
        }}
      />
      <motion.path
        stroke={props.hoveredcardid === props.itemID ? "#051A2F" : "#9D89FC"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.802}
        d="M36.974 51.285V20.146m0 0-13.84 13.84m13.84-13.84 13.84 13.84"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: [1, 0, 0, 1],
          y: [0, -60, 60, 0],
        }}
        transition={{
          opacity: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 1, 1],
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
            repeatDelay: 1.5,
          },
          y: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
            repeatDelay: 1.5,
          },
        }}
      />
    </motion.svg>
  );
};

export default CloudDevelopmentSvg;
