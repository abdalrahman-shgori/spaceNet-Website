import React, { useEffect, useMemo, useState } from "react";
import BusinessGoals from "../components/softwareSection/businessGoals";
import Grid from "@mui/material/Grid";
import ContactUsBtn from "../components/softwareSection/contactUsBtn";
import { useLocation } from "react-router-dom";
import WhatWeDo from "../components/whatweDo/whatWeDo";
import SectionDescription from "../components/sectionDescription";
import { subServices } from "../services/websiteApis/services";
import { motion } from "framer-motion"
import { ServiceCategories } from "../services/websiteApis/serviceCategories";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import OurTechnologies from "../components/softwareSection/Our technologies Section/ourTechnology";
import LetsProject from "../components/letsProject";
import SpaceNetLayout from "../components/spaceNetLayout";
import LayoutCards from "../components/layoutCards";
import FrontEndSvg from "../assets/sectionsImages/frontEndImage";
import BackEndSvg from "../assets/sectionsImages/backendImage";
import FullStackSvg from "../assets/sectionsImages/fullstack";
import LowCodeSvg from "../assets/sectionsImages/lowcode";
import CloudDevelopmentSvg from "../assets/sectionsImages/clouddevelopment";

const serviceColors = {
    "Website Development": "#9D89FC",
    "Mobile App Development": "#E9FA50",
    "Web App Development": "#1CB786",
    "Desktop App Development": "#FF621F"
};
export default function SoftwareSection({ setOpen }) {

    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const serviceTypesMock = [
        t("software.WebsiteDevelopment"),
        t("software.MobileAppDevelopment"),
        t("software.WebAppDevelopment"),
        t("software.DesktopAppDevelopment"),
    ];
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const [data, setData] = useState([])
    const serviceTypes = useMemo(() => {
        return Array.isArray(data) && data.length > 0
            ? data.map((item) =>
                lang === 'ar' ? item.title_ar :
                    lang === 'ku' ? item.title_ku :
                        item.title)
            : serviceTypesMock;
    }, [data, lang, serviceTypesMock]);
    const serviceColors = useMemo(() => {
        return serviceTypes.reduce((colors, type, index) => {
            const colorMapping = [
                "#9D89FC",
                "#E9FA50",
                "#1CB786",
                "#FF621F",
            ];
            colors[type] = index < colorMapping.length ? colorMapping[index] : "#F5F5F5";
            return colors;
        }, {});
    }, [serviceTypes]);

    const [loading, setLoading] = useState(false)
    const [currentServiceType, setCurrentServiceType] = useState(serviceTypes[0]);
    const [nextServiceType, setNextServiceType] = useState(serviceTypes[1]);
    const lastCardId = data.length > 0 ? data[data.length - 1].id : null;
    const pathname = useLocation()
    const id = pathname.pathname.split('/').filter(Boolean)
    const technologiesDataImage = [
        { id: 0, image: <FrontEndSvg hoveredcardid={hoveredcardid} itemID={5} /> },
        { id: 1, image: <BackEndSvg hoveredcardid={hoveredcardid} itemID={6} /> },
        { id: 2, image: <FullStackSvg hoveredcardid={hoveredcardid} itemID={7} /> },
        { id: 3, image: <LowCodeSvg hoveredcardid={hoveredcardid} itemID={8} /> },
        { id: 4, image: <CloudDevelopmentSvg hoveredcardid={hoveredcardid} itemID={9} /> },

    ];
    const [technologiesData, setTechnologiesData] = useState([])

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
    useEffect(() => {
        setLoading(true)
        const fetchServiceCategories = async () => {
            try {
                const response = await ServiceCategories(id);
                setTechnologiesData(response.data)
                setLoading(false)
            } catch (error) {
            }
        };
        if (id) {
            fetchServiceCategories();
        }
    }, []);
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
                <title>SOFTWARE</title>
                <link rel="canonical" href="https://spacenetiq/software" />
            </Helmet>
            <motion.div
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
                            lg: "134px 75px 0 75px",
                            md: "124px 75px 0 75px",
                            sm: "100px 20px 0 20px",
                            xs: "100px 20px 0 20px",
                        },
                    }}
                >
                    <BusinessGoals
                        currentServiceType={currentServiceType}
                        setCurrentServiceType={setCurrentServiceType}
                        nextServiceType={nextServiceType}
                        setNextServiceType={setNextServiceType}
                        serviceTypes={serviceTypes}
                        serviceColors={serviceColors}
                        goalDescription={t("software.AchieveBusiness")}
                        serviceType="Website Development"
                        serviceBgColor="#9D89FC"
                        data={data}
                    />
                    <ContactUsBtn setOpen={setOpen} />
                    <WhatWeDo
                        data={data}
                        lastCardId={lastCardId}
                        loading={loading}
                    />
                    <SectionDescription
                        text1={t("software.unlockMaximum")}
                        text2={t("software.driveYour")}
                        top="80px"
                    />
                        <LayoutCards
                            technologiesData={technologiesData}
                            sethoveredcardid={sethoveredcardid}
                            hoveredcardid={hoveredcardid}
                            technologiesDataImage={technologiesDataImage}
                        />
                    <SectionDescription
                        text1={t("software.ourTechnology")}
                        top="43px"
                    />
                        <OurTechnologies />
                </Grid>
                    <LetsProject
                        text1={<>{t("software.gotGreat")}<br /> {t("software.Ready")} </>}
                        text2={t("software.letsMake")}
                        btnText={t("software.letsTalk")}
                        cardBg="#9D89FC"
                        text1Color="#051A2F"
                        text2Color="#051A2F"
                        setOpen={setOpen}
                    />
                    <SpaceNetLayout setOpen={setOpen} />
            </motion.div>

        </>
    )
}