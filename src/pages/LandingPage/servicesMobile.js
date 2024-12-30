import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect,  useState } from "react";
import { motion } from "framer-motion";
import customCursor from "../../assets/images/internet.svg";
import academy from "../../assets/images/academy.svg";
import software from "../../assets/images/software.svg";
import design from "../../assets/images/design.svg";
import { useTranslation } from "react-i18next";

export default function ServicesMobile({
    activeService,
    setActiveService,
    setHoveredService,
    setHoveredServiceDescription,
    setCapture,
    item,
    index,
    setIsAboutActive,
    componentRef,
    setIndexOfHoveredServices,
    indexOfHoveredServices

}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const { i18n } = useTranslation()
    const dir = i18n.dir()
    const [activeServiceId, setActiveServiceId] = useState(null);

    const handleClicks = (item) => {
        if (item.title === "ABOUT") {
            setHoveredServiceDescription("");
            setIsAboutActive(true);
        } else {
            setHoveredServiceDescription(
                i18n.language === "ar"
                    ? item.description_ar
                    : i18n.language === "ku"
                        ? item.description_ku
                        : item.description
            );
            setIsAboutActive(false);
        }

        setHoveredService(
            i18n.language === "ar"
                ? item.title_ar
                : i18n.language === "ku"
                    ? item.title_ku
                    : item.title
        );
        setActiveService(i18n.language === "ar" ? item.title_ar : i18n.language === "ku" ? item.title_ku : item.title);
        setHoveredService(i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title);
        setCapture(true);
        setIndexOfHoveredServices(item.id);

        setTimeout(() => {
            setCapture(false);
        }, 200);
    };
   useEffect(()=>{
    setActiveServiceId(indexOfHoveredServices);
   },[indexOfHoveredServices])
    useEffect(() => {
        function handleClickOutside(event) {
            if (componentRef.current && !componentRef.current.contains(event.target)) {
                setHoveredService("");
                setHoveredServiceDescription("");
                setIndexOfHoveredServices('');
                setCapture(false);
                setActiveService('ABOUT')
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    useEffect(() => {
        if (!isTabScreen && !isMobile) {
            setHoveredService("");
            setHoveredServiceDescription("");
            setIndexOfHoveredServices()
            setCapture(false);
            setActiveService('ABOUT')
        }
    }, [isTabScreen, isMobile]);


    const getBackgroundColor = () => {
        if (activeService === (i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title)) {
            switch (indexOfHoveredServices) {
                case 0:
                    return theme.palette.mode === 'light' ? "#051A2F" : "#E9FA50";
                case 1:
                    return "#FF9F31";
                case 2:
                    return "#E9FA50";
                case 3:
                    return theme.palette.mode === 'light' ? "#011343" : "#9D89FC";
                case 5:
                    return "#1CB786";
                default:
                    return "#F5F5F5";
            }
        }
        return "#F5F5F5";
    };

   useEffect(() => {
        if (item.id === activeServiceId && indexOfHoveredServices !== 0) {
            const localizedTitle = i18n.language === "ar"
                ? item.title_ar
                : i18n.language === "ku"
                    ? item.title_ku
                    : item.title;

            setHoveredServiceDescription(
                i18n.language === "ar"
                    ? item.description_ar
                    : i18n.language === "ku"
                        ? item.description_ku
                        : item.description
            );
            setHoveredService(localizedTitle);
            setActiveService(localizedTitle);
        }
    }, [i18n.language, item.id]);
    return (
        <Grid
            sx={{
                display: {
                    lg: "none",
                    md: "none",
                    sm: "none",
                    xs: "unset"
                },
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

                        background: getBackgroundColor(),

                        borderRadius: "38.7px",
                        marginTop: {
                            lg: "20px",
                            md: "20px",
                            sm: "20px",
                            xs: "0px",
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
                        marginRight: dir === 'ltr' && {
                            lg: "unset",
                            md: "unset",
                            sm: "6px",
                            xs: "6px",
                        },
                        marginLeft: dir === 'rtl' && {
                            lg: "unset",
                            md: "unset",
                            sm: "6px",
                            xs: "6px",
                        },
                        color: activeService === (i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title) && indexOfHoveredServices === 3 && activeService !== 'ABOUT' ? "#FFFFFF" : '#051A2F',
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
                            : item.img : i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title}
                    </Typography>
                </Box>
            </motion.div>

        </Grid>
    )
}