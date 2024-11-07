import * as React from "react";
import { motion } from "framer-motion";

const BackEndSvg = (props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={74}
      height={69}
      fill="none"
      {...props}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.2
          }
        }
      }}
    >
      <motion.path
        fill="#051A2F"
        fillRule="evenodd"
        d="M50.137 43.497H59.607v4.953h5.057v-4.953a5.058 5.058 0 0 0-5.058-5.058H39.375v-7.586h7.587a5.007 5.007 0 0 0 1.666-.283 5.058 5.058 0 0 0 3.392-4.775V5.563A5.058 5.058 0 0 0 46.962.505H26.73a5.058 5.058 0 0 0-5.058 5.058v20.232a5.058 5.058 0 0 0 5.058 5.057h7.587v7.587H14.085a5.232 5.232 0 0 0-.282.008 5.058 5.058 0 0 0-4.775 5.05v4.953h5.058v-4.953h20.232v4.953h5.057v-4.953h10.762ZM26.73 25.512v.283h20.232V5.563H26.73V25.512Z"
        clipRule="evenodd"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.rect
        width={18.326}
        height={13.163}
        x={2.078}
        y={53.304}
        stroke={props.hoveredcardid === props.itemID ? "#051A2F" : "#9D89FC"}
        strokeWidth={3.802}
        rx={1.901}
        style={{ transition: "stroke 0.5s" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      />
      <motion.rect
        width={18.326}
        height={13.163}
        x={27.894}
        y={53.304}
        stroke={props.hoveredcardid === props.itemID ? "#051A2F" : "#9D89FC"}
        strokeWidth={3.802}
        rx={1.901}
        style={{ transition: "stroke 0.5s" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      <motion.rect
        width={18.326}
        height={13.163}
        x={53.71}
        y={53.304}
        stroke={props.hoveredcardid === props.itemID ? "#051A2F" : "#9D89FC"}
        strokeWidth={3.802}
        rx={1.901}
        style={{ transition: "stroke 0.5s" }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5
        }}
      />
    </motion.svg>
  );
};

export default BackEndSvg;
