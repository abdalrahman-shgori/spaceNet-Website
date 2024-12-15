import React, { useEffect, useState } from "react";
import BusinessGoals from "../components/softwareSection/businessGoals";
import { Grid } from "@mui/material";
import ContactUsBtn from "../components/softwareSection/contactUsBtn";
import { useLocation } from "react-router-dom";
import WhatWeDo from "../components/whatweDo/whatWeDo";
import SectionDescription from "../components/sectionDescription";
import LayoutCards from "../components/layoutCards";
import FrontEndSvg from "../assets/sectionsImages/frontEndImage";
import BackEndSvg from "../assets/sectionsImages/backendImage";
import FullStackSvg from "../assets/sectionsImages/fullstack";
import LowCodeSvg from "../assets/sectionsImages/lowcode";
import CloudDevelopmentSvg from "../assets/sectionsImages/clouddevelopment";
import { subServices } from "../services/websiteApis/services";
import { motion } from "framer-motion"
import OurTechnologies from "../components/softwareSection/Our technologies Section/ourTechnology";
import LetsProject from "../components/letsProject";
import SpaceNetLayout from "../components/spaceNetLayout";
import { ServiceCategories } from "../services/websiteApis/serviceCategories";
import { Helmet } from "react-helmet";

const serviceTypesMock = [
    "Website Development",
    "Mobile App Development",
    "Web App Development",
    "Desktop App Development"
];

const serviceColors = {
    "Website Development": "#9D89FC",
    "Mobile App Development": "#E9FA50",
    "Web App Development": "#1CB786",
    "Desktop App Development": "#FF621F"
};
export default function SoftwareSection({ setOpen }) {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const [data, setData] = useState([])
    const serviceTypes = Array.isArray(data) && data.length > 0
        ? data.map((item) => item.title)
        : serviceTypesMock;
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
                console.error('Error fetching sub-service data: ', error);
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
                console.error('Error fetching sub-service data: ', error);
            }
        };
        if (id) {
            fetchServiceCategories();
        }
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SPACENET SOFTWARE</title>
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
                        goalDescription={`Achieve your business goals with our`}
                        serviceType="Website Development"
                        serviceBgColor="#9D89FC"
                        data={data}
                    />
                    <ContactUsBtn setOpen={setOpen} />
                    <WhatWeDo
                        setData={setData}
                        data={data}
                        lastCardId={lastCardId}
                        loading={loading}
                    />
                    <SectionDescription
                        text1="Unlock Maximum Value with the Right Technologies"
                        text2="Drive your business forward by tackling customer challenges with a cutting-edge tech stack. Choosing the right solutions, tailored to your needs, can boost growth, efficiency, and innovation. Here’s how we make it happen."
                        top="80px"
                    />
                    <LayoutCards
                        technologiesData={technologiesData}
                        sethoveredcardid={sethoveredcardid}
                        hoveredcardid={hoveredcardid}
                        technologiesDataImage={technologiesDataImage}
                    />
                    <SectionDescription
                        text1="Our Technologies"
                        top="43px"
                    />
                    <OurTechnologies />
                </Grid>
                <LetsProject
                    text1={<>Got a Great Idea?<br /> Ready to Bring it to Life?</>}
                    text2="Let’s make it happen"
                    btnText="Let’s Talk business!"
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