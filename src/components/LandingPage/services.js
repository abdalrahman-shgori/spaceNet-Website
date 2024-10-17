import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Union from "../../assets/images/Union.svg";
import customCursor from "../../assets/images/internet.svg";
import { services as fetchServicesApi } from "../../services/websiteApis/services"; // Rename the import
export default function Services() {
    const scrollRef = useRef(null);
    const theme = useTheme();

    const localServices = [ // Rename this local array to avoid conflicts
        { name: "ACADEMICS", img: Union },
        { name: "INTERNET", img: Union },
        { name: "SOFTWARE", img: Union },
        { name: "DESIGN & BRANDING", img: Union },
    ];

    const handleMouseDown = (e) => {
        const startX = e.pageX - scrollRef.current.offsetLeft;
        const scrollLeft = scrollRef.current.scrollLeft;

        const handleMouseMove = (e) => {
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            scrollRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    const handleTouchStart = (e) => {
        const startX = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const scrollLeft = scrollRef.current.scrollLeft;

        const handleTouchMove = (e) => {
            const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 2;
            scrollRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleTouchEnd = () => {
            scrollRef.current.removeEventListener("touchmove", handleTouchMove);
            scrollRef.current.removeEventListener("touchend", handleTouchEnd);
        };

        scrollRef.current.addEventListener("touchmove", handleTouchMove);
        scrollRef.current.addEventListener("touchend", handleTouchEnd);
    };

    const [loading, setLoading] = useState(true);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                setLoading(true);
                const responseData = await fetchServicesApi(); // Use the renamed API call
                setServicesList(responseData || []); // Make sure responseData is valid
                setLoading(false);
            } catch (error) {
                console.error("Error fetching services:", error);
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    console.log(servicesList, "Fetched services");

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
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
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
                    overflowX: "hidden",
                    whiteSpace: "nowrap",
                    paddingBottom: "10px",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    userSelect: "none",
                }}
            >
                {servicesList?.data?.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30, rotate: 10 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        transition={{
                            duration: 0.6,
                            type: "spring",
                            stiffness: 100,
                            delay: index * 0.5
                        }}
                    >
                        <Box
                            sx={{
                                cursor: `url(${customCursor}), pointer`,
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
                                    background: theme.palette.mode === 'light' ? '#051A2F' : '#E9FA50',
                                    color: theme.palette.mode === 'light' ? '#FFFFFF' : '#051A2F',
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
                                    overflowY: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '550px',
                                }}
                            >
                                {item.title.length > 20 ? `${item.name.slice(0, 20)}...` : item.title}
                            </Typography>

                            <Box
                                component="img"
                                src={item.img}
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
                                        sm: "25px"
                                    }
                                }}
                            />
                        </Box>
                    </motion.div>
                ))}
            </Grid>
        </Grid>
    );
}
