import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Typography } from "@mui/material";

export default function AnimatedText({
    currentServiceType,
    isSmallScreen,
    isExtraSmallMobile,
    is15Inch,
    is14Inch,
    nextServiceType,
    serviceColors
}) {
    const currentServiceTypeStyle = {
        fontFamily: "var(--English-font)",
        fontSize: {
            lg: is14Inch ? "40px" : is15Inch ? "40px" : "48px",
            md: "37px",
            sm: "32px",
            xs: isExtraSmallMobile ? "16px" : "22px",
        },
        padding: {
            lg: "8px 20px 8px 20px",
            md: "8px 20px 8px 20px",
            sm: "8px 20px 8px 20px",
            xs: "4px 20px 4px 20px"
        },

        color: currentServiceType === 'Mobile App' ? "#000000" : "#FFFFFF",
        textAlign: "center",
        display: "inline-block",
        marginLeft: {
            lg: "10px",
            md: "0px",
            sm: "0px",
            xs: "0px"
        },
        transition: "background 1s linear",

    }
    return (
        <>
            <AnimatePresence mode='wait'>
                <Box
                    component="span"
                    sx={{
                        marginLeft: {
                            lg: "12px",
                            md: "12px",
                            sm: "6px",
                            xs: "0px"
                        }
                    }}
                >
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
                                ...currentServiceTypeStyle
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: isSmallScreen ? 10 : 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: isSmallScreen ? [10, -20] : [20, -50] }}
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
                </Box>


            </AnimatePresence>
        </>
    )
}