import React from "react";
import spaceNet from "../../assets/spacenetLogo/spaceNetLogoWhite.svg"
import logo from "../../assets/sectionsImages/sapceLogo.svg";
import { motion } from "framer-motion";
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <>
     {/* <motion.div
          key="line"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: [0, 1.1, 0] }} 
          exit={{ scaleY: [0, 1.1, 0]}}
          transition={{
            duration: 3,
            ease: [0.4, 0, 0.2, 1],
            times: [0, 0.5, 1],
          }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            backgroundColor: "#051A2F",
            zIndex: 10,
            transformOrigin: "bottom",
          }}
        /> */}
      <motion.div
        style={{
          background: '#051A2F',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          transformOrigin: "bottom",
          height: "100vh",
        }}
      >
        
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100dvh" }} >
          <Box
            component="img"
            alt='logo'
            property="high"
            src={logo}
            sx={{
              width: {
                lg: "85px",
                md: "85px",
                sm: "57px",
                xs: "57px"
              },
            }}
          />
          <Box
            component="img"
            alt='logoText'
            property="high"
            src={spaceNet}
            sx={{
              width: {
                lg: "262px",
                md: "262px",
                sm: "200px",
                xs: "176px"
              }
            }}
          />
        </Box>
      </motion.div>
    </>
  )
}