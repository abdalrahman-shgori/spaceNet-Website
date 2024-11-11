import React from "react";
import SvgGroup1 from "../../assets/logoAnimation/group1";
import { Box } from "@mui/material";

export default function LogoAnimation({
    handleAnimationComplete,
    logoAnimationComplete
}) {

    return (
        <Box sx={{
            background: logoAnimationComplete ? "transparent" : "#051A2F",
            height: "100dvh"
        }}>
            <SvgGroup1 onAnimationComplete={handleAnimationComplete} />
        </Box>

    )
}