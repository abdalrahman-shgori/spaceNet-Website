import React, { useEffect, useRef, useState } from "react";
import Union from "../../assets/images/Union.svg";
import ServicesMobile from "./servicesMobile";
import ServicesOriginal from "./servicesOriginal";
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Services({
    activeService,
    setActiveService,
    hoveredService,
    setHoveredService,
    setHoveredServiceDescription,
    setCapture,
    servicesList,
    loading,
    isAboutActive,
    setIsAboutActive,
    setOutOfServicesHover,
    scrollRef,
    setIndexOfHoveredServices,
    indexOfHoveredServices
}) {
    const componentRef = useRef(null);
    const { i18n, t } = useTranslation()
    const dir = i18n.dir()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const servicesRef = useRef(null);

    const localServices = [
        { name: "ACADEMICS", img: Union, url: "/academics" },
        { name: "CORE IT", img: Union, url: "/core-it" },
        { name: "SOFTWARE", img: Union, url: "/software" },
        { name: "DESIGN & BRANDING", img: Union, url: "/design-branding" },
    ];


    const handleClicks = (item) => {
        if (item.title === "ABOUT") {
            setHoveredServiceDescription("");
            setIsAboutActive(false);
        } else {
            setHoveredServiceDescription(i18n.language === 'ar' ? item.description_ar : i18n.language === 'ku' ? item.description_ku : item.description);
            setIsAboutActive(true);
        }
        setIndexOfHoveredServices(item.id)
        setActiveService(i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title);
        setHoveredService(i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title);
        setCapture(true);
        setTimeout(() => setCapture(false), 200);
    };

    useEffect(() => {
        if (!isTabScreen && !isMobile) {
            setHoveredService("");
            setIndexOfHoveredServices('')

            setHoveredServiceDescription("");
            setCapture(true);
            setActiveService("ABOUT");
            setTimeout(() => setCapture(false), 200);
        }
    }, [isTabScreen, isMobile]);

    return (
        <>

            <Grid
                ref={servicesRef}
                sx={{
                    padding:
                        dir === 'ltr' ?
                            {
                                lg: "0px 75px 0px 75px",
                                md: '0px 75px 0px 75px',
                                sm: "0px 45px 0px 25px",
                                xs: "0px 0px 0px 25px"
                            } :
                            {
                                lg: "0px 75px 0px 75px",
                                md: '0px 75px 0px 75px',
                                sm: "0px 25px 0px 45px",
                                xs: "0px 25px 0px 0px"
                            }

                }}
            >
                <Typography
                    sx={{
                        fontSize: { lg: "38px", md: "30px", sm: "30px" },
                        fontFamily: "var(--English-font)",
                        fontWeight:"200",
                        display: { sm: "block", xs: "none", md: "block" },
                    }}
                >
                    {t("services.OurServices")}
                </Typography>

                <Grid
                    ref={isTabScreen ? scrollRef : null}
                    container={isMobile ? false : true}
                    sx={{
                        display: { lg: "unset", md: "unset", sm: "flex", xs: "flex" },
                        flexDirection: { lg: "unset", md: "unset", sm: "row", xs: "row" },
                        overflowX: "auto",
                        overflowY: {
                            lg: "unset",
                            md: "unset",
                            sm: "unset",
                            xs: "hidden"
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
                                        componentRef={componentRef}
                                        setIndexOfHoveredServices={setIndexOfHoveredServices}
                                        indexOfHoveredServices={indexOfHoveredServices}
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
                                        componentRef={componentRef}
                                        setIndexOfHoveredServices={setIndexOfHoveredServices}
                                        indexOfHoveredServices={indexOfHoveredServices}

                                    />
                                </>
                            ))
                    ) : (
                        <Typography>No services available</Typography>
                    )}
                </Grid>
            </Grid>
        </>

    );
}
