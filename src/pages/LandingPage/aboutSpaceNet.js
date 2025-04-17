import React, { useEffect, useRef, useState } from "react";
import Vector1Yellow from "../../assets/images/Vector1Yellow.svg";
import vector1White from "../../assets/images/Vector1White.svg";
import Vector2Yellow from "../../assets/images/Vector2Yellow.svg";
import vector2White from "../../assets/images/Vector2White.svg";
import spaceNetLogo from "../../assets/spacenetLogo/spaceNetLogoAbout.svg";
import spaceNetLogoWhite from "../../assets/spacenetLogo/spaceNetLogoWhite.svg";
import { motion } from "framer-motion";
import learnMoreArrow from "../../assets/images/learnMoreArrow.svg"
import learnMoreArrowBlack from "../../assets/images/learnMoreArrowBlack.svg"
import './about.css';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import useMediaQuery from '@mui/material/useMediaQuery'
import useTheme from '@mui/material/styles/useTheme';

export default function AboutSpaceNet({
    activeService,
    hoveredService,
    hoveredServiceDescription,
    capture,
    loading,
    outOfServicesHover,
    indexOfHoveredServices
}) {

    const { i18n, t } = useTranslation()
    const dir = i18n.dir()
    const theme = useTheme();
    const ThemeCheck = theme.palette.mode;
    const paragraphRef = useRef(null);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabScreen = useMediaQuery(theme.breakpoints.only("sm"));
    const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
    const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));
    const [displayedText, setDisplayedText] = useState("");
    const timeoutRef = useRef([]);
    const [initialAnimation, setInitialAnimation] = useState(true);

    useEffect(() => {
        timeoutRef.current.forEach(timeout => clearTimeout(timeout));
        timeoutRef.current = [];
        setDisplayedText("");
        if (hoveredService) {
            let currentText = "";
            hoveredService.split("").forEach((char, index) => {
                const timeout = setTimeout(() => {
                    currentText += char;
                    setDisplayedText(currentText);
                }, hoveredService === "DIGITAL DESIGN" ? index * 50 : index * 100);

                timeoutRef.current.push(timeout);
            });
        }

        return () => {
            timeoutRef.current.forEach(timeout => clearTimeout(timeout));
        };
    }, [hoveredService]);

    useEffect(() => {
        const paragraph = paragraphRef.current;
        const scrollContent = () => {
            setTimeout(() => {
                if (paragraph) {
                    paragraph.scrollTop += 1;
                    if (paragraph.scrollTop >= paragraph.scrollHeight / 2) {
                        paragraph.scrollTop = 0;
                    }
                }
            }, 3000);
        };
        const intervalId = setInterval(scrollContent, 50);
        return () => clearInterval(intervalId);
    }, []);


    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialAnimation(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    const scrollingContent = (
        <>
            {hoveredServiceDescription ? (
                <>
                    <span className="scrolling-content">{hoveredServiceDescription}</span>
                </>
            ) : (
                <>
                    <span className="scrolling-content"
                        style={{
                            paddingBottom: is15Inch || is14Inch ? "18px" : "24px",
                            marginTop: isTabScreen ? "15%" : "25%",
                            textAlign: "center"
                        }}
                    >
                        {t("aboutSpaceNet.about")}
                    </span>
                    <span className="scrolling-content"
                        style={{
                            paddingBottom: is15Inch || is14Inch ? "18px" : "24px",
                            textAlign: "center"

                        }}
                    >
                        {t("aboutSpaceNet.about")}
                    </span>
                    <span className="scrolling-content"
                        style={{
                            paddingBottom: is15Inch || is14Inch ? "18px" : "24px",
                            textAlign: "center"

                        }}
                    >
                        {t("aboutSpaceNet.about")}
                    </span>
                    <span className="scrolling-content" style={{ textAlign: "center" }}>
                        {t("aboutSpaceNet.about")}
                    </span>
                </>
            )}
        </>
    );
    const paragraphStyle = {
        fontSize: {
            lg: capture ? is14Inch || is15Inch ? '20px'
                : '24px'
                : is14Inch || is15Inch ? "24px" :
                    "27px",
            md: capture ? '18px' : "22px",
            sm: capture ? '16px' : "20px",
            xs: '15px',
        },
        fontFamily: 'var(--English-font)',
        overflow: 'auto',
        maxHeight: {
            lg: is14Inch ? "220px" : is15Inch ? "240px" : '300px',
            md: '220px',
            sm: '220px',
            xs: '220px',
        },
        paddingRight: '10px',
        paddingTop: {
            lg: is14Inch || is15Inch ? "0px" : capture ? "0px" : '10px',
            md: '0px',
            sm: '4px',
            xs: '4px'
        },
        position: 'relative',
        '&::-webkit-scrollbar': { display: 'none' },
        scrollbarWidth: 'none',
        display: 'flex',
        flexDirection: 'column',
        textAlign: dir === 'rtl' ? 'right' : 'left',
        zIndex: 2,
    }


    return (
        <>
            <Grid container
                sx={{
                    marginTop: {
                        lg: "unset",
                        md: "unset",
                        sm: "80px",
                        xs: "80px"
                    },
                    padding: dir === 'ltr' ? {
                        lg: is14Inch ? "0px 35px 0px 0px" :
                            is15Inch ? "0px 35px 0px 0px" :
                                "0px 75px 0px 0px",
                        md: "0px 75px 0px 0px",
                        sm: "0px 45px 20px 25px",
                        xs: "0px 25px",
                    } :
                        {
                            lg: is14Inch ? "0px 0px 0px 35px" :
                                is15Inch ? "0px 0px 0px 35px" :
                                    "0px 0px 0px 75px",
                            md: "0px 0px 0px 100px",
                            sm: "0px 25px 20px 45px",
                            xs: "0px 25px",
                        },
                    overflow: "hidden"

                }}
            >
                <Grid item xs={12} lg={12}>
                    <motion.div
                        animate={ 
                            dir === 'ltr' ?
                                initialAnimation
                                    ? { y: [0, 120, 0], x: [0, 120, 0] }
                                    : capture
                                        ? isMobile ? { y: [0, 80, 0], x: [0, 80, 0] }
                                            : isTabScreen ? { y: [0, 80, 0], x: [0, 80, 0] } :
                                                { y: [0, 120, 0], x: [0, 120, 0] }
                                        : outOfServicesHover ? { y: [0, 80, 0], x: [0, 80, 0] } : { y: 0, x: 0 } :

                                initialAnimation
                                    ? { y: [0, 120, 0], x: [0, -120, 0] }
                                    : capture
                                        ? isMobile ? { y: [0, 80, 0], x: [0, -80, 0] }
                                            : isTabScreen ? { y: [0, 80, 0], x: [0, -80, 0] } :
                                                { y: [0, 120, 0], x: [0, -120, 0] }
                                        : outOfServicesHover ? { y: [0, 80, 0], x: [0, -80, 0] } : { y: 0, x: 0 }
                        }
                        transition={{ duration: initialAnimation ? 0.4 : 0.5, delay: initialAnimation ? 0.5 : 0 }}
                    >
                        <Box
                            component='img'
                            loading="eager"
                            fetchPriority="high"
                            alt="bracket"
                            src={theme.palette.mode === 'light' ? vector1White : Vector1Yellow}
                            sx={{
                                maxWidth: "100%",
                                width: {
                                    lg: is14Inch ?
                                        "140px" :
                                        is15Inch ? '160px' :
                                            "160px",
                                    md: "106px",
                                    sm: "106px",
                                    xs: "106px"
                                },
                                position: "absolute",

                                transform: dir === 'rtl' ? "scaleX(-1)" : 'unset',

                            }}
                        />
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={
                            initialAnimation ?
                                { scale: [0, 1] }
                                : capture ?
                                    { scale: [0, 1] }
                                    : outOfServicesHover ? { scale: [1, 0, 1] } : { scale: 1 }
                        }
                        transition={{ duration: initialAnimation ? 0.5 : outOfServicesHover ? 0.5 : 0.3, delay: initialAnimation ? 0.6 : outOfServicesHover ? 0 : 0.2 }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                position: "relative",
                                top: {
                                    lg: "40px",
                                    md: "20px",
                                    sm: "20px",
                                    xs: "20px"
                                },
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                                paddingRight: dir === 'ltr' ? {
                                    lg: is14Inch ? "110px" : is15Inch ? "120px" : "120px",
                                    md: "50px",
                                    sm: "30px",
                                    xs: "30px"
                                } :
                                    {
                                        lg: is14Inch ? "40px" : is15Inch ? "45px" : "45",
                                        md: "30px",
                                        sm: "30px",
                                        xs: "30px"
                                    }
                                ,
                                paddingLeft: dir === 'ltr' ? {
                                    lg: is14Inch ? "40px" :
                                        is15Inch ? "45px" : "45px",
                                    md: "30px",
                                    sm: "30px",
                                    xs: "30px"
                                } :
                                    {
                                        lg: is14Inch ? "110" :
                                            is15Inch ? "120px" : "120px",
                                        md: "50px",
                                        sm: "30px",
                                        xs: "30px"
                                    }
                                ,

                            }}
                        >
                            {hoveredService ? (
                                <>
                                    <Box
                                        component="img"
                                        loading="eager"
                                        fetchPriority="high"
                                        src={ThemeCheck === "light" ? spaceNetLogoWhite : spaceNetLogo}
                                        alt="SpaceNet Logo"
                                        sx={{
                                            width: { lg: is14Inch ? "250px" : is15Inch ? "260px" : "260px", md: "187px", sm: "179px", xs: "179px" },
                                            paddingRight: "20px",
                                            paddingTop:
                                            {
                                                lg: is14Inch ? "0px" : "10px",
                                                md: "10px",
                                                sm: "10px",
                                                xs: "10px"
                                            }

                                        }}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5 }}


                                    >
                                        <Typography
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: {
                                                    lg: is14Inch ? "30px" : is15Inch ? "33px" : "36px",
                                                    md: "24px",
                                                    sm: "24px",
                                                    xs: "18px"
                                                },
                                                paddingRight: "20px",
                                                fontFamily: "var(--English-font-Extralight)",
                                                color: indexOfHoveredServices === 1 ? "#FF9F31" :
                                                    indexOfHoveredServices === 2 ? "#E9FA50" :
                                                        indexOfHoveredServices === 3 ? (theme.palette.mode === 'light' ? "#011343" : "#9D89FC") :
                                                            indexOfHoveredServices === 5 ? "#1CB786" : '',
                                                textShadow: '0.5px 0.5px 0 #fff, -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff'
                                            }}
                                        >
                                            {displayedText !== "ABOUT" && displayedText}
                                        </Typography>

                                    </motion.div>

                                </>

                            ) : (
                                <>

                                    <Box
                                        component="img"
                                        loading="eager"
                                        fetchPriority="high"
                                        src={ThemeCheck === "light" ? spaceNetLogoWhite : spaceNetLogo}
                                        alt="SpaceNet Logo"
                                        sx={{
                                            width: {
                                                lg: is14Inch ? "250px" : is15Inch ? "260px" : "260px",
                                                md: "187px",
                                                sm: "179px",
                                                xs: "179px"
                                            },
                                            paddingBottom: {
                                                lg: "10px",
                                                md: "10px",
                                                sm: "10px",
                                                xs: "10px"
                                            },
                                            paddingTop: {
                                                lg: is14Inch ? "0px" : "10px",
                                                md: "10px",
                                                sm: "10px",
                                                xs: "10px"
                                            },
                                            paddingRight: "20px",


                                        }}
                                    />
                                </>
                            )}

                            <Box
                                sx={{
                                    position: 'relative',
                                    maxHeight: {
                                        lg: capture ? is14Inch || is15Inch ? "220px" : "auto" : is14Inch ? "220px" : is15Inch ? "240px" : '320px',
                                        md: capture ? "auto" : '2700px',
                                        sm: capture ? "auto" : '270px',
                                        xs: capture ? "auto" : '270px'
                                    },
                                }}>
                                {(hoveredService === '' || activeService === 'ABOUT' && isMobile) && (

                                    <motion.div
                                        style={{
                                            position: 'absolute',
                                            top: is14Inch || is15Inch ? "-10px" : "-6px",
                                            left: 0,
                                            right: 0,
                                            height: '50px',
                                            background: theme.palette.mode === 'light'
                                                ? 'linear-gradient(to bottom, rgba(157, 137, 252, 1) 0%, rgba(157, 137, 252, 0) 100%)'
                                                : 'linear-gradient(to bottom, rgba(5, 26, 47, 1) 0%, rgba(5, 26, 47, 0) 100%)',
                                            filter: 'blur(10px)',
                                            zIndex: 9999,
                                        }}
                                    />
                                )}
                                <Typography
                                    ref={paragraphRef}
                                    sx={{
                                        ...paragraphStyle
                                    }}
                                >
                                    {loading ? <Skeleton animation="wave" sx={{
                                        height: {
                                            lg: is14Inch ? "220px" : is15Inch ? "240px" : '300px',
                                            md: '220px',
                                            sm: '220px',
                                            xs: '220px',
                                        }
                                    }} /> : scrollingContent}
                                </Typography>
                                {(hoveredService === '' || activeService === 'ABOUT' && isMobile) && (
                                    <motion.div

                                        style={{
                                            position: 'absolute',
                                            bottom: "-22px",
                                            left: 0,
                                            right: 0,
                                            height: '60px',
                                            background: theme.palette.mode === 'light'
                                                ? 'linear-gradient(to top, rgba(157, 137, 252, 1) 0%, rgba(157, 137, 252, 0) 100%)'
                                                : 'linear-gradient(to top, rgba(5, 26, 47, 1) 0%, rgba(5, 26, 47, 0) 100%)',
                                            filter: 'blur(10px)',
                                            zIndex: 9999,
                                        }}
                                    />
                                )}
                            </Box>
                        </Box>
                    </motion.div>
                </Grid>
                <Grid item xs={12}
                    sx={
                        dir === 'ltr' ?
                            {
                                position: "relative",
                                right: {
                                    lg: "80px",
                                    md: "30px",
                                    sm: "0px",
                                    xs: "0px"
                                }
                            } :
                            {
                                position: "relative",
                                left: {
                                    lg: "80px",
                                    md: "30px",
                                    sm: "0px",
                                    xs: "0px"
                                }
                            }
                    }
                >
                    <motion.div
                        initial={{ y: 0 }}
                        animate={
                            dir === 'ltr' ?
                                initialAnimation
                                    ? { y: [0, -120, 0], x: [0, -120, 0] }
                                    : capture
                                        ? isMobile ? { y: [0, -80, 0], x: [0, -80, 0] }
                                            : isTabScreen ? { y: [0, -80, 0], x: [0, -80, 0] } :
                                                { y: [0, -120, 0], x: [0, -120, 0] }
                                        : outOfServicesHover ? { y: [0, -80, 0], x: [0, -80, 0] } : { y: 0, x: 0 } :
                                initialAnimation
                                    ? { y: [0, -120, 0], x: [0, 120, 0] }
                                    : capture
                                        ? isMobile ? { y: [0, -80, 0], x: [0, 80, 0] }
                                            : isTabScreen ? { y: [0, -80, 0], x: [0, 80, 0] } :
                                                { y: [0, -120, 0], x: [0, 120, 0] }
                                        : outOfServicesHover ? { y: [0, -80, 0], x: [0, 80, 0] } : { y: 0, x: 0 }

                        }
                        transition={{ duration: initialAnimation ? 0.4 : 0.5, delay: initialAnimation ? 0.5 : 0 }}
                    >
                        <Box
                            component='img'
                            loading="eager"
                            fetchPriority="high"
                            alt="bracket"
                            src={theme.palette.mode === 'light' ? vector2White : Vector2Yellow}
                            sx={{

                                bottom: {
                                    lg: "-90px",
                                    md: "-40px",
                                    sm: "-40px",
                                    xs: "-40px"
                                },
                                maxWidth: "100%",
                                width: {
                                    lg: is14Inch ? "140px" : is15Inch ? "160px" : "160px",
                                    md: "106px",
                                    sm: "106px",
                                    xs: "106px"
                                },
                                float: dir === 'ltr' ? "right" : 'left',
                                marginTop: {
                                    lg: is14Inch ? "-20px" : is15Inch ? "-25px" : "-25px",
                                    md: "-25px",
                                    sm: "-20px",
                                    xs: "-20px"
                                },
                                transform: dir === 'rtl' ? "scaleX(-1)" : 'unset',

                            }}
                        />
                    </motion.div>
                </Grid>
                {(hoveredService !== '' && indexOfHoveredServices !== 0) && (
                    <motion.div
                        key={hoveredService}
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Link
                            to={(() => {
                                if (indexOfHoveredServices === 1) {
                                    return '/academics';
                                } else if (indexOfHoveredServices === 2) {
                                    return '/core-it';
                                } else if (indexOfHoveredServices === 3) {
                                    return '/software';
                                } else if (indexOfHoveredServices === 5) {
                                    return '/design-branding';
                                }
                                return '#';
                            })()}
                        >
                            <Box
                                component="button"
                                sx={{
                                    background:
                                        indexOfHoveredServices === 1 ? "#FF9F31;" :
                                            indexOfHoveredServices === 2 ? "#E9FA50" :
                                                indexOfHoveredServices === 3 ? theme.palette.mode === 'light' ? "#051A2F" : "#9D89FC" :
                                                    indexOfHoveredServices === 5 ? "#1CB786" : "#E9FA50",

                                    border: "unset",
                                    padding: "8px 18px 8px 18px",
                                    borderRadius: "116px",
                                    display: {
                                        lg: "none",
                                        md: "none",
                                        sm: "flex",
                                        xs: "flex",
                                    },
                                    alignItems: "center",
                                    gap: "8px",
                                    marginTop: "20px",
                                    zIndex: "999999",

                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontFamily: "var(--English-font), Arial, sans-serif",
                                        color: indexOfHoveredServices === 2 ? "#000" : "#FFF",
                                    }}
                                >
                                    {t("aboutSpaceNet.learnMore")}
                                </Typography>
                                <Box
                                    component="img"
                                    loading="eager"
                                    fetchPriority="high"
                                    src={indexOfHoveredServices === 2 ? learnMoreArrowBlack : learnMoreArrow}
                                    sx={{
                                        transform: dir === 'rtl' ? "scaleX(-1)" : 'unset'
                                    }}
                                />
                            </Box>
                        </Link>
                    </motion.div>
                )}
            </Grid>
        </>
    );
}

