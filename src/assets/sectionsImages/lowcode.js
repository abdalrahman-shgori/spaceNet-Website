import * as React from "react";
import { motion } from "framer-motion";
const LowCodeSvg = (props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={75}
      height={54}
      fill="none"
      {...props}

    >
      <motion.path
        fill="#051A2F"
        stroke="#051A2F"
        strokeWidth={0.76}
        d="M32.151 40.125c.843 0 1.528-.682 1.528-1.525a1.526 1.526 0 0 0-3.055 0c0 .843.685 1.525 1.527 1.525ZM4.62.453C2.523.453.797 2.175.797 4.267v36.622c0 2.092 1.726 3.813 3.822 3.813h21.416v3.818h-3.061a1.524 1.524 0 1 0 0 3.049h18.355a1.524 1.524 0 1 0 0-3.05h-3.062v-3.817h3.062c.486 0 .877-.185 1.143-.486.26-.294.378-.674.376-1.04a1.578 1.578 0 0 0-.384-1.037c-.265-.3-.654-.486-1.135-.486H4.619a.738.738 0 0 1-.767-.764v-5.342h37.477a1.524 1.524 0 1 0 0-3.05H3.852V4.268c0-.444.32-.764.767-.764h55.065c.447 0 .767.32.767.764v9.155c0 .485.187.875.488 1.14.294.258.674.377 1.04.375a1.582 1.582 0 0 0 1.04-.38c.3-.265.487-.653.487-1.135V4.267c0-2.092-1.727-3.814-3.822-3.814H4.619Zm30.594 44.25v3.817H29.09v-3.818h6.123Z"

      />
      <motion.path
        stroke={props.hoveredcardid === props.itemID ? "#051A2F" : "#9D89FC"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.802}
        d="M60.302 45.839h3.53m-6.707 5.294h9.884c1.977 0 2.965 0 3.72-.384a3.53 3.53 0 0 0 1.543-1.543c.384-.755.384-1.743.384-3.72V25.013c0-1.977 0-2.966-.384-3.72a3.53 3.53 0 0 0-1.543-1.543c-.755-.385-1.743-.385-3.72-.385h-9.884c-1.977 0-2.965 0-3.72.385a3.53 3.53 0 0 0-1.543 1.542c-.385.755-.385 1.744-.385 3.72v20.474c0 1.977 0 2.965.385 3.72a3.53 3.53 0 0 0 1.543 1.543c.755.384 1.743.384 3.72.384Z"
        style={{
          transition: "stroke 0.5s",
        }}
        animate={{
          strokeDasharray: [1000, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
};

export default LowCodeSvg;
