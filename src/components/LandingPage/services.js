import { Grid, Typography, useTheme, useMediaQuery, Skeleton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Union from "../../assets/images/Union.svg";
import ServicesMobile from "./servicesMobile";
import ServicesOriginal from "./servicesOriginal";

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
    outOfServicesHover,
    setOutOfServicesHover

}) {
    console.log(isAboutActive, "abb")
    const scrollRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const servicesRef = useRef(null);
    const localServices = [
        { name: "ACADEMICS", img: Union },
        { name: "INTERNET", img: Union },
        { name: "SOFTWARE", img: Union },
        { name: "DESIGN & BRANDING", img: Union },
    ];

    const handleClicks = (item) => {
        if (item.title === "ABOUT") {
            setHoveredServiceDescription("");
            setIsAboutActive(false)
        } else {
            setHoveredServiceDescription(item.description);
            setIsAboutActive(true)
        }

        setActiveService(item.title);
        setHoveredService(item.title);
        setCapture(true);
        setTimeout(() => {
            setCapture(false);
        }, 200);
    };



    const [isHovered, setIsHovered] = useState(false);
    const componentRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                if (hoveredService !== "" || hoveredServiceDescription !== "") {
                    setHoveredService("");
                    setHoveredServiceDescription("");
                    setActiveService('ABOUT');
                    setCapture(true);
                    setTimeout(() => {
                        setCapture(false);
                    }, 200);
                }
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [componentRef, hoveredService, hoveredServiceDescription]);

    useEffect(() => {
        if (!isTabScreen && !isMobile) {
            setHoveredService("");
            setHoveredServiceDescription("");
            setCapture(true);
            setActiveService('ABOUT')
            setTimeout(() => {
                setCapture(false)
            }, 200);
        }
    }, [isTabScreen, isMobile]);
    return (
        <Grid
            ref={servicesRef}
            sx={{
                paddingRight: {
                    lg: "100px",
                    md: "50px",
                    sm: "20px",
                    xs: "0px",
                },
                padding: {
                    lg: "0px 75px 0px 55px",
                    md: "0px 75px 0px 55px",
                    sm: "0px 45px 0px 25px",
                    xs: "0px 0px 0px 25px",
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        lg: "40px",
                        md: "40px",
                        sm: "30px",
                    },
                    fontFamily: "var(--English-font-Extralight)",
                    display: {
                        sm: "block",
                        xs: "none",
                        md: "block",
                    },
                }}
            >
                Our Services
            </Typography>
            <Grid
                ref={isTabScreen ? componentRef : scrollRef}
                {...(!isMobile && { container: true })}
                sx={{
                    display: {
                        lg: "unset",
                        md: "unset",
                        sm: "flex",
                        xs: "flex",
                    },
                    flexDirection: {
                        lg: "unset",
                        md: "unset",
                        sm: "row",
                        xs: "row",
                    },
                    overflowX: "auto",
                    whiteSpace: "nowrap",
                    paddingBottom: "10px",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    userSelect: "none",
                }}
            >
                {loading ? (
                    Array(4).fill().map((_, index) => (
                        <Skeleton
                            key={index}
                            animation="wave"
                            sx={{
                                height: {
                                    xl: "100px",
                                    lg: "100px",
                                    md: "60px",
                                    sm: "50px",
                                    xs: "50px",
                                },
                                width: "100%",
                                marginRight: "20px",

                            }}
                        />
                    ))


                ) : servicesList.length > 0 ? (
                    servicesList
                        .filter((item) => (isMobile ? item.title : item.title !== "ABOUT"))
                        .map((item, index) => {
                            const image = localServices[index];
                            const handleHover = () => {
                                setHoveredService(item.title);
                                setHoveredServiceDescription(item.description);
                                setCapture(true);
                                setOutOfServicesHover(false)
                            };

                            const handleLeave = () => {
                                setHoveredService("");
                                setHoveredServiceDescription("");
                                setCapture(false);
                                setOutOfServicesHover(true)
                                setTimeout(() => {
                                    setOutOfServicesHover(false)
                                }, 1000);

                            };

                            return (
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
                                        handleHover={handleHover}
                                        setIsHovered={setIsHovered}
                                        handleLeave={handleLeave}
                                        handleClicks={handleClicks}
                                        theme={theme}
                                        image={image}
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

                            );
                        })
                ) : (
                    <Typography>No services available</Typography>
                )}
            </Grid>
        </Grid>
    );
}
