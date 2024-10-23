import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Union from "../../assets/images/Union.svg";
import customCursor from "../../assets/images/internet.svg";
import academy from "../../assets/images/academy.svg";
import software from "../../assets/images/software.svg";
import design from "../../assets/images/design.svg";
import { services as fetchServicesApi } from "../../services/websiteApis/services";

export default function Services({ hoveredService, setHoveredService, setHoveredServiceDescription, setCapture }) {
    const scrollRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const servicesRef = useRef(null);
    const [activeService, setActiveService] = useState('ABOUT');
    const localServices = [
        { name: "ACADEMICS", img: Union },
        { name: "INTERNET", img: Union },
        { name: "SOFTWARE", img: Union },
        { name: "DESIGN & BRANDING", img: Union },
    ];
    const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);
    const [loading, setLoading] = useState(true);
    const [servicesList, setServicesList] = useState([]);
    console.log(activeService)
    const handleClicks = (item) => {
        if (item.title === "ABOUT") {
            setHoveredServiceDescription('');
        } else {
            setHoveredServiceDescription(item.description);
        }

        setActiveService(item.title);
        setHoveredService(item.title);
        setCapture(true);
        setTimeout(() => {
            setCapture(false);
        }, 200);
    };

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const responseData = await fetchServicesApi();
                const fetchedServices = Array.isArray(responseData?.data) ? responseData.data : [];
                const combinedServices = [{ id: 0, title: "ABOUT", description: "Description for About" }, ...fetchedServices];
                setServicesList(combinedServices);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching services:", error);
                setLoading(false);
            }
        };
        fetchServices();
    }, []);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Grid
            ref={servicesRef}
            sx={{
                paddingRight: {
                    lg: "100px",
                    md: "50px",
                    sm: "50px",
                    xs: "0px",
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
                ref={scrollRef}
                sx={{
                    display: {
                        lg: "unset",
                        md: "unset",
                        sm: "unset",
                        xs: "flex",
                    },
                    flexDirection: {
                        lg: "unset",
                        md: "unset",
                        sm: "unset",
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
                    <Typography>Loading...</Typography>
                ) : (
                    servicesList.length > 0 ? (
                        servicesList
                            .filter(item => isMobile ? item.title : item.title !== "ABOUT")
                            .map((item, index) => {
                                const image = localServices[index];
                                const handleHover = () => {
                                    setHoveredService(item.title);
                                    setHoveredServiceDescription(item.description);
                                    setCapture(true);
                                };

                                const handleLeave = () => {
                                    setHoveredService("");
                                    setHoveredServiceDescription("");
                                    setCapture(false);
                                };

                                // const handleClick = (item) => {
                                //     console.log("Clicked service:", item); // Log the clicked item to verify
                                //     setHoveredService(item.title);
                                //     setHoveredServiceDescription(item.description);
                                //     setActiveService(item.title); // Make sure we're setting activeService to item.title
                                //     setCapture(true);
                                //     setTimeout(() => {
                                //         setCapture(false);
                                //     }, 200);
                                // };


                                return (
                                    <>
                                        <Grid
                                            sx={{
                                                display: {
                                                    lg: "unset",
                                                    md: "unset",
                                                    sm: "unset",
                                                    xs: "none"
                                                }
                                            }}
                                        >
                                            <motion.div
                                                key={item.id || index}
                                                initial={{ opacity: 0, y: 30, rotate: 10 }}
                                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                                transition={{
                                                    duration: 0.6,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    delay: index * 0.5,
                                                }}
                                                onMouseEnter={() => {
                                                    if (!isMobile) {
                                                        handleHover();
                                                        setIsHovered(true);
                                                    }
                                                }}
                                                onMouseLeave={() => {
                                                    if (!isMobile) {
                                                        handleLeave();
                                                        setIsHovered(false);
                                                    }
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        cursor: `url(${index === 0
                                                            ? academy
                                                            : index === 1
                                                                ? customCursor
                                                                : index === 2
                                                                    ? software
                                                                    : index === 3
                                                                        ? design
                                                                        : ""}), pointer`,
                                                        background: isMobile && activeService === index
                                                            ? theme.palette.mode === 'light'
                                                                ? "#051A2F"
                                                                : '#E9FA50'
                                                            : '#F4F4F4',
                                                        borderRadius: "38.7px",
                                                        marginLeft: "2px",
                                                        marginTop: {
                                                            lg: "20px",
                                                            md: "20px",
                                                            sm: "20px",
                                                            xs: "6px",
                                                        },
                                                        height: {
                                                            xl: "100px",
                                                            lg: "80px",
                                                            md: "80px",
                                                            sm: "50px",
                                                            xs: "50px",
                                                        },
                                                        display: {
                                                            lg: "flex",
                                                            md: "flex",
                                                            sm: "flex",
                                                            xs: "none"
                                                        },
                                                        alignItems: "center",
                                                        paddingLeft: "32px",
                                                        paddingRight: "32px",
                                                        justifyContent: "space-between",
                                                        marginRight: {
                                                            lg: "unset",
                                                            md: "unset",
                                                            sm: "6px",
                                                            xs: "6px",
                                                        },
                                                        color: isMobile && activeService === index ? "#FFFFFF" : '#051A2F',
                                                        transition: "background 0.5s ease, transform 0.2s",
                                                        "&:hover": {
                                                            transform: !isMobile && "scale(1.05) rotate(2deg)",
                                                            color: theme.palette.mode === "light" ? "#FFFFFF" : "#FFFFFF",
                                                            background:
                                                                !isMobile ?
                                                                    index === 1 ? "#E9FA50" :
                                                                        index === 0 ? "#FF9F31" :
                                                                            index === 2 ? theme.palette.mode === 'light' ? "#011343" : "#9D89FC" :
                                                                                index === 3 ? "#1CB786" : "" :
                                                                    index === 1 ? "#FF9F31" :
                                                                        index === 0 ? theme.palette.mode === 'light' ? "#051A2F" : "#E9FA50" :
                                                                            index === 3 ? theme.palette.mode === 'light' ? "#011343" : "#9D89FC" :
                                                                                index === 2 ? "#E9FA50" :
                                                                                    index === 4 ? "#1CB786" : ''
                                                        },
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                lg: "40px",
                                                                md: "26px",
                                                                sm: "15px",
                                                                xs: "15px",
                                                            },
                                                            fontFamily: "var(--English-font-semibold)",
                                                            overflow: "hidden",
                                                            whiteSpace: "nowrap",
                                                            textOverflow: "ellipsis",
                                                            maxWidth: "550px",
                                                        }}
                                                    >
                                                        {item.title.length > 20
                                                            ? `${item.title.slice(0, 20)}...`
                                                            : item.title}
                                                    </Typography>

                                                    {image && (

                                                        <Box
                                                            component="img"
                                                            src={image.img}
                                                            sx={{
                                                                display: {
                                                                    lg: "unset",
                                                                    md: "unset",
                                                                    sm: "unset",
                                                                    xs: "none",
                                                                },
                                                                width: {
                                                                    lg: "unset",
                                                                    md: "25px",
                                                                    sm: "25px",
                                                                },
                                                            }}
                                                        />

                                                    )}
                                                </Box>
                                            </motion.div>
                                        </Grid>

                                        <Grid
                                            sx={{
                                                display: {
                                                    lg: "none",
                                                    md: "none",
                                                    sm: "none",
                                                    xs: "unset"
                                                }
                                            }}
                                        >

                                            <motion.div
                                                key={item.id || index}
                                                initial={{ opacity: 0, y: 30, rotate: 10 }}
                                                animate={{ opacity: 1, y: 0, rotate: 0 }}
                                                transition={{
                                                    duration: 0.6,
                                                    type: "spring",
                                                    stiffness: 100,
                                                    delay: index * 0.5,
                                                }}
                                                onMouseEnter={!isMobile ? handleHover : undefined}
                                                onMouseLeave={!isMobile ? handleLeave : undefined}
                                            >
                                                <Box

                                                    onClick={() => handleClicks(item)}
                                                    sx={{

                                                        cursor: `url(${index === 0
                                                            ? academy
                                                            : index === 1
                                                                ? customCursor
                                                                : index === 2
                                                                    ? software
                                                                    : index === 3
                                                                        ? design
                                                                        : ""
                                                            }), pointer`,
                                                        background: activeService === item.title
                                                            ? activeService === "ABOUT"
                                                                ? theme.palette.mode === 'light' ? "#E9FA50" : "#9D89FC"
                                                                : activeService === "ACADEMICS"
                                                                    ? "#FF9F31"
                                                                    : activeService === "INTERNET"
                                                                        ? "#E9FA50"
                                                                        : activeService === "SOFTWARE"
                                                                            ? theme.palette.mode === 'light' ? "#011343" : "#9D89FC"
                                                                            : activeService === "DESIGN & BRANDING"
                                                                                ? "#1CB786"
                                                                                : "#F5F5F5"
                                                            : "#F5F5F5",

                                                        borderRadius: "38.7px",
                                                        marginLeft: "2px",
                                                        marginTop: {
                                                            lg: "20px",
                                                            md: "20px",
                                                            sm: "20px",
                                                            xs: "6px",
                                                        },
                                                        height: {
                                                            xl: "100px",
                                                            lg: "80px",
                                                            md: "80px",
                                                            sm: "50px",
                                                            xs: "50px",
                                                        },
                                                        display: {
                                                            lg: "none",
                                                            md: "none",
                                                            sm: "none",
                                                            xs: "flex"
                                                        },
                                                        alignItems: "center",
                                                        paddingLeft: "32px",
                                                        paddingRight: "32px",
                                                        justifyContent: "space-between",
                                                        marginRight: {
                                                            lg: "unset",
                                                            md: "unset",
                                                            sm: "6px",
                                                            xs: "6px",
                                                        },
                                                        color: activeService === item.title ? "#FFFFFF" : '#051A2F',
                                                        transition: "background 0.5s ease, transform 0.2s",

                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                lg: "40px",
                                                                md: "26px",
                                                                sm: "15px",
                                                                xs: "15px",
                                                            },
                                                            fontFamily: "var(--English-font-semibold)",
                                                            overflowY: "hidden",
                                                            whiteSpace: "nowrap",
                                                            textOverflow: "ellipsis",
                                                            maxWidth: "550px",
                                                        }}
                                                    >
                                                        {item.title.length > 20
                                                            ? `${item.title.slice(0, 20)}...`
                                                            : item.title}
                                                    </Typography>


                                                </Box>
                                            </motion.div>

                                        </Grid>
                                    </>

                                );
                            })
                    ) : (
                        <Typography>No services available</Typography>
                    )
                )}
            </Grid>
        </Grid>
    );
}
