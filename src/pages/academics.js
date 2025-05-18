import Grid from "@mui/material/Grid";
import React, { useEffect, useMemo, useState } from "react";
import SpaceNetLayout from "../components/spaceNetLayout";
import { motion } from "framer-motion"
import LetsProject from "../components/letsProject";
import SectionDescription from "../components/sectionDescription";
import DevelopSkillsText from "../components/academics/developSkillsText";
import DevelopSkills from "../components/academics/developSkills";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import technologiesData from "../components/jsonData/technologiesData";
import AcademicsForm from "../components/academics/academicsFrom";
import WhichCourse from "../components/academics/whichCourse";
import OurCourses from "../components/academics/ourCourses";
import LayoutCards from "../components/layoutCards";

export default function Academics({ setOpen }) {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const { t } = useTranslation()
    const data = useMemo(() => technologiesData(t, hoveredcardid), [t, hoveredcardid]);
    const [enroll, setEnroll] = useState(false)

    useEffect(() => {
    if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({
        top: 0,
        behavior: 'auto', 
    });
}, []);

    return (
        <>
            <Helmet>
                <title>Academics</title>
                <meta charSet="utf-8" />
        <link rel="canonical" href="https://spacenetiq.com/academics" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                    duration: 1
                }}
            >
                <AcademicsForm enroll={enroll} setEnroll={setEnroll} />
                <Grid className="root-container"
                    sx={{
                        padding: {
                            xl: "100px 116px 0 116px",
                            lg: "60px 116px 0 116px",
                            md: "100px 75px 0 75px",
                            sm: "100px 20px 0 20px",
                            xs: "100px 20px 0 20px",
                        },
                        overflowX: "hidden"
                    }}
                >
                    <DevelopSkillsText
                        text={t("academics.developSkills")}
                    />
                    <DevelopSkills setOpen={setOpen} setEnroll={setEnroll} />
                    <SectionDescription
                        text1={t("academics.whatwetech")}
                        text2={t("academics.exploreOur")}
                        academicsSection="first"

                    />
                    <OurCourses hoveredcardid={hoveredcardid} sethoveredcardid={sethoveredcardid} setEnroll={setEnroll} enroll={enroll} />
                    <SectionDescription
                        text1={t("academics.ourPerks")}
                        text2={t("academics.FullFeature")}
                        top="80px"
                        academicsSection="sec"
                    />
                    <LayoutCards
                        technologiesData={data}
                        sethoveredcardid={sethoveredcardid}
                        hoveredcardid={hoveredcardid}
                    />
                </Grid>
                <WhichCourse />
                <LetsProject
                    text1={t("academics.Readytokickstart")}
                    // text2="A SpacenNet technology company can help you improve your idea and turn it into reality if you're facing a challenge"
                    btnText={t("academics.startNow")}
                    cardBg="#FA6423"
                    text1Color="#FFFFFF"
                    text2Color="#FFFFFF"
                    setOpen={setOpen}
                />
                <SpaceNetLayout setOpen={setOpen} />
            </motion.div>
        </>
    )
}