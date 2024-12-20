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

export default function Academics({ setOpen }) {
    const [hoveredcardid, sethoveredcardid] = useState(null);

    const technologiesData = [
        {
            id: 0,
            title: "Courses in English , Kurdish & Arabic",
            description: "Our courses are delivered in Kurdish, Arabic, and English, making it easy for you to learn in the language you’re most comfortable with. Whether it’s coding, designing, or networking, we ensure every lesson is clear, accessible, and tailored to your needs.",
            image: ['English', 'Kurdish', 'Arabic']
        },
        {
            id: 1,
            title: "Lifetime Access"
            , description: "Get lifetime access to the resources and course materials, enabling you to keep learning and growing over time.",
            image: <LifeTime hoveredcardid={hoveredcardid} itemID={1} />
        },
        {
            id: 2,
            title: "Any Level",
            description: "No matter where you are in your journey—just starting out as a junior, leveling up as an intermediate, or sharpening your advanced skills—our courses are built to meet your needs. Learn, grow, and succeed with us!",
            image: ['Junior', 'Intermediate', 'Advanced',]

        },
        { id: 3, title: "Virtual Classroom course", description: "Learn from anywhere with our virtual classroom! Connect with expert instructors, collaborate with peers, and enjoy interactive tools for a dynamic, immersive learning experience. Success is just a click away!", image: <ClassRoom hoveredcardid={hoveredcardid} itemID={3} /> },
        { id: 4, title: "Pre - Made Courses", description: "Our pre-made courses deliver expert-designed content that’s practical, engaging, and ready to go. Perfect for individuals or teams, they fast-track skill-building with structured, interactive modules tailored to your goals. Learn smarter, not harder!", image: <OnlineCourses hoveredcardid={hoveredcardid} itemID={4} /> },
        { id: 5, title: "Bootcamp Courses", description: "Our bootcamp courses in each field provide an intensive, hands-on learning experience. Guided by industry experts, you'll master essential skills through real-world projects and focused training. Perfect for those ready to level up quickly and confidently in their careers!", image: <BootCamp hoveredcardid={hoveredcardid} itemID={5} /> },

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
                        text="Develop your skills in "
                    />
                    <DevelopSkills setOpen={setOpen} setEnroll={setEnroll} />
                    <SectionDescription
                        text1="What We Teach"
                        text2="Explore Our Courses Now and Choose What You Need"
                        academicsSection="first"

                    />
                    <OurCourses setEnroll={setEnroll} enroll={enroll} />
                    <SectionDescription
                        text1="Our Perks"
                        text2="Full features that offer a practical experience. This is an interactive educational experience rather than a follow-along tutorial. Learn new things and become an expert at what you do."
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
                    text1={<>Ready to kickstart your tech journey?</>}
                    // text2="A SpacenNet technology company can help you improve your idea and turn it into reality if you're facing a challenge"
                    btnText="Start now!"
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