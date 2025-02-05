
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import { subServices } from "../services/websiteApis/services";
import { motion } from "framer-motion"
import LetsProject from "../components/letsProject";
import SpaceNetLayout from "../components/spaceNetLayout";
import { Helmet } from "react-helmet";
import CoreItSection1 from "../components/coreIt/coreIt";
import SectionDescription from "../components/sectionDescription";
import LayoutCards from "../components/layoutCards";
import OurCourses from "../components/academics/ourCourses";
import NetworkSolution from "../assets/sectionsImages/coteIt/networkSolution";
import Security from "../assets/sectionsImages/coteIt/security";
import ServicesSvg from "../assets/sectionsImages/coteIt/services";
import SystemSvg from "../assets/sectionsImages/coteIt/system";
import { useTranslation } from "react-i18next";

const serviceTypesMock = [
    "Website Development",
    "Mobile App Development",
    "Web App Development",
    "Desktop App Development"
];


export default function CoreIt({ setOpen }) {
    const { t } = useTranslation()
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const [data, setData] = useState([])
    const serviceTypes = Array.isArray(data) && data.length > 0
        ? data.map((item) => item.title)
        : serviceTypesMock;
    const [loading, setLoading] = useState(false)
    const pathname = useLocation()
    const id = pathname.pathname.split('/').filter(Boolean)
    const technologiesDataImage = [
        { id: 0, image: <NetworkSolution hoveredcardid={hoveredcardid} itemID={5} /> },
        { id: 1, image: <Security hoveredcardid={hoveredcardid} itemID={6} /> },
        { id: 2, image: <SystemSvg hoveredcardid={hoveredcardid} itemID={7} /> },
        { id: 3, image: <ServicesSvg hoveredcardid={hoveredcardid} itemID={8} /> },

    ];
    const technologiesData = [
        { id: 0, title: t("coreIt.NetworkSolutions"), description: t("coreIt.weOffer") },
        { id: 1, title: t("coreIt.SecuritySolutions"), description: t("coreIt.ourSecurity") },
        { id: 2, title: t("coreIt.SystemInfrastructure"), description: t("coreIt.ourSystem") },
        { id: 3, title: t("coreIt.ConsultancyServices"), description: t("coreIt.weAlsoOffer") },

    ];

    useEffect(() => {
        setLoading(true)
        const fetchSubServices = async () => {
            try {
                const response = await subServices(id);
                setData(response.data)
                setLoading(false)
            } catch (error) {
            }
        };
        if (id) {
            fetchSubServices();
        }
    }, []);

    const theme = useTheme()
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>CORE IT</title>
                <link rel="canonical" href="https://spacenetiq/core-it" />
            </Helmet>
            <motion.div
                className="root-container"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                    duration: 1
                }}
            >

                <Grid className="root-container"
                    sx={{
                        padding: {
                            lg: "75px 75px 0 75px",
                            md: "75px 75px 0 75px",
                            sm: "75px 20px 0 20px",
                            xs: "75px 20px 0 20px",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "53px",
                                md: "53px",
                                sm: "40px",
                                xs: "30px"
                            },
                            textAlign: "center",
                            fontFamily: "var(--English-font)"
                        }}
                    >
                        {t("coreIt.MakeUse")}
                    </Typography>

                </Grid>
                <CoreItSection1 />
                <Box
                    sx={{
                        background: theme.palette.mode === 'dark' ? "#05203B" : "#FFFFFF",
                        padding: {
                            xl: "50px 116px 103px 116px",
                            lg: "50px 116px 103px 116px",
                            md: "50px 75px 103px 75px",
                            sm: "85px 20px 75px 20px",
                            xs: "85px 20px 75px 20px",
                        },
                        borderRadius: {
                            lg: "95px",
                            md: "95px",
                            sm: "30px",
                            xs: "30px"
                        }
                    }}
                >

                    <SectionDescription
                        text1={t("coreIt.WhatWeDo")}
                        academicsSection="first"
                        top="0px"

                    />
                    <OurCourses />
                </Box>
                <Box
                    sx={{
                        padding: {
                            xl: "110px 74px 103px 74px",
                            lg: "110px 74px 103px 74px",
                            md: "110px 75px 103px 75px",
                            sm: "85px 20px 75px 20px",
                            xs: "85px 20px 75px 20px",
                        },

                    }}
                >
                    <SectionDescription
                        text1={t("coreIt.WhatWeDesign")}
                        top="80px"
                    />
                    <LayoutCards
                        technologiesData={technologiesData}
                        sethoveredcardid={sethoveredcardid}
                        hoveredcardid={hoveredcardid}
                        technologiesDataImage={technologiesDataImage}
                    />
                </Box>

                <LetsProject
                    text1={t("coreIt.WanttoBuild")}
                    text2={t("coreIt.ScheduleConsultation")}
                    btnText={t("coreIt.LetTalk")}
                    cardBg="#E9FA50"
                    text1Color="#051A2F"
                    text2Color="#051A2F"
                    setOpen={setOpen}
                />
                <SpaceNetLayout setOpen={setOpen} />
            </motion.div>

        </>
    )
}