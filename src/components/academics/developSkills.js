import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function DevelopSkills() {
    const [start, setStart] = useState(false)
    const theme = useTheme()
    const extraSmallScreen = useMediaQuery(theme.breakpoints.down("348"))
    return (
        <>
            <Grid>
                <Grid container
                    sx={{
                        paddingBottom: {
                            lg: "177px",
                            md: "177px",
                            sm: "177px",
                            xs: "134px"
                        },
                    }}
                >
                    <Grid item lg={6} md={12} sm={12} xs={12}
                        sx={{
                            background: "#FFFFFF",
                            maxWidth: {
                                lg: "614px",
                                md: "614px",
                                sm: "450px",
                                xs: "calc(100% - 60px)"
                            },
                            maxHeight: {
                                lg: "301px",
                                md: "301px",
                                sm: "301px",
                                xs: "133px"
                            },
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: {
                                lg: "0 auto",
                                md: "0 auto",
                                sm: "0 auto",
                                xs: "unset"
                            },
                            borderRadius: {
                                lg: "31px",
                                md: "31px",
                                sm: "13px",
                                xs: "13px"
                            },
                            padding: {
                                lg: "117px 0px 117px 0px",
                                md: "117px 0px 117px 0px",
                                sm: "100px 0px 100px 0px",
                                xs: "48px 0px 48px 0px"
                            },
                            position: "relative",
                            boxShadow: "0px 4px 15px rgba(28, 183, 134, 0.5)",

                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "65px",
                                    md: "40px",
                                    sm: "30px",
                                    xs: "27px"
                                }
                            }}
                        >
                            Design
                        </Typography>
                        <Box
                            sx={{
                                position: "absolute",
                                top: -30,
                                left: {
                                    lg: "40px",
                                    md: "40px",
                                    sm: "40px",
                                    xs: "20px"
                                },
                                display: "flex",
                                // gap: {
                                //     lg: "298px",
                                //     md:"298px",
                                //     sm:"183px",
                                //     xs: extraSmallScreen ? "30px" : "90px"
                                // },
                                justifyContent: "space-between",
                                width: "100%"
                            }}
                        >
                            <motion.div
                                initial={{ x: 0, opacity: 1 }}
                                animate={{ x: -300, opacity: 0 }}
                                transition={{
                                    duration: 0.2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    repeatDelay: 1,
                                    delay: 1
                                }}
                                onUpdate={({ x }) => {
                                    if (x === 0) {
                                        setStart(false);
                                    }
                                    else if (x === -300) {
                                        setStart(true)
                                    }
                                }}
                            >

                                <Typography
                                    sx={{
                                        background: "#FFFFFF",
                                        padding: {
                                            lg: "23px 37px 23px 37px",
                                            md: "23px 37px 23px 37px",
                                            sm: "16px 28px 16px 28px",
                                            xs: extraSmallScreen ? "12px 16px 12px 16px" : "13px 20px 13px 20px"
                                        },
                                        fontSize: {
                                            lg: "35px",
                                            md: "35px",
                                            sm: "24px",
                                            xs: extraSmallScreen ? "12" : "16px"
                                        },
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 15px rgba(28, 183, 134, 0.5)", // Drop shadow

                                    }}
                                >
                                    Graphic
                                </Typography>
                            </motion.div>
                            <motion.div
                                initial={{ x: 0, opacity: 1 }}
                                animate={{ x: 300, opacity: 0 }}
                                transition={{
                                    duration: 0.2, repeat: Infinity,
                                    repeatType: "reverse", repeatDelay: 1, delay: 1
                                }}

                            >
                                <Typography
                                    sx={{
                                        background: "#FFFFFF",
                                        padding: {
                                            lg: "23px 37px 23px 37px",
                                            md: "23px 37px 23px 37px",
                                            sm: "16px 28px 16px 28px",
                                            xs: extraSmallScreen ? "12px 16px 12px 16px" : "13px 20px 13px 20px"
                                        },
                                        fontSize: {
                                            lg: "35px",
                                            md: "35px",
                                            sm: "24px",
                                            xs: extraSmallScreen ? "12" : "16px"
                                        },
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 15px rgba(28, 183, 134, 0.5)",
                                    }}
                                >
                                    UI/UX
                                </Typography>
                            </motion.div>
                        </Box>
                        <Grid item lg={6} md={6} sm={12} xs={12}
                            sx={{
                                background: "#1CB786",
                                maxWidth: {
                                    lg: "577px",
                                    md: "577px",
                                    sm: "577px",
                                    xs: "100%"
                                },
                                maxHeight: {
                                    lg: "308px",
                                    md: "308px",
                                    sm: "258px",
                                    xs: "136px"
                                },
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                margin: "0 auto",
                                borderRadius: {
                                    lg: "31px",
                                    md: "31px",
                                    sm: "13px",
                                    xs: "13px"
                                },
                                position: "absolute",
                                top: {
                                    lg: !start ? "110px" : "127px",
                                    md: !start ? "110px" : "127px",
                                    sm: !start ? "100px" : "110px",
                                    xs: !start ? "58px" : "62px",
                                },
                                zIndex: "-1",
                                left: {
                                    lg: "110px",
                                    md: "110px",
                                    sm: "60px",
                                    xs: "60px"
                                },
                                transition: "top 0.5s"
                            }}
                        >
                            <Grid
                                sx={{
                                    display: {
                                        lg: "flex",
                                        md: "flex",
                                        sm: "flex",
                                        xs: "none"
                                    },
                                    gap: "9px",
                                    position: "absolute",
                                    bottom: {
                                        lg: 52,
                                        md: 52,
                                        sm: 40
                                    },
                                }}
                            >
                                <Button
                                    sx={{
                                        background: "#FA6423",
                                        borderRadius: "50px",
                                        color: "#FFFFFF",
                                        padding: "13px 33px 13px 33px"

                                    }}
                                >
                                    Get Start Now
                                </Button>
                                <Button
                                    sx={{
                                        background: "#FFFFFF",
                                        borderRadius: "50px",
                                        color: "#000000",
                                        padding: "13px 33px 13px 33px"

                                    }}
                                >
                                    Register Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                sx={{
                    display: {
                        lg: "none",
                        md: "none",
                        sm: "none",
                        xs: "flex"
                    },
                    flexDirection: "column",
                    width: "fit-content",
                    justifyContent: "center",
                    margin: "0 auto",
                    paddingBottom: "100px"
                }}
            >
                <Button
                    sx={{
                        background: "#FA6423",
                        borderRadius: "50px",
                        color: "#FFFFFF",
                        padding: "13px 33px 13px 33px",
                    }}
                >
                    Get Start Now
                </Button>
                <Button
                    sx={{
                        background: "#000000",
                        borderRadius: "50px",
                        color: "#FFFFFF",
                        padding: "13px 33px 13px 33px",
                        marginTop: "27px"
                    }}
                >
                    Register Now
                </Button>
            </Grid>
        </>
    )
}