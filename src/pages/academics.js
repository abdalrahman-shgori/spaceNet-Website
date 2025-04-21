import Grid from "@mui/material/Grid";
import React, { lazy, Suspense, useEffect, useMemo, useState } from "react";
import SpaceNetLayout from "../components/spaceNetLayout";
import { motion } from "framer-motion"
import LetsProject from "../components/letsProject";
import SectionDescription from "../components/sectionDescription";
import DevelopSkillsText from "../components/academics/developSkillsText";
import DevelopSkills from "../components/academics/developSkills";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import technologiesData from "../components/jsonData/technologiesData";

const OurCourses = lazy(() => import("../components/academics/ourCourses"))
const LayoutCards = lazy(() => import("../components/layoutCards"))
const AcademicsForm = lazy(() => import("../components/academics/academicsFrom"))
const WhichCourse = lazy(() => import("../components/academics/whichCourse"))

export default function Academics({ setOpen }) {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const { t } = useTranslation()
    const data = useMemo(() => technologiesData(t, hoveredcardid), [t, hoveredcardid]);
    const [enroll, setEnroll] = useState(false)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    return (
        <>
            <Helmet>
                <title>Academics</title>
                <meta name="description" content="Explore our academics courses and bootcamps." />
                <meta property="og:title" content="SPACENET Academics" />
                <meta property="og:description" content="Learn new skills with SPACENET's lifetime access courses and bootcamps." />
                <meta property="og:image" content="https://spacenetiq.com/academics-image.jpg" />
                <meta property="og:url" content="https://spacenetiq.com/academics" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="SPACENET" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@spacenetiq" />
                <meta name="twitter:title" content="Academics | SPACENET" />
                <meta name="twitter:description" content="Explore our academics courses and bootcamps." />
                <meta name="twitter:image" content="https://spacenetiq.com/academics-image.jpg" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                    duration: 1
                }}
            >
                <Suspense fallback={null}>
                    <AcademicsForm enroll={enroll} setEnroll={setEnroll} />
                </Suspense>
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
                    <Suspense fallback="loading">
                        <OurCourses hoveredcardid={hoveredcardid} sethoveredcardid={sethoveredcardid} setEnroll={setEnroll} enroll={enroll} />
                    </Suspense>
                    <SectionDescription
                        text1={t("academics.ourPerks")}
                        text2={t("academics.FullFeature")}
                        top="80px"
                        academicsSection="sec"
                    />
                    <Suspense fallback="loading">
                        <LayoutCards
                            technologiesData={data}
                            sethoveredcardid={sethoveredcardid}
                            hoveredcardid={hoveredcardid}
                        />
                    </Suspense>


                </Grid>
                <Suspense fallback={null}>
                    <WhichCourse />
                </Suspense>
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