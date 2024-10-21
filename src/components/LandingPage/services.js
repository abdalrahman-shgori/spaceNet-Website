import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Union from "../../assets/images/Union.svg";
import customCursor from "../../assets/images/internet.svg";
import academy from "../../assets/images/academy.svg";
import software from "../../assets/images/software.svg";
import design from "../../assets/images/design.svg";

import { services as fetchServicesApi } from "../../services/websiteApis/services";

export default function Services({ setHoveredService, setHoveredServiceDescription, setCapture }) {
    const scrollRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detect mobile screens

    const localServices = [
        { name: "ACADEMICS", img: Union },
        { name: "INTERNET", img: Union },
        { name: "SOFTWARE", img: Union },
        { name: "DESIGN & BRANDING", img: Union },
    ];

    const [loading, setLoading] = useState(true);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const responseData = await fetchServicesApi(); 
                setServicesList(responseData || []); 
                setLoading(false);
            } catch (error) {
                console.error("Error fetching services:", error);
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    return (
        <Grid
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
                {servicesList?.data?.map((item, index) => {
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

                    const handleClick = () => {
                        handleHover();
                    };

                    return (
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
                            onClick={isMobile ? handleClick : undefined} 
                        >
                            <Box
                                sx={{
                                    cursor: `url(${index === 0 ? customCursor : index === 1 ? academy : index === 2 ? software : index === 3 ? design : ''}), pointer`,
                                    background: "#F4F4F4",
                                    borderRadius: "38.7px",
                                    marginTop: {
                                        lg: "20px",
                                        md: "20px",
                                        sm: "20px",
                                        xs: "unset",
                                    },
                                    height: {
                                        lg: "80px",
                                        md: "80px",
                                        sm: "40px",
                                        xs: "40px",
                                    },
                                    display: "flex",
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
                                    color: "#051A2F",
                                    transition: "transform 0.2s",

                                    "&:hover": {
                                        transform: "scale(1.05) rotate(2deg)",
                                        color: theme.palette.mode === "light" ? "#FFFFFF" : "#051A2F",
                                        background: index === 0 ? "#E9FA50" : index === 1 ? "#FF9F31" : index === 2 ? "#011343" : index === 3 ? "#1CB786" : "",
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
                                        overflowY: "hidden",
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        maxWidth: "550px",
                                    }}
                                >
                                    {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}
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
                    );
                })}
            </Grid>
        </Grid>
    );
}
