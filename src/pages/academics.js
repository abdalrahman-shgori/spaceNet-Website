import { Grid } from "@mui/material";
import React, { useState } from "react";
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

export default function Academics() {
    const [hoveredcardid, sethoveredcardid] = useState(null);

    const technologiesData = [
        {
            id: 0,
            title: "Courses in English & Kurdish & Arabic",
            description: "Lorem  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            image: ['English', 'Kurdish', 'Arabic']
        },
        {
            id: 1,
            title: "Lifetime Access"
            , description: "Get lifetime access to the resources and course materials, enabling you to keep learning and growing over time. ",
            image: <LifeTime hoveredcardid={hoveredcardid} itemID={1} />
        },
        {
            id: 2,
            title: "Any Level",
            description: "Develop your proficiency in one of the three languages. For a smooth user experience and inclusive content, our website provides subtitles in English, Spanish, and Portuguese.",
            image: ['Junior', 'Intermediate', 'Advanced',]

        },
        { id: 3, title: "Virtual Classroom course", description: "Make use of a platform that offers an engaging and dynamic educational experience at your convenience.", image: <ClassRoom hoveredcardid={hoveredcardid} itemID={3} /> },
        { id: 4, title: "Online course", description: "Lorem  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", image: <OnlineCourses hoveredcardid={hoveredcardid} itemID={4} /> },
        { id: 5, title: "Bootcamp course", description: "Lorem  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.", image: <BootCamp hoveredcardid={hoveredcardid} itemID={5} /> },

    ];
    return (
        <>
            <motion.div>
                <Grid className="root-container"
                    sx={{
                        padding: {
                            lg: "134px 116px 0 116px",
                            md: "124px 75px 0 75px",
                            sm: "100px 20px 0 20px",
                            xs: "100px 20px 0 20px",
                        },
                    }}
                >
                    <SectionDescription
                        text1="Our Courses"
                        text2="Explore Our Courses Now and Choose What You Need"
                        academicsSection="first"

                    />
                    <OurCourses />
                    <SectionDescription
                        text1="Our features"
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
                    text1={<>Got a Great Idea?<br /> Ready to Bring it to Life?</>}
                    text2="Let’s make it happen"
                    btnText="Let’s Talk business!"
                    cardBg="#FA6423"
                    text1Color="#FFFFFF"
                    text2Color="#FFFFFF"
                />
                <SpaceNetLayout />
            </motion.div>

        </>
    )
}