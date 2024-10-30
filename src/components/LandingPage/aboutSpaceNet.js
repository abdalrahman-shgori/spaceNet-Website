import React, { useEffect, useRef, useState } from "react";
import Vector1Yellow from "../../assets/images/Vector1Yellow.svg";
import vector1White from "../../assets/images/Vector1White.svg";
import Vector2Yellow from "../../assets/images/Vector2Yellow.svg";
import vector2White from "../../assets/images/Vector2White.svg";
import { Box, Grid, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material";
import spaceNetLogo from "../../assets/spacenetLogo/spaceNetLogoAbout.svg";
import spaceNetLogoWhite from "../../assets/spacenetLogo/spaceNetLogoWhite.svg";
import { motion } from "framer-motion";
import './about.css';

export default function AboutSpaceNet({
    activeService,
    hoveredService,
    hoveredServiceDescription,
    capture,
    loading,
    outOfServicesHover
}) {
    const theme = useTheme();
    const ThemeCheck = theme.palette.mode;
    const paragraphRef = useRef(null);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTabScreen = useMediaQuery(theme.breakpoints.only("sm"));

    useEffect(() => {
        const paragraph = paragraphRef.current;

        if (capture || !capture) {
            paragraph.scrollTop = 0;
        }
    });
    const [displayedText, setDisplayedText] = useState("");
    const timeoutRef = useRef([]);

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
                }, hoveredService === "DESIGN & BRANDING" ? index * 50 : index * 80);

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

    const [initialAnimation, setInitialAnimation] = useState(true);

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
                            paddingBottom: "10px"
                        }}
                    >
                        We are a tech solutions company aiming to redefine technology standards in our region with high quality services and cutting edge solutions. we offer various services in technology such as: internet, software development and Training. with many more services to come in the near future. we aim to fulfill the needs of the entire market from affordable options to small businesses to high-end solutions for large businesses. all at the highest possible industry standards and practices. Become our partner!
                    </span>
                    <span className="scrolling-content"
                        style={{
                            paddingBottom: "10px"
                        }}
                    >
                        We are a tech solutions company aiming to redefine technology standards in our region with high quality services and cutting edge solutions. we offer various services in technology such as: internet, software development and Training. with many more services to come in the near future. we aim to fulfill the needs of the entire market from affordable options to small businesses to high-end solutions for large businesses. all at the highest possible industry standards and practices. Become our partner!
                    </span>
                    <span className="scrolling-content"
                        style={{
                            paddingBottom: "10px"
                        }}
                    >
                        We are a tech solutions company aiming to redefine technology standards in our region with high quality services and cutting edge solutions. we offer various services in technology such as: internet, software development and Training. with many more services to come in the near future. we aim to fulfill the needs of the entire market from affordable options to small businesses to high-end solutions for large businesses. all at the highest possible industry standards and practices. Become our partner!
                    </span>
                    <span className="scrolling-content">
                        We are a tech solutions company aiming to redefine technology standards in our region with high quality services and cutting edge solutions. we offer various services in technology such as: internet, software development and Training. with many more services to come in the near future. we aim to fulfill the needs of the entire market from affordable options to small businesses to high-end solutions for large businesses. all at the highest possible industry standards and practices. Become our partner!
                    </span>
                </>
            )}
        </>
    );

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

                    padding: {
                        lg: "0px 75px 0px 0px",
                        md: "0px 75px 0px 0px",
                        sm: "0px 45px 20px 25px",
                        xs: "0px 25px",
                    },
                    overflow: "hidden"

                }}
            >
                <Grid item xs={12} lg={6}>
                    <motion.div
                        animate={
                            initialAnimation
                                ? { y: [0, 120, 0], x: [0, 120, 0] }
                                : capture
                                    ? isMobile ? { y: [0, 80, 0], x: [0, 80, 0] }
                                        : isTabScreen ? { y: [0, 80, 0], x: [0, 80, 0] } :
                                            { y: [0, 120, 0], x: [0, 120, 0] }
                                    : outOfServicesHover ? { y: [0, 80, 0], x: [0, 80, 0] } : { y: 0, x: 0 }
                        }
                        transition={{ duration: initialAnimation ? 0.4 : 0.5, delay: initialAnimation ? 0.5 : 0 }}
                    >
                        <Box
                            component='img'
                            src={theme.palette.mode === 'light' ? vector1White : Vector1Yellow}
                            sx={{
                                maxWidth: "100%",
                                width: {
                                    lg: "220px",
                                    md: "106px",
                                    sm: "106px",
                                    xs: "106px"
                                },
                                position: "absolute",
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
                                paddingLeft: {
                                    lg: "55px",
                                    md: "30px",
                                    sm: "30px",
                                    xs: "30px"
                                },
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
                                paddingRight: {
                                    lg: "140px",
                                    md: "30px",
                                    sm: "30px",
                                    xs: "30px"
                                },

                            }}
                        >
                            {['ACADEMICS', 'INTERNET', 'SOFTWARE', 'DESIGN & BRANDING'].includes(hoveredService) ? (
                                <>
                                    <Box
                                        component="img"
                                        src={ThemeCheck === "light" ? spaceNetLogoWhite : spaceNetLogo}
                                        alt="SpaceNet Logo"
                                        sx={{
                                            width: { lg: "287px", md: "287px", sm: "179px", xs: "179px" },

                                            paddingRight: "20px",
                                            paddingTop: "10px"
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
                                                    lg: "40px",
                                                    md: "40px",
                                                    sm: "24px",
                                                    xs: "24px"
                                                },
                                                fontFamily: "var(--English-font-Extralight)",
                                                color: hoveredService === 'ACADEMICS' ? "#FF9F31" :
                                                    hoveredService === 'INTERNET' ? "#E9FA50" :
                                                        hoveredService === 'SOFTWARE' ? (theme.palette.mode === 'light' ? "#011343" : "#9D89FC") :
                                                            hoveredService === 'DESIGN & BRANDING' ? "#1CB786" : '',
                                                textShadow: '0.5px 0.5px 0 #fff, -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #fff, -0.5px 0.5px 0 #fff'
                                            }}
                                        >
                                            {displayedText}
                                        </Typography>

                                    </motion.div>

                                </>

                            ) : (
                                <>

                                    <Box
                                        component="img"
                                        src={ThemeCheck === "light" ? spaceNetLogoWhite : spaceNetLogo}
                                        alt="SpaceNet Logo"
                                        sx={{
                                            width: { lg: "287px", md: "287px", sm: "179px", xs: "179px" },
                                            paddingBottom: {
                                                lg: "10px",
                                                md: "10px",
                                                sm: "10px",
                                                xs: "10px"
                                            },
                                            paddingTop: {
                                                lg: "10px",
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
                                        xl: "400px",
                                        lg: capture ? "auto" : '320px',
                                        md: capture ? "auto" : '300px',
                                        sm: capture ? "auto" : '270px',
                                        xs: capture ? "auto" : '270px'
                                    },


                                }}>
                                {(hoveredService === '' || activeService === 'ABOUT' && isMobile) && (

                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: "-4px",
                                            left: 0,
                                            right: 0,
                                            height: '50px',
                                            background: theme.palette.mode === 'light'
                                                ? 'linear-gradient(to bottom, rgba(157, 137, 252, 1) 0%, rgba(157, 137, 252, 0) 100%)'
                                                : 'linear-gradient(to bottom, rgba(5, 26, 47, 1) 0%, rgba(5, 26, 47, 0) 100%)',
                                            filter: 'blur(0px)',
                                            zIndex: 9999,
                                        }}
                                    />
                                )}


                                <Typography
                                    ref={paragraphRef}
                                    sx={{
                                        fontSize: {
                                            lg: capture ? '24px' : "32px",
                                            md: capture ? '21px' : "28px",
                                            sm: capture ? '16px' : "20px",
                                            xs: '15px',
                                        },
                                        fontFamily: 'var(--English-font)',
                                        overflow: 'auto',
                                        maxHeight: {
                                            xl: "400px",
                                            lg: '320px',
                                            md: '300px',
                                            sm: '220px',
                                            xs: '220px',
                                        },
                                        paddingRight: '10px',
                                        paddingTop: {
                                            lg: '10px',
                                            md: '10px',
                                            sm: '4px',
                                            xs: '4px'
                                        },
                                        position: 'relative',
                                        '&::-webkit-scrollbar': { display: 'none' },
                                        scrollbarWidth: 'none',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        textAlign: 'justify',
                                        zIndex: 2,

                                    }}
                                >
                                    {loading ? <Skeleton animation="wave" sx={{ height: "200px" }} /> : scrollingContent}
                                </Typography>
                                {(hoveredService === '' || activeService === 'ABOUT' && isMobile) && (

                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: "-22px",
                                            left: 0,
                                            right: 0,
                                            height: '60px',
                                            background: theme.palette.mode === 'light'
                                                ? 'linear-gradient(to top, rgba(157, 137, 252, 1) 0%, rgba(157, 137, 252, 0) 100%)'
                                                : 'linear-gradient(to top, rgba(5, 26, 47, 1) 0%, rgba(5, 26, 47, 0) 100%)',
                                            filter: 'blur(0px)',
                                            zIndex: 9999,
                                        }}
                                    />
                                )}
                            </Box>
                        </Box>
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={initialAnimation
                            ? { y: [0, -120, 0], x: [0, -120, 0] }
                            : capture
                                ? isMobile ? { y: [0, -80, 0], x: [0, -80, 0] }
                                    : isTabScreen ? { y: [0, -80, 0], x: [0, -80, 0] } :
                                        { y: [0, -120, 0], x: [0, -120, 0] }
                                : outOfServicesHover ? { y: [0, -80, 0], x: [0, -80, 0] } : { y: 0, x: 0 }
                        }
                        transition={{ duration: initialAnimation ? 0.4 : 0.5, delay: initialAnimation ? 0.5 : 0 }}
                    >
                        <Box
                            component='img'
                            src={theme.palette.mode === 'light' ? vector2White : Vector2Yellow}
                            sx={{
                                paddingRight: {
                                    lg: "80px",
                                    md: "0px",
                                    sm: "0px",
                                    xs: "0px"
                                },
                                bottom: {
                                    lg: "-90px",
                                    md: "-40px",
                                    sm: "-40px",
                                    xs: "-40px"
                                },
                                maxWidth: "100%",
                                width: {
                                    lg: "300px",
                                    md: "106px",
                                    sm: "106px",
                                    xs: "106px"
                                },
                                float: "right",
                                marginTop: {
                                    lg: "-60px",
                                    md: "-30px",
                                    sm: "-20px",
                                    xs: "-20px"
                                }
                            }}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}
