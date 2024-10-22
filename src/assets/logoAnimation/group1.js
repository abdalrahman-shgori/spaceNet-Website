import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const SvgGroup1 = (props) => {
  const [showSecondSvg, setShowSecondSvg] = React.useState(false);

  return (
    <AnimatePresence>
      <div
        className="logoOpacity"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {!showSecondSvg ? (
          <motion.svg
            key="first-svg"
            xmlns="http://www.w3.org/2000/svg"
            width={120}
            height={117}
            fill="none"
            {...props}
            initial={{ rotate: 0, scale: 1 }}
            animate={{ rotate: 90, scale: 0.01 }}
            transition={{
              rotate: {
                delay: 0.5,
                duration: 0.2,    
                ease: [0.42, 0, 0.58, 1],  
              },
              scale: {
                delay: 1,    
                duration: 0.2, 
                ease: [0.42, 0, 0.58, 1], 
              },
            }}
            onAnimationComplete={() => setShowSecondSvg(true)}
          >
            <path
              fill="#fff"
              d="M0 0h73.303v17.266H17.354v49.398H0V0ZM120 116.526H46.697V99.259h55.949V49.862H120v66.664Z"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="second-svg"
            xmlns="http://www.w3.org/2000/svg"
            width={160}
            height={121}
            fill="none"
            {...props}
            initial={{ scale: 0.01 }}
            animate={{ scale: [0,1,0] }}   
            transition={{
              delay: 0,
              duration: 1,  
              ease: [0.42, 0, 0.58, 1], 
            }}
          >
            <path
              fill="#fff"
              d="M72.65 10.055 63.667.839 16.92 46.126c-8.745 8.471-8.75 22.497-.012 30.975l40.008 38.816 61.043-59.266-16.645-17.154-9.342 9.244 7.927 8.193-23.845 24.457C65.9 91.807 49.172 91.86 38.951 81.508l-1.046-1.06c-10.13-10.26-9.972-26.806.353-36.87L72.65 10.054Z"
            />
            <path
              fill="#fff"
              d="m87.357 110.489 8.975 9.224 46.758-45.23c8.76-8.474 8.766-22.517.013-30.998L103.049 4.68 42.082 63.86l16.632 17.166 9.35-9.237-7.921-8.2 23.863-24.438c10.163-10.409 26.89-10.449 37.103-.09l1.045 1.06c10.123 10.269 9.952 26.815-.381 36.872l-34.416 33.496Z"
            />
          </motion.svg>
        )}
      </div>
    </AnimatePresence>
  );
};

export default SvgGroup1;