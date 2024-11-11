import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typography, useMediaQuery, useTheme } from "@mui/material";

export default function AnimatedText({
    currentServiceType,
    isSmallScreen,
    isExtraSmallMobile,
    is15Inch,
    is14Inch,
    nextServiceType,
    serviceColors,
    data
}) {
    const currentServiceTypeStyle = {
        fontFamily: "var(--English-font)",
        fontSize: {
            lg: is14Inch ? "40px" : is15Inch ? "40px" : "48px",
            md: "37px",
            sm: "32px",
            xs: isExtraSmallMobile ? "16px" : "18px",
        },
        padding: {
            lg: "8px 20px 8px 20px",
            md: "8px 20px 8px 20px",
            sm: "8px 20px 8px 20px",
            xs: "4px 20px 4px 20px"
        },
        color: currentServiceType === 'Mobile App Development' ? "#000000" : "#FFFFFF",
        textAlign: "center",
        display: "inline-block",
        marginLeft: {
            lg: "0px",
            md: "0px",
            sm: "0px",
            xs: "0px"
        },
        transition: "background 1s linear",
    };
    const theme = useTheme()
    const lgscreen = useMediaQuery(theme.breakpoints.only('lg'))
    const mdscreen = useMediaQuery(theme.breakpoints.only('md'))
    const smscreen = useMediaQuery(theme.breakpoints.only('sm'))
    const xsscreen = useMediaQuery(theme.breakpoints.only('xs'))

    return (

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
                    marginLeft: lgscreen ? "12px" : mdscreen ? "12px" : smscreen ? "6px" : xsscreen ? "2px" : '10px',
                    marginBottom: isExtraSmallMobile ? "6px" : "0px"

                }}
            >
                <Typography
                    sx={{
                        ...currentServiceTypeStyle,
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: isSmallScreen ? 10 : 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: isSmallScreen ? [10, -20] : [20, -30] }}
                        transition={{
                            opacity: { duration: 0.4 },
                            y: { duration: 0.4 }
                        }}
                    >
                        {currentServiceType}
                    </motion.div>
                </Typography>
            </motion.span>

        </AnimatePresence>


    );
}
