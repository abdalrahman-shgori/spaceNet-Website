import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Union from "../../assets/images/Union.svg";
import customCursor from "../../assets/images/internet.svg";

export default function Services() {
    const scrollRef = useRef(null);
    const theme = useTheme()
    const services = [
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
                        lg: "50px",
                        md: "50px",
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
                {services.map((item, index) => (
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
                                    lg: "29px",
                                    md: "29px",
                                    sm: "29px",
                                    xs: "unset",
                                },
                                height: {
                                    lg: "89px",
                                    md: "89px",
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
                                    transform: "scale(1.05) rotate(5deg)",
                                    background: theme.palette.mode === 'light' ? '#051A2F' : '#E9FA50',
                                    color: theme.palette.mode === 'light' ? '#FFFFFF' : '#051A2F',

                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        lg: "45px",
                                        md: "26px",
                                        sm: "15px",
                                        xs: "15px",
                                    },
                                    fontFamily: "var(--English-font-semibold)",
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    maxWidth: '550px',

                                }}
                            >
                                {item.name.length > 20 ? `${item.name.slice(0, 20)}...` : item.name}
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
