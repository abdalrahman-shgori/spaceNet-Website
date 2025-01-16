import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SpaceNetLayout from "../components/spaceNetLayout";
import { motion } from "framer-motion";
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
import AcademicsForm from "../components/academics/academicsFrom";
import { useTranslation } from "react-i18next";

export default function Academics({ setOpen }) {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const { t } = useTranslation();
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

    const [enroll, setEnroll] = useState(false);

    useEffect(() => {
        // Setting the document title
        document.title = t("academics.pageTitle");
    
        // Setting the meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", t("academics.pageDescription"));
        } else {
            const newMetaDescription = document.createElement('meta');
            newMetaDescription.name = "description";
            newMetaDescription.content = t("academics.pageDescription");
            document.head.appendChild(newMetaDescription);
        }
    
        // Log the updated head content after changes
        setTimeout(() => {
            console.log(document.head.innerHTML);  // Log the head content after update
        }, 100); // 100ms delay to ensure the changes are made
    
        // Repeat for other meta tags (e.g., og:title, og:description)
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute("content", t("academics.pageTitle"));
        } else {
            const newOgTitle = document.createElement('meta');
            newOgTitle.setAttribute("property", "og:title");
            newOgTitle.setAttribute("content", t("academics.pageTitle"));
            document.head.appendChild(newOgTitle);
        }
    
        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) {
            ogDescription.setAttribute("content", t("academics.pageDescription"));
        } else {
            const newOgDescription = document.createElement('meta');
            newOgDescription.setAttribute("property", "og:description");
            newOgDescription.setAttribute("content", t("academics.pageDescription"));
            document.head.appendChild(newOgDescription);
        }
    
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) {
            ogImage.setAttribute("content", "path-to-image.jpg"); // Update with actual image path
        } else {
            const newOgImage = document.createElement('meta');
            newOgImage.setAttribute("property", "og:image");
            newOgImage.setAttribute("content", "path-to-image.jpg"); // Update with actual image path
            document.head.appendChild(newOgImage);
        }
    
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [t]);  // Depend on the translation function to update meta tags when the language changes
     // Depend on the translation function to update meta tags when the language changes

    useEffect(() => {
        console.log(document.head.innerHTML); // Check if Helmet tags are added
      }, []);
    return (
        <>
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
                    btnText={t("academics.startNow")}
                    cardBg="#FA6423"
                    text1Color="#FFFFFF"
                    text2Color="#FFFFFF"
                    setOpen={setOpen}
                />
                <SpaceNetLayout setOpen={setOpen} />
            </motion.div>
        </>
    );
}
