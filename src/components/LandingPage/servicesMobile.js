import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import customCursor from "../../assets/images/internet.svg";
import academy from "../../assets/images/academy.svg";
import software from "../../assets/images/software.svg";
import design from "../../assets/images/design.svg";

export default function ServicesMobile({
    activeService,
    setActiveService,
    setHoveredService,
    setHoveredServiceDescription,
    setCapture,
    item,
    index
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabScreen = useMediaQuery(theme.breakpoints.only("sm"));

    const handleClicks = (item) => {
        if (item.title === "ABOUT") {
            setHoveredServiceDescription("");
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

    const componentRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setHoveredService("");
                setHoveredServiceDescription("");
                setCapture(false);
                setActiveService('ABOUT')
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [componentRef]);
    useEffect(() => {
        if (!isTabScreen && !isMobile) {
            setHoveredService("");
            setHoveredServiceDescription("");
            setCapture(false);
            setActiveService('ABOUT')
        }
    }, [isTabScreen, isMobile]);
    return (
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
                        color: activeService === item.title && activeService !== 'INTERNET' && activeService !== 'ABOUT' ? "#FFFFFF" : '#051A2F',
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
                            display: "flex",
                            alignItems: "center"
                        }}
                    >
                        {item.img != undefined ? item.title.length > 20
                            ? `${item.title.slice(0, 20)}...`
                            : item.img : item.title}
                    </Typography>


                </Box>
            </motion.div>

        </Grid>
    )
}