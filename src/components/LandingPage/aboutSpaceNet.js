import React, { useEffect, useRef, useState } from "react";
import Vector1Yellow from "../../assets/images/Vector1Yellow.svg";
import vector1White from "../../assets/images/Vector1White.svg";
import Vector2Yellow from "../../assets/images/Vector2Yellow.svg";
import vector2White from "../../assets/images/Vector2White.svg";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import spaceNetLogo from "../../assets/spacenetLogo/spaceNetLogoAbout.svg";
import spaceNetLogoWhite from "../../assets/spacenetLogo/spaceNetLogoWhite.svg";
import { motion } from "framer-motion";
import './about.css';

export default function AboutSpaceNet({ hoveredService, hoveredServiceDescription, capture }) {
    const theme = useTheme();
    const ThemeCheck = theme.palette.mode;
    const paragraphRef = useRef(null);
    console.log(hoveredService)

    useEffect(() => {
        const paragraph = paragraphRef.current;

        if (capture || !capture) {
            paragraph.scrollTop = 0;
        }
    });
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        setDisplayedText("");
        if (hoveredService) {
            let currentText = "";
            hoveredService.split("").forEach((char, index) => {
                setTimeout(() => {
                    currentText += char;
                    setDisplayedText(currentText);
                }, index * 120);
            });
        }
    }, [hoveredService]);
    useEffect(() => {
        const paragraph = paragraphRef.current;

        const scrollContent = () => {
            if (paragraph) {
                paragraph.scrollTop += 1;
                if (paragraph.scrollTop >= paragraph.scrollHeight / 2) {
                    paragraph.scrollTop = 0;
                }
            }
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
                    <span className="scrolling-content">{hoveredServiceDescription}</span> {/* Duplicate content for continuous scrolling */}
                </>
            ) : (
                <>
                    <span className="scrolling-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </span>
                    <span className="scrolling-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </span>
                    <span className="scrolling-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </span>
                    <span className="scrolling-content">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                        sm: "20px",
                        xs: "80px"
                    },
                }}
            >
                <Grid item xs={12} lg={6}>
                    <motion.div
                        animate={
                            initialAnimation
                                ? { y: [0, 120, 0], x: [0, 120, 0] }
                                : capture
                                    ? { y: [0, 120, 0], x: [0, 120, 0] }
                                    : { y: 0, x: 0 }
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
                        animate={initialAnimation ? { scale: [0, 1] } : capture ? { scale: [0, 1] } : { scale: 1 }}
                        transition={{ duration: initialAnimation ? 0.5 : 0.3, delay: initialAnimation ? 0.6 : 0.2 }}
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
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: "40px",
                                                    md: "40px",
                                                    sm: "28px",
                                                    xs: "24px"
                                                },
                                                fontFamily: "var(--English-font-Extralight)",
                                                color:
                                                    hoveredService === 'ACADEMICS' ? "#FF9F31" :
                                                        hoveredService === 'INTERNET' ? "#E9FA50" :
                                                            hoveredService === 'SOFTWARE' ? (theme.palette.mode === 'light' ? "#011343" : "#9D89FC") :
                                                                hoveredService === 'DESIGN & BRANDING' ? "#1CB786" :
                                                                    '',
                                            }}
                                        >
                                            {displayedText}
                                        </Typography>
                                    </motion.div>

                                </>

                            ) : (
                                <>
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                lg: "44px",
                                                md: "44px",
                                                sm: "32px",
                                                xs: "28px"
                                            },

                                            fontFamily: "var(--English-font-Extralight)",
                                            color:
                                                hoveredService === 'ACADEMICS' ? "#FF9F31" :
                                                    hoveredService === 'INTERNET' ? "#E9FA50" :
                                                        hoveredService === 'SOFTWARE' ? (theme.palette.mode === 'light' ? "#011343" : "#9D89FC") :
                                                            hoveredService === 'DESIGN & BRANDING' ? "#1CB786" :
                                                                ''



                                        }}
                                    >
                                        {hoveredService || "About"}
                                    </Typography>
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
                                            paddingRight: "20px",
                                        }}
                                    />
                                </>
                            )}

                            <Box
                                sx={{
                                    position: 'relative',
                                    maxHeight: {
                                        xl: "350px",
                                        lg: capture ? "auto" : '270px',
                                        md: capture ? "auto" : '270px',
                                        sm: capture ? "auto" : '270px',
                                        xs: capture ? "auto" : '270px'
                                    },
                                    overflow: 'hidden'
                                }}>
                                {hoveredService === '' && (

                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: "-2px",
                                            left: 0,
                                            right: 0,
                                            height: '60px',
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
                                            lg: capture ? '23px' : "32px",
                                            md: capture ? '20px' : "28px",
                                            sm: capture ? '15px' : "20px",
                                            xs: '15px',
                                        },
                                        fontFamily: 'var(--English-font)',
                                        overflow: 'auto',
                                        maxHeight: {
                                            xl: "1400px",
                                            lg: '275px',
                                            md: '270px',
                                            sm: '220px',
                                            xs: '220px',
                                        },
                                        paddingRight: '10px',
                                        paddingTop: '10px',
                                        position: 'relative',
                                        '&::-webkit-scrollbar': { display: 'none' },
                                        scrollbarWidth: '0px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        textAlign: 'justify',
                                        zIndex: 2,
                                    }}
                                >
                                    {scrollingContent}
                                </Typography>
                                {hoveredService === '' && (

                                    <div
                                        style={{
                                            position: 'absolute',
                                            bottom: "-1px",
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
                            : capture ? { y: [0, -120, 0], x: [0, -120, 0] } : { y: 0, x: 0 }}
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
                                position: "absolute",
                                right: "0"
                            }}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}
