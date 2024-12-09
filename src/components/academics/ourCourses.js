import { Box, Grid, Typography, Button } from "@mui/material";
import React from "react";
import Illustration from "../../assets/sectionsImages/academics/Illustration.svg";
import Network from "../../assets/sectionsImages/academics/network.svg";
import complexProject from "../../assets/sectionsImages/academics/complexProject.svg";
import { motion } from "framer-motion"
export default function OurCourses({setEnroll}) {
    const text1Style = {
        fontSize: {
            lg: "14px",
            md: "14px",
            sm: "12px",
            xs: "12px"
        },
        lineHeight: "auto",
        fontFamily: "var(--English-font)"
    };

    const text2Style = {
        fontSize: {
            lg: "35.49px",
            md: "30.49px",
            sm: "28px",
            xs: "28px"
        },
        lineHeight: {
            lg: "40px",
            md: "40px",
            sm: "30px",
            xs: "30px"
        },
        color: "#000000",
        fontFamily: "var(--English-font)",
        padding: {
            lg: "23px 0px 20px 0px",
            md: "23px 0px 20px 0px",
            sm: "28px 0px 12px 0px",
            xs: "28px 0px 12px 0px"
        },
        maxWidth: {
            lg: "350px",
            md: "350px",
            sm: "236px",
            xs: "236px"
        },
        width: "100%"
    };

    const descriptionStyle = {
        fontSize: {
            lg: "17.75px",
            md: "15.75px",
            sm: "14px",
            xs: "14px"
        },
        lineHeight: {
            lg: "28px",
            md: "28px",
            sm: "18px",
            xs: "18px"
        },
        color: "#000000",
        fontFamily: "var(--English-font-light)",
    };

    const btnStyle = {
        background: "#000000",
        color: "#FFFFFF",
        borderRadius: "10px",
        padding: {
            lg: "17px 26px 17px 26px",
            md: "17px 26px 17px 26px",
            sm: "11px 18px 11px 18px",
            xs: "11px 18px 11px 18px"
        },
        marginTop: {
            lg: "58px",
            md: "32px",
            sm: "32px",
            xs: "32px"
        },
        fontSize: {
            lg: "20px",
            md: "18px",
            sm: "13px",
            xs: "13px"
        },
        fontFamily: "var(--English-font)",

    };

    const coursesData = [
        { id: 0, title1: "Start Learning", title2: "Digital Design", description: "We offer clients our most sought-after service — complete product design cycle covering branding with logo design, UX research & analysis, UI design, and user testing.", btnText: "Enroll Now!", bg: "#FFFFFF", img: undefined },
        { id: 1, img: complexProject, bg: "#1CB786" },
        { id: 2, bg: "#9D89FC", img: Illustration },
        { id: 3, title1: "Start Learning", title2: "Software Development", description: "Software development specializations and courses focus on creating software, including tools, methodologies, programming languages, architecture, and testing, such as Agile development and Scala.", btnText: "Enroll Now!", bg: "#FFFFFF", img: undefined },
        { id: 4, title1: "Start Learning", title2: "Network", description: "Lorem We offer clients our most sought-after service — complete product design cycle covering branding with logo design, UX research & analysis, UI design, and user testing.", btnText: "Enroll Now!", bg: "#FFFFFF", img: undefined },
        { id: 5, bg: "#E9FA50", img: Network },
    ];

    return (
        <Grid container
            sx={{
                marginTop: {
                    lg: "50px",
                    md: "50px",
                    sm: "20px",
                    xs: "20px"
                }
            }}
        >
            {coursesData.map((item, index) => (

                <Grid
                    item
                    xs={12}
                    sm={6}
                    lg={6}
                    key={item.id}
                    sx={{
                        order: {
                            xs: item.id === 0
                                ? 0
                                : item.id === 1
                                    ? 1
                                    : item.id === 3
                                        ? 2
                                        : item.id === 2
                                            ? 3
                                            : item.id === 4
                                                ? 4
                                                : 5,
                            sm: 'unset'
                        },
                        marginTop: {
                            lg: index > 1 ? "66px" : undefined,
                            md: index > 1 ? "50px" : undefined,
                            sm: index > 1 ? "50px" : undefined,
                            xs: item.id === 1 ? "6px" : item.id === 3 ? "50px" : item.id === 2 ? "6px" : item.id === 4 ? "50px" : item.id === 5 ? "6px" : ''
                        },
                        paddingRight: index % 2 === 0 ? "5.9px" : "0",
                        maxHeight: "601px",
                        overflow: "hidden"

                    }}
                >
                    {item.img !== undefined ? (
                        <motion.div
                            initial={{ x: index === 1 || index === 5 ? 100 : -100 }}
                            whileInView={{ x: 0 }}
                            style={{
                                height: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    padding: {
                                        lg: "80px 42px 80px 37px",
                                        md: "80px 42px 80px 37px",
                                        sm: "52px 42px 52px 37px",
                                        xs: "52px 42px 52px 37px"
                                    },
                                    background: item.bg,
                                    borderRadius: {
                                        lg: "55px",
                                        md: "55px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    height: "100%",

                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={item.img}
                                        alt="our courses"
                                        sx={{
                                            maxWidth: "304px",
                                            width: "100%",

                                        }}
                                    />
                                </Box>
                            </Box>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ x: index === 0 || index === 2 || index === 4 ? -100 : 100 }}
                            whileInView={{ x: 0 }}
                            style={{
                                height: "100%",
                                overflow: "hidden"
                            }}
                        >
                            <Box
                                sx={{
                                    padding: {
                                        lg: "59px 37px 81px 42px",
                                        md: "59px 37px 81px 42px",
                                        sm: "32px 43px 53px 23px",
                                        xs: "32px 43px 53px 23px",
                                    },
                                    background: item.bg,
                                    borderRadius: {
                                        lg: "55px",
                                        md: "55px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    height: "100%",
                                    overflow: "hidden"

                                }}
                            >
                                <Typography sx={text1Style}>{item.title1}</Typography>
                                <Typography sx={text2Style}>{item.title2}</Typography>
                                <Typography sx={descriptionStyle}>{item.description}</Typography>
                                <Button sx={btnStyle} onClick={()=> setEnroll(true)}>{item.btnText}</Button>
                            </Box>
                        </motion.div>
                    )}
                </Grid>
            ))}
        </Grid>
    );
}
