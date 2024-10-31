import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import customCursor from "../../assets/images/internet.svg";
import academy from "../../assets/images/academy.svg";
import software from "../../assets/images/software.svg";
import design from "../../assets/images/design.svg";
import UnionWhite from "../../assets/images/UnionWhite.svg";

export default function ServicesOriginal({
    activeService,
    item,
    index,
    isMobile,
    isTabScreen,
    handleClicks,
    theme,
    hoveredService,
    image,
    handleServiceClick,
    setHoveredService,
    setHoveredServiceDescription,
    setCapture,
    setOutOfServicesHover,
    setActiveService
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setHoveredService(item.title);
        setHoveredServiceDescription(item.description);
        setCapture(true);
        setOutOfServicesHover(false)
    };

    const handleLeave = () => {
        setHoveredService("");
        setHoveredServiceDescription("");
        setActiveService("ABOUT")
        setCapture(false);
        setOutOfServicesHover(true)
        setTimeout(() => {
            setOutOfServicesHover(false)
        }, 1000);

    };
    return (
        <Grid
            key={item.id || index}
            item
            xs={12}
            sm={6}
            md={12}
            lg={12}
            sx={{
                display: {
                    lg: "unset",
                    md: "unset",
                    sm: "unset",
                    xs: "none"
                },
                overflow: "hidden"
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 30, rotate: 10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.5,
                }}
                onMouseEnter={() => {
                    if (!isMobile && !isTabScreen) {
                        handleHover();
                        setIsHovered(true);
                    }
                }}
                onMouseLeave={() => {
                    if (!isMobile && !isTabScreen) {
                        handleLeave();
                        setIsHovered(false);
                    }
                }}
            >
                <Box
                    onClick={() => {
                        if (isTabScreen) {
                            handleClicks(item);
                        }
                        if(!isTabScreen ){
                            handleServiceClick(image.url);
                        }
                    }} sx={{
                        cursor: `url(${index === 0
                            ? academy
                            : index === 1
                                ? customCursor
                                : index === 2
                                    ? software
                                    : index === 3
                                        ? design
                                        : ""}), pointer`,
                        background: isTabScreen && activeService === item.title
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
                            lg: "80px",
                            md: "60px",
                            sm: "50px",
                            xs: "50px",
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
                        color: activeService === item.title && activeService !== 'INTERNET' && activeService !== 'ABOUT' ? "#FFFFFF" : '#051A2F',

                        transition: "background 0.5s ease, transform 0.2s",
                        "&:hover": !isMobile && !isTabScreen && {
                            transform:
                                !isMobile && !isTabScreen && "scale(1.05) rotate(2deg)",
                            color:
                                !isTabScreen && hoveredService === "INTERNET"
                                    ? "#011343"
                                    : "#FFFFFF",
                            background: !isMobile && !isTabScreen
                                ? index === 1
                                    ? "#E9FA50"
                                    : index === 0
                                        ? "#FF9F31"
                                        : index === 2
                                            ? theme.palette.mode === "light"
                                                ? "#011343"
                                                : "#9D89FC"
                                            : index === 3
                                                ? "#1CB786"
                                                : ""
                                : index === 1
                                    ? "#FF9F31"
                                    : index === 0
                                        ? theme.palette.mode === "light"
                                            ? "#051A2F"
                                            : "#E9FA50"
                                        : index === 3
                                            ? theme.palette.mode === "light"
                                                ? "#011343"
                                                : "#9D89FC"
                                            : index === 2
                                                ? "#E9FA50"
                                                : index === 4
                                                    ? "#1CB786"
                                                    : "",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "40px",
                                md: "24px",
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
                            src={
                                hoveredService === "SOFTWARE" &&
                                    index === 2 &&
                                    theme.palette.mode === "light"
                                    ? UnionWhite
                                    : image.img
                            }
                            sx={{
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
    )
}