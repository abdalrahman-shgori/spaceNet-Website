import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"

export default function DevelopSkills() {
    const [start, setStart] = useState(false)
    const categories = [
        {
            name: "Design",
            subcategories: ["Graphic", "UI/UX"],
        },
        {
            name: "Development & IT",
            subcategories: ["Software Development", "Cyber Security"],

        },
        {
            name: "Software",
            subcategories: ["App Development", "Web Development"],
        },
        {
            name: "Networking",
            subcategories: ["Network Administration", "Cloud Computing"],
        },
    ];

    const [activeCategory, setActiveCategory] = useState(0);
    const [activeSubcategory, setActiveSubcategory] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveCategory((prevCategory) => (prevCategory + 1) % categories.length);
            setActiveSubcategory(0);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const subcategoryInterval = setInterval(() => {
            setActiveSubcategory((prevSubcategory) =>
                (prevSubcategory + 1) % categories[activeCategory].subcategories.length
            );
        }, 2000);
        return () => clearInterval(subcategoryInterval);
    }, [activeCategory]);

    const theme = useTheme()
    const extraSmallScreen = useMediaQuery(theme.breakpoints.down("348"))
    return (
        <>
            <Grid
                sx={{

                }}
            >
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
                                            xs: extraSmallScreen ? "6px 6px 6px 6px" : "13px 20px 13px 20px"
                                        },
                                        fontSize: {
                                            lg: "35px",
                                            md: "35px",
                                            sm: "24px",
                                            xs: extraSmallScreen ? "12px" : "15px"
                                        },
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 15px rgba(28, 183, 134, 0.5)",
                                        minHeight: "50px",
                                        height: "50px",
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign: "center",
                                        maxWidth: "125px"

                                    }}
                                >
                                    Software Development
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
                                            xs: extraSmallScreen ? "6px 6px 6px 6px" : "13px 20px 13px 20px"
                                        },
                                        fontSize: {
                                            lg: "35px",
                                            md: "35px",
                                            sm: "24px",
                                            xs: extraSmallScreen ? "12px" : "15px"
                                        },
                                        borderRadius: "8px",
                                        boxShadow: "0px 4px 15px rgba(28, 183, 134, 0.5)",
                                        minHeight: "50px",
                                        height: "50px",
                                        display: "flex",
                                        alignItems: "center",
                                        textAlign: "center",
                                        maxWidth: "125px"

                                    }}
                                >
                                    Cyber security
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
                                    sm: !start ? "58px" : "62px",
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
                                        sm: "none",
                                        xs: "none"
                                    },
                                    gap: "9px",
                                    position: "absolute",
                                    bottom: 52,
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