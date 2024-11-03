import React, { useEffect, useState } from "react";
import vector1 from "../../assets/sectionsImages/vectorSections1.svg";
import vector2 from "../../assets/sectionsImages/vectorSections2.svg";
import vectorWhite1 from "../../assets/sectionsImages/vectorSectionsWhite1.svg";
import vectorWhite2 from "../../assets/sectionsImages/vectorSectionsWhite2.svg";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

export default function ResponsiveComponent({ goalDescription }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isMeduimMobile = useMediaQuery(theme.breakpoints.down("600"));
    const isExtraSmallMobile = useMediaQuery(theme.breakpoints.down("363"));
    const addBreakLine = useMediaQuery(theme.breakpoints.down("500"));

    const serviceTypes = [
        "Website Development",
        "Mobile App",
        "Web App Development",
        "Desktop Application"
    ];

    const serviceColors = {
        "Website Development": "#9D89FC",
        "Mobile App": "#E9FA50",
        "Web App Development": "#1CB786",
        "Desktop Application": "#FF621F"
    };

    const [currentServiceType, setCurrentServiceType] = useState(serviceTypes[0]);
    const [nextServiceType, setNextServiceType] = useState(serviceTypes[1]);
    const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
    const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));
   console.log(currentServiceType,"t")

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentServiceType(prev => {
                const currentIndex = serviceTypes.indexOf(prev);
                const nextIndex = (currentIndex + 1) % serviceTypes.length;
                setNextServiceType(serviceTypes[nextIndex + 1]);
                return serviceTypes[nextIndex];
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [serviceTypes]);

    return (
        <Box sx={{
             position: 'relative', 
             height: 'auto',
              maxWidth:is14Inch ? "680px" : is15Inch ? '820px' :  "1000px", 
              width: "100%" 
              }}>
            <Box
                component='img'
                src={theme.palette.mode === 'light' ? vector1 : vectorWhite1}
                sx={{
                    maxWidth: "100%",
                    width: {
                        lg: "106px",
                        md: "80px",
                        sm: "80px",
                        xs: isMeduimMobile ? "60px" : "31px"
                    },
                    position: "absolute",
                    top: -30,
                    right: 0,
                    transition: "right 0.3s ease",
                }}
            />

            <Typography
                sx={{
                    fontFamily: "var(--English-font)",
                    fontSize: {
                        lg: is14Inch ? "40px" : is15Inch ? "50px" : "62px",
                        md: "38px",
                        sm: "38px",
                        xs: "26.6px",
                    },
                    textAlign: "left",
                    paddingRight: {
                        lg:"unset",
                        md:"unset",
                        sm:"unset",
                        xs:"12px"
                    }
                }}
            >
               {goalDescription} 
              {addBreakLine && <br/>}  
                <AnimatePresence mode='wait'>
                    <motion.span
                        key={currentServiceType}
                        layout
                        initial={{
                            backgroundColor: serviceColors[currentServiceType],
                            width: 'auto',
                        }}
                        animate={{
                            backgroundColor: serviceColors[currentServiceType],
                            width: 'auto',
                        }}
                        exit={{
                            backgroundColor: serviceColors[nextServiceType],
                            transition: { duration: 0.2 }
                        }}
                        transition={{
                            duration: 0.4,
                            width: {
                                duration: 0.4,

                            },
                        }}
                        style={{
                            width: "auto",
                            borderRadius: "75.4px",
                            display: 'inline-block',
                            transition: "width 0.2s ease",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "var(--English-font-semibold)",
                                fontSize: {
                                    lg: is14Inch ? "40px" : is15Inch ? "50px" : "62px",
                                    md: "28px",
                                    sm: "28px",
                                    xs: isExtraSmallMobile ? "16px" : "22px",
                                },
                                padding:{
                                    lg: "8px 20px 8px 20px",
                                    md: "8px 20px 8px 20px",
                                    sm: "8px 20px 8px 20px",
                                    xs: "4px 20px 4px 20px"
                                },

                                color: currentServiceType === 'Mobile App' ? "#051A2F" : "#FFFFFF",
                                textAlign: "center",
                                display: "inline-block",
                                marginLeft: {
                                    lg: "10px",
                                    md: "0px",
                                    sm: "0px",
                                    xs: "0px"
                                },
                                transition: "background 1s linear",
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: isSmallScreen ? 10 : 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: isSmallScreen ? [10, -20]: [20, -40] }}
                                transition={{
                                    opacity: { duration: 0.3, ease: "easeInOut" },
                                    y: { duration: 0.3, ease: "easeInOut" },
                                    exit: {
                                        opacity: { duration: 0.3 },
                                        y: { duration: 0.3, ease: "linear" },
                                    }
                                }}
                            >
                              {currentServiceType}
                            </motion.div>

                        </Typography>
                    </motion.span>
                </AnimatePresence>
            </Typography>

            <Typography
                sx={{
                    fontFamily: "var(--English-font)",
                    fontSize: {
                        lg: is14Inch ? "40px" : is15Inch ? "50px" : "62px",
                        md: "38px",
                        sm: "38px",
                        xs: "26px",
                    },
                    paddingLeft: {
                        lg: "24px",
                        md: "24px",
                        sm: "24px",
                        xs: isMeduimMobile ? "18px" : "12px"
                    },
                    textAlign: 'left',
                    marginTop: {
                        lg: "13px",
                        md: "13px",
                        sm: "13px",
                        xs: "13px"
                    }
                }}
            >
                Solutions
            </Typography>

            <Box
                component='img'
                src={theme.palette.mode === 'light' ? vector2 : vectorWhite2}
                sx={{
                    maxWidth: "100%",
                    width: {
                        lg: "106px",
                        md: "80px",
                        sm: "80px",
                        xs: isMeduimMobile ? "60px" : "31px"
                    },
                    position: "absolute",
                    bottom: {
                        lg: -12,
                        md: -12,
                        sm: -12,
                        xs: isMeduimMobile ? -16 : -6
                    },
                    left: 0,
                    transition: "left 0.3s ease",
                }}
            />
        </Box>
    );
}
