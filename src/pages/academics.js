import React, { Suspense, useEffect, useMemo, useState, lazy } from "react";

import { Grid } from "@mui/material";
import { motion } from "framer-motion"

import LifeTime from "../assets/sectionsImages/academics/lifeTime";
import ClassRoom from "../assets/sectionsImages/academics/classRoom";
import OnlineCourses from "../assets/sectionsImages/academics/onlineCourses";
import BootCamp from "../assets/sectionsImages/academics/bootCamp";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const SpaceNetLayout = React.lazy(() => import("../components/spaceNetLayout"));
const LetsProject = lazy(() => import("../components/letsProject"));
const WhichCourse = lazy(() => import("../components/academics/whichCourse"));
const SectionDescription = lazy(() => import("../components/sectionDescription"));
const LayoutCards = lazy(() => import("../components/layoutCards"));
const OurCourses = lazy(() => import("../components/academics/ourCourses"));
const DevelopSkillsText = lazy(() => import("../components/academics/developSkillsText"));
const DevelopSkills = lazy(() => import("../components/academics/developSkills"));
const AcademicsForm = lazy(() => import("../components/academics/academicsFrom"));
export default function Academics({ setOpen }) {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const { t } = useTranslation()
    const technologiesData = useMemo(() => [
        {
            id: 0,
            title: t("academics.Coursesin"),
            description: t("academics.ourCoursesare"),
            image: [t("academics.English"), t("academics.Kurdish"), t("academics.Arabic")]
        },
        {
            id: 1,
            title: t("academics.Lifetime"),
            description: t("academics.Getlifetime"),
            image: <LifeTime hoveredcardid={hoveredcardid} itemID={1} />
        },
        {
            id: 2,
            title: t("academics.anylevel"),
            description: t("academics.noMatter"),
            image: [t("academics.Junior"), t("academics.Intermediate"), t("academics.Advanced")]
        },
        {
            id: 3,
            title: t("academics.VirtualClassroom"),
            description: t("academics.learnFrom"),
            image: <ClassRoom hoveredcardid={hoveredcardid} itemID={3} />
        },
        {
            id: 4,
            title: t("academics.pre"),
            description: t("academics.Ourpremade"),
            image: <OnlineCourses hoveredcardid={hoveredcardid} itemID={4} />
        },
        {
            id: 5,
            title: t("academics.BootcampCourses"),
            description: t("academics.ourBootcamp"),
            image: <BootCamp hoveredcardid={hoveredcardid} itemID={5} />
        },
    ], [t, hoveredcardid]);

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
                <Suspense fallback={<div>Loading...</div>}>
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
                            technologiesData={technologiesData}
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
                </Suspense>

            </motion.div>
        </>
    )
}