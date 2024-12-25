import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SpaceNetLayout from "../components/spaceNetLayout";
import { motion } from "framer-motion"
import LetsProject from "../components/letsProject";
import WhichCourse from "../components/academics/whichCourse";
import SectionDescription from "../components/sectionDescription";
import LayoutCards from "../components/layoutCards";
import LifeTime from "../assets/sectionsImages/academics/lifeTime";
import ClassRoom from "../assets/sectionsImages/academics/classRoom";
import OnlineCourses from "../assets/sectionsImages/academics/onlineCourses";
import BootCamp from "../assets/sectionsImages/academics/bootCamp";
import OurCourses from "../components/academics/ourCourses";
import DevelopSkillsText from "../components/academics/developSkillsText";
import DevelopSkills from "../components/academics/developSkills";
import { Helmet } from "react-helmet";
import AcademicsForm from "../components/academics/academicsFrom";
import { useTranslation } from "react-i18next";

export default function Academics({ setOpen }) {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const { t } = useTranslation()
    const technologiesData = [
        {
            id: 0,
            title: t("academics.Coursesin"),
            description: t("academics.ourCoursesare"),
            image: [t("academics.English"), t("academics.Kurdish"), t("academics.Arabic")]
        },
        {
            id: 1,
            title: t("academics.Lifetime")
            , description: t("academics.Getlifetime"),
            image: <LifeTime hoveredcardid={hoveredcardid} itemID={1} />
        },
        {
            id: 2,
            title: t("academics.anylevel"),
            description: t("academics.noMatter"),
            image: [t("academics.Junior"), t("academics.Intermediate"), t("academics.Advanced"),]

        },
        { id: 3, title: t("academics.VirtualClassroom"), description: t("academics.learnFrom"), image: <ClassRoom hoveredcardid={hoveredcardid} itemID={3} /> },
        { id: 4, title: t("academics.pre"), description: t("academics.Ourpremade"), image: <OnlineCourses hoveredcardid={hoveredcardid} itemID={4} /> },
        { id: 5, title: t("academics.BootcampCourses"), description: t("academics.ourBootcamp"), image: <BootCamp hoveredcardid={hoveredcardid} itemID={5} /> },

    ];

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
                <meta charSet="utf-8" />
                <title>SPACENET ACADEMICS</title>
                <link rel="canonical" href="https://spacenetiq/academics" />
            </Helmet>
            <motion.div>
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
                    <OurCourses setEnroll={setEnroll} enroll={enroll} />
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
            </motion.div>
        </>
    )
}