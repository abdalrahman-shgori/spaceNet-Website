import { Grid, Typography, useTheme, useMediaQuery, Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Union from "../../assets/images/Union.svg";
import ServicesMobile from "./servicesMobile";
import ServicesOriginal from "./servicesOriginal";
import { useNavigate } from "react-router-dom";

export default function Services({
    activeService,
    setActiveService,
    hoveredService,
    setHoveredService,
    setHoveredServiceDescription,
    setCapture,
    servicesList,
    loading,
    hoveredServiceDescription,
    isAboutActive,
    setIsAboutActive,
    setOutOfServicesHover
}) {
    const scrollRef = useRef(null);
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const servicesRef = useRef(null);

    const localServices = [
        { name: "ACADEMICS", img: Union, url: "/academics" },
        { name: "CORE IT", img: Union, url: "/core-it" },
        { name: "SOFTWARE", img: Union, url: "/software" },
        { name: "DESIGN & BRANDING", img: Union, url: "/design-branding" },
    ];

    const handleServiceClick = (url) => {
        if (url) {
            navigate(url);
        }
    };

    const handleClicks = (item) => {
        if (item.title === "ABOUT") {
            setHoveredServiceDescription("");
            setIsAboutActive(false);
        } else {
            setHoveredServiceDescription(item.description);
            setIsAboutActive(true);
        }

        setActiveService(item.title);
        setHoveredService(item.title);
        setCapture(true);
        setTimeout(() => setCapture(false), 200);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (scrollRef.current && !scrollRef.current.contains(event.target)) {
                if (hoveredService !== "" || hoveredServiceDescription !== "") {
                    setHoveredService("");
                    setHoveredServiceDescription("");
                    setActiveService("ABOUT");
                    setCapture(true);
                    setTimeout(() => setCapture(false), 200);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [hoveredService, hoveredServiceDescription]);

    useEffect(() => {
        if (!isTabScreen && !isMobile) {
            setHoveredService("");
            setHoveredServiceDescription("");
            setCapture(true);
            setActiveService("ABOUT");
            setTimeout(() => setCapture(false), 200);
        }
    }, [isTabScreen, isMobile]);

    return (
        <Grid
            ref={servicesRef}
            sx={{
                padding:
                {
                    lg: "0px 75px 0px 75px",
                    md: '0px 75px 0px 75px',
                    sm: "0px 45px 0px 25px", 
                    xs: "0px 0px 0px 25px"
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: { lg: "38px", md: "30px", sm: "30px" },
                    fontFamily: "var(--English-font-Extralight)",
                    display: { sm: "block", xs: "none", md: "block" },
                }}
            >
                Our Services
            </Typography>

            <Grid
                ref={isTabScreen ? scrollRef : null}
                container={isMobile ? false : true}
                sx={{
                    display: { lg: "unset", md: "unset", sm: "flex", xs: "flex" },
                    flexDirection: { lg: "unset", md: "unset", sm: "row", xs: "row" },
                    overflowX: "auto",
                    overflowY:{
                        lg:"unset",
                        md:"unset",
                        sm:"unset",
                        xs:"hidden"
                    },
                    whiteSpace: "nowrap",
                    paddingBottom: "10px",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                    userSelect: "none",
                }}
            >
                {loading ? (
                    Array(4).fill().map((_, index) => (
                        <Skeleton
                            key={index}
                            animation="wave"
                            sx={{
                                height: { lg: "100px", md: "50px", sm: "50px", xs: "50px" },
                                width: "100%",
                                marginRight: "20px",
                            }}
                        />
                    ))
                ) : servicesList.length > 0 ? (
                    servicesList
                        .filter((item) => isMobile || item.title !== "ABOUT")
                        .map((item, index) => (
                            <>
                                <ServicesOriginal
                                    activeService={activeService}
                                    setActiveService={setActiveService}
                                    hoveredService={hoveredService}
                                    setHoveredService={setHoveredService}
                                    setHoveredServiceDescription={setHoveredServiceDescription}
                                    setCapture={setCapture}
                                    item={item}
                                    index={index}
                                    isMobile={isMobile}
                                    isTabScreen={isTabScreen}
                                    handleClicks={handleClicks}
                                    theme={theme}
                                    image={localServices[index]}
                                    setOutOfServicesHover={setOutOfServicesHover}
                                    handleServiceClick={() => handleServiceClick(localServices[index].url)}
                                />
                                <ServicesMobile
                                    activeService={activeService}
                                    setActiveService={setActiveService}
                                    hoveredService={hoveredService}
                                    setHoveredService={setHoveredService}
                                    setHoveredServiceDescription={setHoveredServiceDescription}
                                    setCapture={setCapture}
                                    item={item}
                                    index={index}
                                    isAboutActive={isAboutActive}
                                    setIsAboutActive={setIsAboutActive}
                                />
                            </>
                        ))
                ) : (
                    <Typography>No services available</Typography>
                )}
            </Grid>
        </Grid>
    );
}
