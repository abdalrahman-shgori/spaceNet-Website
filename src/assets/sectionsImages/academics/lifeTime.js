import * as React from "react"
import {motion} from "framer-motion"
const SvgComponent = (props) => {

  return(
    <>
     <svg
    xmlns="http://www.w3.org/2000/svg"
    width={92}
    height={92}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <motion.path
      // initial={{ scale: 1, rotate: "0deg" }}
      // animate={{ scale: 0.8, rotate: "360deg" }}
      // transition={{
      //   duration: 0.5, // Duration in seconds
      //   repeat: Infinity, // Infinite repetition
      //   repeatType: "reverse", // Reverses the animation
      //   ease: "linear", // Smooth animation
      //   repeatDelay:1
      // }}
        fill={props.hoveredcardid === props.itemID ? "#FFFFFF" : "#FA6423"}
        d="M91.632 45.946a3.795 3.795 0 1 1-7.59 0A37.99 37.99 0 0 0 46.093 7.997a3.795 3.795 0 0 1 0-7.59 45.588 45.588 0 0 1 45.539 45.54Zm-30.36 3.795a3.795 3.795 0 0 0 0-7.59h-8.64a7.588 7.588 0 0 0-2.744-2.743V26.972a3.795 3.795 0 1 0-7.59 0v12.436A7.566 7.566 0 1 0 52.632 49.74h8.64ZM7.489 26.152a3.795 3.795 0 1 0 0 7.59 3.795 3.795 0 0 0 0-7.59Zm.656 19.794a3.795 3.795 0 1 0-7.59 0 3.795 3.795 0 0 0 7.59 0Zm37.95 37.95a3.795 3.795 0 1 0 0 7.59 3.795 3.795 0 0 0 0-7.59ZM16.572 12.577a3.794 3.794 0 1 0 0 7.589 3.794 3.794 0 0 0 0-7.59Zm13.502-8.979a3.795 3.795 0 1 0 0 7.59 3.795 3.795 0 0 0 0-7.59ZM7.488 58.151a3.795 3.795 0 1 0 0 7.59 3.795 3.795 0 0 0 0-7.59Zm9.085 13.574a3.794 3.794 0 1 0 0 7.589 3.794 3.794 0 0 0 0-7.589Zm13.502 8.979a3.794 3.794 0 1 0 0 7.589 3.794 3.794 0 0 0 0-7.59ZM84.7 58.15a3.794 3.794 0 1 0 0 7.589 3.794 3.794 0 0 0 0-7.59Zm-9.085 13.574a3.795 3.795 0 1 0 0 7.59 3.795 3.795 0 0 0 0-7.59ZM62.11 80.704a3.795 3.795 0 1 0 0 7.59 3.795 3.795 0 0 0 0-7.59Z"
      style={{
        transition:'fill 0.5s'
      }}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.555.408h91.077v91.077H.555z" />
      </clipPath>
    </defs>
  </svg>
    </>
  )
}
 

export default SvgComponent