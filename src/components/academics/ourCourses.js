import React, { useMemo } from "react";
import deployment from "../../assets/sectionsImages/coteIt/deployment.svg";
import Consultancy from "../../assets/sectionsImages/coteIt/Consultancy.svg";
import designImg from "../../assets/sectionsImages/coteIt/designImg.svg";
import Illustration from "../../assets/sectionsImages/academics/Illustration.svg";
import Network from "../../assets/sectionsImages/academics/network.svg";
import complexProject from "../../assets/sectionsImages/academics/complexProject.svg";
import itManagment from "../../assets/sectionsImages/academics/itManagment.svg";
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ExploreLearning from "./exploreSections";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Typography'
import Box from '@mui/material/Box'
function OurCourses({ hoveredcardid, sethoveredcardid, setEnroll }) {
    const location = useLocation()
    const text1Style = {
        fontSize: {
            lg: "14px",
            md: "14px",
            sm: "12px",
            xs: "12px"
        },
        lineHeight: "auto",
        fontFamily: "var(--English-font), Arial, sans-serif",
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
        fontFamily: "var(--English-font), Arial, sans-serif",
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
        width: "100%",

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
        display: "inline-block",
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
        fontFamily: "var(--English-font), Arial, sans-serif",
        cursor: "pointer"


    };
    const { t, i18n } = useTranslation()
    const dir = i18n.dir()
    const coursesData = useMemo(() => {
        return location.pathname === '/core-it'
            ? [
                { id: 0, title1: "", title2: t("academics.design"), description: t("academics.ourDesign"), bg: "#F4F4F4", img: undefined },
                { id: 1, img: designImg, bg: "#E9FA50" },
                { id: 2, bg: "#FA6423", img: deployment },
                { id: 3, title2: t("academics.Deployment"), description: t("academics.ourDeployment"), btnText: t("academics.enrollNow"), bg: "#F4F4F4", img: undefined },
                { id: 4, title2: t("academics.Management"), description: t("academics.Ourmanagement"), btnText: t("academics.enrollNow"), bg: "#F4F4F4", img: undefined },
                { id: 5, bg: "#1CB786", img: Consultancy }
            ]
            : [
                { id: 0, title1: t("academics.startLearn"), title2: t("academics.DigitalDesign"), description: t("academics.dive"), btnText: t("academics.startLearn"), bg: "#FFFFFF", img: undefined },
                { id: 1, img: complexProject, bg: "#1CB786" },
                { id: 2, bg: "#9D89FC", img: Illustration },
                { id: 3, title1: t("academics.startLearn"), title2: t("academics.SoftwareDevelopment"), description: t("academics.lunchTech"), btnText: t("academics.startLearn"), bg: "#FFFFFF", img: undefined },
                { id: 4, title1: t("academics.startLearn"), title2: t("academics.Network"), description: t("academics.buildYourFuture"), btnText: t("academics.startLearn"), bg: "#FFFFFF", img: undefined },
                { id: 5, bg: "#E9FA50", img: Network },
                { id: 6, bg: "#FA6423", img: itManagment },
                { id: 7, title1: t("academics.startLearn"), title2: t("academics.ITManagement"), description: t("academics.buildYourFuture"), btnText: t("academics.startLearn"), bg: "#FFFFFF", img: undefined }
            ];
    }, [location.pathname, t]);

    const getBackgroundColor = (id) => {
        const colors = {
            1: "#1CB786",
            3: "#9D89FC",
            5: "#E9FA50",
            6: "#FA6423",
            7: "#FA6423",
        };
        return colors[id] || "#FFFFFF";
    };

    const getOrder = (id) => {
        const orderMap = {
            0: 0,
            1: 1,
            3: 3,
            2: 3,
            4: 4,
            6: 7,
        };
        return orderMap[id] || 6;
    };
    return (
        <>

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
                    <>
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
                                                        : item.id === 6
                                                            ? 7 : 6,
                                    sm: 'unset'
                                },
                                marginTop: {
                                    lg: index > 1 ? "66px" : undefined,
                                    md: index > 1 ? "50px" : undefined,
                                    sm: index > 1 ? "50px" : undefined,
                                    xs: item.id === 1
                                        ? "6px" : item.id === 3
                                            ? "50px" : item.id === 2
                                                ? "6px" : item.id === 4 ? "50px" : item.id === 5 ? "6px" : item.id === 7 ? "50px" : '6px'
                                },
                                paddingRight: dir === 'ltr' && index % 2 === 0 ? "5.9px" : "0",
                                paddingLeft: dir === 'rtl' && index % 2 === 0 ? "5.9px" : "0",
                                maxHeight: "601px",
                                overflow: "hidden",
                            }}
                        >
                            {item.img !== undefined ? (
                                <motion.div
                                    initial={
                                        dir === 'ltr' ?
                                            { x: index === 1 || index === 5 ? 100 : -100 }
                                            :
                                            { x: index === 1 || index === 5 ? -100 : 100 }
                                    }
                                    whileInView={{ x: 0 }}
                                    style={{
                                        height: "100%",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: location.pathname === "/core-it" ? {
                                                lg: "43px 42px 43px 37px",
                                                md: "43px 42px 43px 37px",
                                                sm: "52px 42px 52px 37px",
                                                xs: "52px 42px 52px 37px"
                                            } : {
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
                                                loading="lazy"
                                                alt="our courses"
                                                sx={
                                                    location.pathname !== '/core-it' ?
                                                        {
                                                            maxWidth: "304px",
                                                            width: "100%",
                                                        } :
                                                        {
                                                            maxWidth: index === 1 ? "322px" : index === 2 ? "341px" : index === 5 ? "380px" : '',
                                                            width: "100%",
                                                            height: "296px"
                                                        }
                                                }
                                            />
                                        </Box>
                                    </Box>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={
                                        dir === 'ltr' ?
                                            { x: index === 0 || index === 2 || index === 4 ? -100 : 100 }
                                            :
                                            { x: index === 0 || index === 2 || index === 4 ? 100 : -100 }
                                    }
                                    whileInView={{ x: 0 }}
                                    style={{
                                        height: "100%",
                                        overflow: "hidden"
                                    }}
                                >
                                    <Box
                                        sx={
                                            location.pathname !== '/core-it' ?
                                                {
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
                                                    overflow: "hidden",

                                                } :
                                                {
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
                                                    overflow: "hidden",
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: "center",

                                                }
                                        }
                                    >
                                        <Typography sx={text1Style}>{item.title1}</Typography>
                                        <Typography sx={text2Style}>{item.title2}</Typography>
                                        <Typography sx={descriptionStyle}>{item.description}</Typography>
                                        {location.pathname !== '/core-it' && (
                                            <Button sx={btnStyle} onClick={() => setEnroll(true)}>{item.btnText}</Button>
                                        )}
                                    </Box>

                                </motion.div>
                            )}

                        </Grid>
                        <Grid item
                            sx={{
                                display: {
                                    sm: "unset",
                                    xs: "none",
                                },
                            }}
                        >
                            {location.pathname === '/academics' && [1, 3, 5, 7].includes(item.id) && (
                                <ExploreLearning
                                    hoveredcardid={hoveredcardid}
                                    sethoveredcardid={sethoveredcardid}
                                    setEnroll={setEnroll}
                                    itemid={item.id}
                                    bg={getBackgroundColor(item.id)}
                                />
                            )}
                        </Grid>

                        <Grid item
                            sx={{
                                display: {
                                    sm: "none",
                                    xs: "unset",
                                },
                                order: {
                                    xs: getOrder(item.id),
                                    sm: 'unset',
                                },
                            }}
                        >
                            {location.pathname === '/academics' && [1, 3, 5, 6].includes(item.id) && (
                                <ExploreLearning
                                    hoveredcardid={hoveredcardid}
                                    sethoveredcardid={sethoveredcardid}
                                    setEnroll={setEnroll}
                                    itemid={item.id}
                                    bg={getBackgroundColor(item.id)}
                                />
                            )}
                        </Grid>
                    </>
                ))}
            </Grid>
        </>
    );
}
export default OurCourses