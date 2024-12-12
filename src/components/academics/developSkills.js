import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion"
import designGradiant from "../../assets/sectionsImages/academics/designGradiant.svg"
import softwareGradiant from "../../assets/sectionsImages/academics/softwareGradiant.svg"
import networkGradiant from "../../assets/sectionsImages/academics/netwrokGradiant.svg"
import DevelopBtn from "./developSkillsBtn";

export default function DevelopSkills(setOpen) {
    const [start, setStart] = useState(false)
    const theme = useTheme()
    const extraSmallScreen = useMediaQuery(theme.breakpoints.down("348"))
    const [skills, setSkills] = useState(0)
    const SkillsType = [
        {
            id: 0,
            title: "Design",
            subCat: ["Graphic", "UI/UX"],
            bg: "#1CB786",
            boxShadow: "0px 4px 15px rgba(28, 183, 134, 0.5)",
            img: designGradiant
        },
        {
            id: 1,
            title: "Software Development & IT",
            subCat: ["Software Development", "Cyber security"],
            bg: "#9D89FC",
            boxShadow: "0px 4px 15px rgba(157, 137, 252, 0.5)",
            img: softwareGradiant
        },
        {
            id: 2,
            title: "Networking",
            subCat: ["Nokia", "Cisco"],
            bg: "#E9FA50",
            boxShadow: " 0px 4px 15px rgba(233, 250, 80, 0.5)",
            img: networkGradiant
        },
    ]
    const subCatStyle = {
        background: "#FFFFFF",
        padding: {
            lg: "23px 37px 23px 37px",
            md: "23px 37px 23px 37px",
            sm: "16px 28px 16px 28px",
            xs: skills === 1 ?
                extraSmallScreen ? "6px 6px 6px 6px" : "10px 6px 10px 6px" :
                extraSmallScreen ? "6px 6px 6px 6px" : "13px 12px 13px 12px"
        },
        fontSize: {
            lg: "35px",
            md: "30px",
            sm: "24px",
            xs: extraSmallScreen ? "12px" : "16px"
        },
        borderRadius: "8px",
        boxShadow: SkillsType[skills].boxShadow,
        minHeight: "50px",
        maxHeight: {
            lg: "100px",
            md: "100px",
            sm: "65px",
            xs: "50px"
        },
        height: "100%",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        maxWidth: {
            lg: "297px",
            md: "297px",
            sm: "220px",
            xs: "125px"
        },
        lineHeight: {
            lg: "31px",
            md: "31px",
            sm: "31px",
            xs: "15px"
        },
        fontFamily: "var(--English-font)",
        color: "#051A2F"


    }
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
                                lg: "645px",
                                md: "614px",
                                sm: "450px",
                                xs: "calc(100% - 60px)"
                            },
                            minWidth:{
                                lg: "645px",
                                md: "614px",
                                sm: "450px",
                                xs: "calc(100% - 60px)"
                            },
                            height: {
                                lg: "316px",
                                md: "280px",
                                sm: "200px",
                                xs: "133px"
                            },
                            width: "100%",
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
                            boxShadow: SkillsType[skills].boxShadow,
                            transition: "all 0.5s"

                        }}
                    >
                        <Box
                            sx={{
                                left: {
                                    lg: -140,
                                    md: -140,
                                    sm: -60,
                                    xs: -15
                                },
                                position: "absolute",
                                bottom: {
                                    lg: -90,
                                    md: -90,
                                    sm: -50,
                                    xs: -40
                                }
                            }}
                        >   <motion.div
                            initial={{ x: 0, opacity: 1 }}
                            animate={{ x: -300, opacity: 0 }}
                            transition={{
                                duration: 0.2,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 1,
                                delay: 1
                            }}
                        >
                                <Box
                                    component="img"
                                    src={SkillsType[skills].img}
                                    alt="Skills Color Gradiant"
                                    sx={{
                                        maxWidth: {
                                            lg: "225px",
                                            md: "225px",
                                            sm: "110px",
                                            xs: "75px"
                                        },
                                        width: "100%",
                                        maxHeight: {
                                            lg: "144px",
                                            md: "144px",
                                            sm: "144px",
                                            xs: "100px"
                                        },

                                    }}
                                />
                            </motion.div>
                        </Box>

                        <motion.div
                            transition={{
                                duration: 0.2,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        lg: "60px",
                                        md: "40px",
                                        sm: "30px",
                                        xs: "27px"
                                    },
                                    textAlign: "center",
                                    fontFamily: "var(--English-font)",
                                    padding: {
                                        lg: "0px 90px 0px 90px",
                                        md: "0px 90px 0px 90px",
                                        sm: "0px 60px 0px 60px",
                                        xs: "0px 40px 0px 40px"
                                    },
                                    lineHeight: {
                                        lg: "65px",
                                        md: "65px",
                                        sm: "40px",
                                        xs: "30px"
                                    },
                                    color: "#051A2F"
                                }}
                            >
                                {SkillsType[skills].title}
                            </Typography>
                        </motion.div>
                        <Box
                            sx={{
                                position: "absolute",
                                top: {
                                    lg: -40,
                                    md: -40,
                                    sm: -30,
                                    xs: -40
                                },
                                left: {
                                    lg: "40px",
                                    md: "40px",
                                    sm: "40px",
                                    xs: "20px"
                                },
                                display: "flex",
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
                                    if (x <= -250) {
                                        setStart(false);
                                    } else if (x <= 0) {
                                        setStart(true);
                                    }

                                    if (x === -300) {
                                        setSkills(prevSkills => (prevSkills + 1) % SkillsType.length);
                                    }
                                }}

                            >

                                <Typography sx={{ ...subCatStyle }}>
                                    {SkillsType[skills].subCat[0]}
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
                                <Typography sx={{ ...subCatStyle }} >
                                    {SkillsType[skills].subCat[1]}
                                </Typography>
                            </motion.div>
                        </Box>
                        
                        <DevelopBtn SkillsType={SkillsType} skills={skills} start={start} setOpen={setOpen} />
                        <Grid
                    sx={{
                        display: {
                            lg: "flex",
                            md: "flex",
                            sm: "flex",
                            xs: "none"
                        },
                        whiteSpace:"nowrap",
                        gap: "9px",
                        position: "absolute",
                        bottom: {
                            lg: -80,
                            md: -80,
                            sm: -70
                        },
                        left:{
                            lg:180,
                            md:210,
                            sm:95
                        }
                    }}
                >
                    <Button
                        sx={{
                            background: "#FA6423",
                            borderRadius: "50px",
                            color: "#FFFFFF",
                            padding: "13px 33px 13px 33px",
                            fontFamily: "var(--English-font)",
                            fontSize: {
                                lg: "18.5px",
                                sm: "18.5px",
                                sm: "14px",
                                xs: "17px"
                            },
                            cursor:"pointer !important",
                            zIndex:99999

                        }}
                    >
                        Get Start Now
                    </Button>
                    <Button
                        sx={{
                            background: "#FFFFFF",
                            borderRadius: "50px",
                            color: "#000000",
                            padding: "13px 33px 13px 33px",
                            fontSize: {
                                lg: "18.5px",
                                sm: "18.5px",
                                sm: "14px",
                                xs: "17px"
                            },
                            fontFamily: "var(--English-font)",
                        }}
                    >
                        Register Now
                    </Button>
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
                        marginTop: "27px",
                        
                    }}
                >
                    Register Now
                </Button>
            </Grid>
        </>
    )
}