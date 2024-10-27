import { Grid } from "@mui/material";
import React, { useState } from "react";
import Services from "./services";
import AboutSpaceNet from "./aboutSpaceNet";
import Transform from "../../assets/transfomationSvg/transform";

export default function LandingPage() {
    const [hoveredService, setHoveredService] = useState("");
    const [hoveredServiceDescription, setHoveredServiceDescription] = useState("");
    const [capture, setCapture] = useState(false);
    const [activeService, setActiveService] = useState('ABOUT');

    return (
        <Grid
            container
            sx={{
                padding: {
                    lg: "0px 75px 0px 55px",
                    md: "0px 75px 0px 55px",
                    sm: "0px 45px 0px 25px",
                    xs: "0px 25px",
                },
            }}
        >
            <Grid item lg={6} md={6} sm={12} xs={12}>
                {/* <Transform/> */}
                <Services
                    hoveredService={hoveredService}
                    setHoveredService={setHoveredService}
                    setHoveredServiceDescription={setHoveredServiceDescription}
                    setCapture={setCapture}
                    capture={capture}
                    setActiveService={setActiveService}
                    activeService={activeService}

                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                {/* <AboutSpaceNet
                    hoveredService={hoveredService}
                    hoveredServiceDescription={hoveredServiceDescription}
                    capture={capture}
                    setHoveredService={setHoveredService}
                    activeService={activeService}


                /> */}
            </Grid>
        </Grid>
    );
}
