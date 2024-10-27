import { Grid } from "@mui/material";
import React, { useState } from "react";
import Services from "./services";
import AboutSpaceNet from "./aboutSpaceNet";
import Transform from "../../assets/transfomationSvg/transform";

export default function LandingPage({
    servicesList,
    setServicesList,
    loading
}) {
    const [hoveredService, setHoveredService] = useState("");
    const [hoveredServiceDescription, setHoveredServiceDescription] = useState("");
    const [capture, setCapture] = useState(false);
    const [activeService, setActiveService] = useState('ABOUT');

    return (
        <Grid
            container
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
                    setServicesList={setServicesList}
                    servicesList={servicesList}
                    loading={loading}

                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <AboutSpaceNet
                    hoveredService={hoveredService}
                    hoveredServiceDescription={hoveredServiceDescription}
                    capture={capture}
                    setHoveredService={setHoveredService}
                    activeService={activeService}
                    loading={loading}
                />
            </Grid>
        </Grid>
    );
}
