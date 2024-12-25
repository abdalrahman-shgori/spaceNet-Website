import * as React from "react";
import { motion } from "framer-motion";

const NetworkSolution = (props) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={72}
      height={72}
      fill="none"
      animate={{ rotate: [0, 360] }}
      transition={{
        repeat: Infinity,
        duration: 5,
        ease: "linear",
      }}
    >
      <motion.path
        fill="#051A2F"
        d="M45.056 36c0-5.002-4.073-9.06-9.06-9.06-4.986 0-9.059 4.058-9.059 9.06 0 5.002 4.073 9.059 9.06 9.059 4.986 0 9.059-4.057 9.059-9.06Zm-9.06 5.518A5.529 5.529 0 0 1 30.478 36a5.529 5.529 0 0 1 5.518-5.518A5.528 5.528 0 0 1 41.514 36a5.528 5.528 0 0 1-5.518 5.518ZM22.88 34.23c-.974 0-1.77.796-1.77 1.77s.796 1.77 1.77 1.77 1.77-.797 1.77-1.77c0-.974-.796-1.77-1.77-1.77ZM15.31 36c0 .974.797 1.77 1.771 1.77.974 0 1.77-.797 1.77-1.77 0-.974-.796-1.77-1.77-1.77s-1.77.796-1.77 1.77ZM13.053 36c0-3.6-2.936-6.536-6.536-6.536-3.6 0-6.52 2.936-6.52 6.536 0 3.6 2.935 6.536 6.535 6.536S13.053 39.6 13.053 36Zm-6.52 2.995A2.997 2.997 0 0 1 3.536 36a2.997 2.997 0 0 1 2.995-2.995A2.997 2.997 0 0 1 9.527 36a3.007 3.007 0 0 1-2.995 2.995ZM54.911 37.77a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54ZM49.11 37.77c.974 0 1.77-.797 1.77-1.77 0-.974-.796-1.77-1.77-1.77-.973 0-1.77.796-1.77 1.77s.797 1.77 1.77 1.77ZM65.46 29.464c-3.6 0-6.536 2.936-6.536 6.536 0 3.6 2.936 6.536 6.536 6.536 3.6 0 6.536-2.936 6.536-6.536 0-3.6-2.936-6.536-6.536-6.536Zm0 9.53A2.997 2.997 0 0 1 62.465 36a2.997 2.997 0 0 1 2.995-2.995A2.997 2.997 0 0 1 68.455 36a2.997 2.997 0 0 1-2.995 2.995ZM35.995 47.346c-.974 0-1.77.796-1.77 1.77s.796 1.77 1.77 1.77 1.77-.796 1.77-1.77-.796-1.77-1.77-1.77ZM35.995 53.144c-.974 0-1.77.797-1.77 1.77 0 .974.796 1.771 1.77 1.771s1.77-.797 1.77-1.77c0-.974-.796-1.771-1.77-1.771ZM35.997 58.942c-3.6 0-6.536 2.936-6.536 6.536 0 3.6 2.936 6.522 6.536 6.522 3.6 0 6.536-2.936 6.536-6.536 0-3.6-2.936-6.522-6.536-6.522Zm0 9.517a2.997 2.997 0 0 1-2.995-2.995 2.997 2.997 0 0 1 2.995-2.995 2.997 2.997 0 0 1 2.995 2.995 2.997 2.997 0 0 1-2.995 2.995ZM35.995 24.654c.974 0 1.77-.797 1.77-1.77 0-.974-.796-1.771-1.77-1.771s-1.77.797-1.77 1.77c0 .974.796 1.77 1.77 1.77ZM35.995 18.855a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54ZM35.997 13.057c3.6 0 6.536-2.936 6.536-6.536 0-3.6-2.936-6.521-6.536-6.521-3.6 0-6.536 2.936-6.536 6.536 0 3.6 2.936 6.521 6.536 6.521Zm0-9.516a2.997 2.997 0 0 1 2.995 2.995 2.997 2.997 0 0 1-2.995 2.995 2.997 2.997 0 0 1-2.995-2.995 2.997 2.997 0 0 1 2.995-2.995ZM25.477 44.026a1.772 1.772 0 0 0 0 2.508 1.772 1.772 0 0 0 2.508 0 1.772 1.772 0 0 0 0-2.508c-.708-.694-1.83-.694-2.508 0ZM22.628 51.137a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54ZM10.545 52.215a6.527 6.527 0 0 0 0 9.236 6.527 6.527 0 0 0 9.236 0 6.527 6.527 0 0 0 0-9.236c-2.552-2.538-6.698-2.538-9.236 0Zm6.728 6.742a2.983 2.983 0 1 1 0-4.22c1.166 1.151 1.166 3.055 0 4.22ZM49.362 24.403a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54ZM45.278 28.49a1.77 1.77 0 1 0 0-3.541 1.77 1.77 0 0 0 0 3.541ZM61.447 19.785a6.527 6.527 0 0 0 0-9.236 6.527 6.527 0 0 0-9.236 0 6.527 6.527 0 0 0 0 9.236c2.553 2.552 6.699 2.538 9.236 0Zm-6.728-6.743a2.983 2.983 0 1 1 0 4.22c-1.165-1.15-1.165-3.054 0-4.22ZM49.362 51.137a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54ZM44.022 44.026a1.772 1.772 0 0 0 0 2.508 1.772 1.772 0 0 0 2.508 0 1.772 1.772 0 0 0 0-2.508 1.772 1.772 0 0 0-2.508 0ZM52.211 52.215a6.527 6.527 0 0 0 0 9.236 6.527 6.527 0 0 0 9.236 0 6.527 6.527 0 0 0 0-9.236c-2.537-2.538-6.683-2.538-9.236 0Zm6.743 6.742a2.983 2.983 0 1 1-4.22-4.22 2.983 2.983 0 0 1 4.22 0c1.165 1.151 1.165 3.055 0 4.22ZM26.716 28.49a1.77 1.77 0 1 0 0-3.541 1.77 1.77 0 0 0 0 3.541ZM22.628 24.403a1.77 1.77 0 1 0 0-3.54 1.77 1.77 0 0 0 0 3.54ZM19.781 19.785a6.527 6.527 0 0 0 0-9.236 6.527 6.527 0 0 0-9.236 0 6.527 6.527 0 0 0 0 9.236c2.538 2.538 6.684 2.538 9.236 0Zm-6.742-6.743a2.983 2.983 0 1 1 0 4.22c-1.166-1.15-1.166-3.054 0-4.22Z"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

    </motion.svg>
  );
};

export default NetworkSolution;
