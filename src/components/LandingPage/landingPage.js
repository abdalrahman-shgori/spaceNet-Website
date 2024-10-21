import { Grid } from "@mui/material";
import React, { useState } from "react";
import Services from "./services";
import AboutSpaceNet from "./aboutSpaceNet";

export default function LandingPage() {
    const [hoveredService, setHoveredService] = useState(""); // State for hovered service
    const [hoveredServiceDescription, setHoveredServiceDescription] = useState(""); // State for hovered service
    const [capture, setCapture] = useState(false); // State to trigger camera capture animation

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
            <Grid item lg={6} md={6.5} sm={6.5} xs={12}>
                <Services
                    setHoveredService={setHoveredService}
                    setHoveredServiceDescription={setHoveredServiceDescription}
                    setCapture={setCapture} // Pass down the capture setter
                />
            </Grid>
            <Grid item lg={6} md={5.5} sm={5.5} xs={12}>
                <AboutSpaceNet
                    hoveredService={hoveredService}
                    hoveredServiceDescription={hoveredServiceDescription}
                    capture={capture} // Pass down the capture state
                />
            </Grid>
        </Grid>
    );
}
