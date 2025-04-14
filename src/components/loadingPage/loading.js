import React from "react";
import spaceNet from "../../assets/spacenetLogo/spaceNetLogoWhite.svg"
import logo from "../../assets/sectionsImages/sapceLogo.svg";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
export default function Loader(){

    return(
        <>
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
                               height:"100vh"
                             }}
                           >
         <Box display="flex" justifyContent="center" alignItems="center" sx={{height:"100dvh"}}
         
          >
            <Box
              component="img"
              loading="lazy"
              alt='logo'
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
              loading="lazy"
              alt='logoText'
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