import React from "react";
import SvgGroup1 from "../../assets/logoAnimation/group1";
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material";

export default function LogoAnimation({
    handleAnimationComplete,
    logoAnimationComplete
}) {
const theme=useTheme()
    return (
        <Box 
        sx={{
            background:  "#051A2F",
            height: "100dvh",
        }}>
            <SvgGroup1 onAnimationComplete={handleAnimationComplete} />
        </Box>

    )
}


// import React from "react";
// import SvgGroup1 from "../../assets/logoAnimation/group1";
// import Box from '@mui/material/Box';
// import { useTheme } from "@mui/material";
// import { motion } from "framer-motion";
// export default function LogoAnimation({
//     handleAnimationComplete,
//     logoAnimationComplete
// }) {
// const theme=useTheme()
//     return (
//         <motion.div
//         layout
//         animate={logoAnimationComplete && {height:"0"}}
//         transition={{delay:0.2,duration:0.3}}
//         style={{
//             background:  "#051A2F",
//             height:"100dvh"

//         }}
//         >
  
//             <SvgGroup1 onAnimationComplete={handleAnimationComplete} />
//         </motion.div>
     

//     )
// }