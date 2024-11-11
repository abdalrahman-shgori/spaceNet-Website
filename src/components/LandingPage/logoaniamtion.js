import React from "react";
import SvgGroup1 from "../../assets/logoAnimation/group1";
import { Box } from "@mui/material";

export default function LogoAnimation({
    handleAnimationComplete
}) {

    return (
        <Box sx={{
            background: "#051A2F",
            height: "100dvh"
        }}>
            <SvgGroup1 onAnimationComplete={handleAnimationComplete} />
        </Box>

    )
}