import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import customCursor from "../../assets/images/internet.svg";
import academy from "../../assets/images/academy.svg";
import software from "../../assets/images/software.svg";
import design from "../../assets/images/design.svg";
import UnionWhite from "../../assets/images/UnionWhite.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

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
    setHoveredService,
    setHoveredServiceDescription,
    setCapture,
    setOutOfServicesHover,
    setActiveService,
    setIndexOfHoveredServices,
    indexOfHoveredServices
}) {
    const { i18n, t } = useTranslation()
    const dir = i18n.dir()
    const [isHovered, setIsHovered] = useState(false);
    const [id, setId] = useState()
    const handleHover = () => {
        setHoveredService(i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title);
        setHoveredServiceDescription(i18n.language === 'ar' ? item.description_ar : i18n.language === 'ku' ? item.description_ku : item.description);
        setId(item.id)
        setIndexOfHoveredServices(item.id)
        setCapture(true);
        setOutOfServicesHover(false)
    };

    const handleLeave = () => {
        setHoveredService("");
        setIndexOfHoveredServices('')
        setHoveredServiceDescription("");
        setActiveService("ABOUT")
        setCapture(false);
        setOutOfServicesHover(true)
        setTimeout(() => {
            setOutOfServicesHover(false)
        }, 1000);

    };
    const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
    const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));

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
                overflow: "hidden",
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
                <Link to={!isTabScreen && image?.url}>
                <Box
                    onClick={() => {
                        if (isTabScreen) {
                            handleClicks(item);
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
                        background: isTabScreen && activeService === (i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title)
                            ? activeService === "ABOUT"
                                ? theme.palette.mode === 'light' ? "#E9FA50" : "#9D89FC"
                                : index === 0
                                    ? "#FF9F31"
                                    : index === 1
                                        ? "#E9FA50"
                                        : index === 2
                                            ? theme.palette.mode === 'light' ? "#011343" : "#9D89FC"
                                            : index === 3
                                                ? "#1CB786"
                                                : "#F5F5F5"
                            : "#F5F5F5",
                        borderRadius: "38.7px",
                        marginLeft: "2px",
                        marginTop: {
                            lg: is14Inch ? "12px" : is15Inch ? "15px" : "20px",
                            md: "10px",
                            sm: "20px",
                            xs: "6px",
                        },
                        height: {
                            lg: is14Inch ? "55px" : is15Inch ? "65px" : "75px",
                            md: "55px",
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
                        color: activeService === (i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title) && index !== 1 && activeService !== 'ABOUT' ? "#FFFFFF" : '#051A2F',

                        transition: "background 0.5s ease, transform 0.2s",
                        "&:hover": !isMobile && !isTabScreen && {
                            transform:
                                !isMobile && !isTabScreen && "scale(1.05) rotate(2deg)",
                            color:
                                !isTabScreen && index === 1
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
                                lg: is14Inch ? "24px" : is15Inch ? "32px" : "38px",
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
                            : i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title}
                    </Typography>

                    {image && (
                        <Box
                            component="img"
                            loading="lazy"
                            src={
                                indexOfHoveredServices === 3 &&
                                    index === 2 &&
                                    theme.palette.mode === "light"
                                    ? UnionWhite
                                    : image.img
                            }
                            alt="arrow"
                            sx={{
                                width: {
                                    lg: is14Inch ? "25px" : is15Inch ? "28px" : "unset",
                                    md: "25px",
                                    sm: "25px",
                                },
                                transform: dir === 'ltr' ? "unset" : "scaleX(-1)"
                            }}
                        />
                    )}
                </Box>
                </Link>
               
            </motion.div>
        </Grid>
    )
}