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
export default function SoftwareSection() {
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
    const technologiesData = [
        { id: 0, title: "Frontend Development", description: "We can develop the product's surface layer by using the most widely used frontend frameworks, such as Angular, Vue, and React.We can develop the product's surface layer by using the most widely used frontend frameworks, such as Angular, Vue, and React.", image: <FrontEndSvg hoveredcardid={hoveredcardid} itemID={0} /> },
        { id: 1, title: "Backend Development", description: "We design and prototype web programs quickly and scalablely using server-side technologies like Node.js, Ruby on Rails, and Python.", image: <BackEndSvg hoveredcardid={hoveredcardid} itemID={1} /> },
        { id: 2, title: "Fullstack Development", description: "We provide end-to-end web development, integrating backend and frontend solutions with additional technologies required to ensure the success of your product.", image: <FullStackSvg hoveredcardid={hoveredcardid} itemID={2} /> },
        { id: 3, title: "Low-Code Development", description: "Additionally, we are experts at creating low-code and no-code web solutions that help customers save time and money. We make use of platforms such as Mendix and Webflow.", image: <LowCodeSvg hoveredcardid={hoveredcardid} itemID={3} /> },
        { id: 4, title: "Cloud Development", description: "For quick and safe application deployment, we also make use of cloud services like Microsoft Azure, Amazon Web Services, and Google Cloud.", image: <CloudDevelopmentSvg hoveredcardid={hoveredcardid} itemID={4} /> },

    ];

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);

    return (
        <>
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
                            sm: "100px 25px 0 25px",
                            xs: "100px 25px 0 25px",
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
                    <ContactUsBtn />
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
                    />
                    <SectionDescription
                        text1="Our Technologies"
                        top="43px"
                    />
                    <OurTechnologies />
                </Grid>
                <LetsProject
                    text1="Got a Great Idea? Ready to Bring it to Life?"
                    text2="Let’s make it happen"
                    btnText="Let’s Talk business"
                    cardBg="#9D89FC"
                    text1Color="#051A2F"
                    text2Color="#051A2F"
                />
                <SpaceNetLayout />
            </motion.div>

        </>
    )
}