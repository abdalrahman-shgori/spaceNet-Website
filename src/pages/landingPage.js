import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Services from "./LandingPage/services";
import AboutSpaceNet from "./LandingPage/aboutSpaceNet";
import { Helmet } from "react-helmet";

export default function LandingPage({
    servicesList,
    setServicesList,
    loading,
    isAboutActive,
    setIsAboutActive
}) {
    const theme = useTheme()
    const [hoveredService, setHoveredService] = useState("");
    const [hoveredServiceDescription, setHoveredServiceDescription] = useState("");
    const [capture, setCapture] = useState(false);
    const [outOfServicesHover, setOutOfServicesHover] = useState(false);
    const [activeService, setActiveService] = useState('ABOUT');
    const [indexOfHoveredServices, setIndexOfHoveredServices] = useState()
    const is14Inch = useMediaQuery(theme.breakpoints.down("1390"));
    const scrollRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            setTimeout(() => {
                if (scrollRef.current && !scrollRef.current.contains(event.target)) {
                    if (hoveredService !== "" || hoveredServiceDescription !== "") {
                        setHoveredService("");
                        setHoveredServiceDescription("");
                        setActiveService("ABOUT");
                        setCapture(true);
                        setTimeout(() => setCapture(false), 200);
                    }
                }
            }, 0.5);

        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [hoveredService, hoveredServiceDescription]);

    return (
        <Grid

            container
            sx={{
                paddingTop: {
                    xl: "135px",
                    lg: is14Inch ? "50px" : "70px",
                    md: "30px",
                    sm: "40px",
                    xs: "40px"
                }
            }}
        >

            <Grid item lg={6} md={6} sm={12} xs={12} sx={{
                paddingBottom: "12px"
            }}>
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
                    scrollRef={scrollRef}
                    setIndexOfHoveredServices={setIndexOfHoveredServices}
                    indexOfHoveredServices={indexOfHoveredServices}
                />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <AboutSpaceNet
                    hoveredService={hoveredService}
                    hoveredServiceDescription={hoveredServiceDescription}
                    capture={capture}
                    setHoveredService={setHoveredService}
                    servicesList={servicesList}
                    activeService={activeService}
                    loading={loading}
                    outOfServicesHover={outOfServicesHover}
                    indexOfHoveredServices={indexOfHoveredServices}

                />
            </Grid>
        </Grid>
    );
}
