import * as React from "react";
import { useState } from "react";
import { star, heart, hand, plane, lightning, note } from "./paths";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { getIndex, useFlubber } from "./use-flubber";

// Array of SVG paths for different shapes
const paths = [lightning, hand, plane, heart, note, star, lightning];

// Corresponding colors for each shape
const colors = [
  "#00cc88",
  "#0099ff",
  "#8855ff",
  "#ff0055",
  "#ee4444",
  "#ffcc00",
  "#00cc88"
];

export default function Transform() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex); // Track animation progress
  const fill = useTransform(progress, paths.map(getIndex), colors); // Transition colors based on progress
  const path = useFlubber(progress, paths); // Use Flubber to smoothly morph between paths

  React.useEffect(() => {
    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      onComplete: () => {
        // Check if it's the last path; if not, increment the index
        if (pathIndex < paths.length - 1) {
          setPathIndex(pathIndex + 1);
        }
      }
    });
  
    return () => animation.stop();
  }, [pathIndex]);
  

  return (
    <svg width="200" height="200">
      <g transform="translate(10 10) scale(1 1)">
        <motion.path fill={fill} d={path} />
      </g>
    </svg>
  );
}
