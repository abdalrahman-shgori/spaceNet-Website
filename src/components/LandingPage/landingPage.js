import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import Services from "./services";
import AboutSpaceNet from "./aboutSpaceNet";

export default function LandingPage({
    servicesList,
    setServicesList,
    loading,
    isAboutActive,
    setIsAboutActive
}) {
    const theme=useTheme()
    const [hoveredService, setHoveredService] = useState("");
    const [hoveredServiceDescription, setHoveredServiceDescription] = useState("");
    const [capture, setCapture] = useState(false);
    const [outOfServicesHover, setOutOfServicesHover] = useState(false);
    const [activeService, setActiveService] = useState('ABOUT');
    const is14Inch = useMediaQuery(theme.breakpoints.down("1390"));

 

    return (
        <Grid container 
        sx={{
            paddingTop: {
                lg: is14Inch ? "50px" : "70px",
                md: "30px",
                sm:"40px",
                xs: "40px"
            }  
        }}
        >
            <Grid item lg={6} md={6} sm={12} xs={12} sx={{
                paddingBottom:"12px"
            }}>
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
                    hoveredServiceDescription={hoveredServiceDescription}
                    isAboutActive={isAboutActive}
                    setIsAboutActive={setIsAboutActive}
                    outOfServicesHover={outOfServicesHover}
                    setOutOfServicesHover={setOutOfServicesHover}
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
                    outOfServicesHover={outOfServicesHover}

                />
            </Grid>
        </Grid>
    );
}
