import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { useTheme } from "@mui/material";
import { prefetchServices } from "../../services/websiteApis/servicesCache";
import SpaceCraftStartingLogo from "../../assets/logoAnimation/spaceCraftStartingLogo";

export default function LogoAnimation({
    handleAnimationComplete,
    logoAnimationComplete
}) {
const theme=useTheme()

    useEffect(() => {
        prefetchServices().catch(() => {});
    }, []);

    return (
        <Box 
        sx={{
            background:  "#051A2F",
            height: "100dvh",
        }}>
            <SpaceCraftStartingLogo onAnimationComplete={handleAnimationComplete} />
        </Box>

    )
}
