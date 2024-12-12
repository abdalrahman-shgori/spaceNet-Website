
import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { subServices } from "../services/websiteApis/services";
import { motion } from "framer-motion"
import LetsProject from "../components/letsProject";
import SpaceNetLayout from "../components/spaceNetLayout";
import { Helmet } from "react-helmet";
import CoreItSection1 from "../components/coreIt/coreIt";
import SectionDescription from "../components/sectionDescription";
import LayoutCards from "../components/layoutCards";
import OurCourses from "../components/academics/ourCourses";
import NetworkSolution from "../assets/sectionsImages/coteIt/networkSolution";
import Security from "../assets/sectionsImages/coteIt/security";
import ServicesSvg from "../assets/sectionsImages/coteIt/services";
import SystemSvg from "../assets/sectionsImages/coteIt/system";

const serviceTypesMock = [
    "Website Development",
    "Mobile App Development",
    "Web App Development",
    "Desktop App Development"
];


export default function CoreIt({ setOpen }) {
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
        { id: 0, image: <NetworkSolution hoveredcardid={hoveredcardid} itemID={5} /> },
        { id: 1, image: <Security hoveredcardid={hoveredcardid} itemID={6} /> },
        { id: 2, image: <SystemSvg hoveredcardid={hoveredcardid} itemID={7} /> },
        { id: 3, image: <ServicesSvg hoveredcardid={hoveredcardid} itemID={8} /> },

    ];
    const technologiesData = [
        { id: 0, title: "Network Solutions", description: "We Offer Network architecture planning, Network expansion and scalability planning, Installation and configuration of routers, Switches, Fiber optics." },
        { id: 1, title: "Security Solutions", description: "Our security solutions are designed to protect your business with comprehensive, multi-layered defense strategies. From robust system design to secure deployment and continuous monitoring, we safeguard your data, networks, and infrastructure against evolving threats. With a focus on cybersecurity, compliance, and risk management, we ensure your business stays secure, resilient, and prepared for the future." },
        { id: 2, title: "System & Infrastructure", description: "Our system and infrastructure solutions deliver tailored designs, efficient deployment, and proactive management to ensure your IT foundation is scalable, secure, and optimized for seamless operations and growth." },
        { id: 3, title: "Consultancy Services", description: "We also offer free consultancy services for all solutions and processes, helping you build or rebuild your IT infrastructure with expert guidance tailored to your needs." },

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


    return (
        <>
            <motion.div
                className="root-container"
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                    duration: 1
                }}
            >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>SPACENET CORE IT</title>
                    <link rel="canonical" href="https://space-net-website.vercel.app/software" />
                </Helmet>
                <Grid className="root-container"
                    sx={{
                        padding: {
                            lg: "75px 75px 0 75px",
                            md: "75px 75px 0 75px",
                            sm: "100px 20px 0 20px",
                            xs: "100px 20px 0 20px",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "53px",
                                md: "53px",
                                sm: "40px",
                                xs: "30px"
                            },
                            textAlign: "center",
                            fontFamily: "var(--English-font)"
                        }}
                    >
                        Make Use Of Our Tailored Solutions
                    </Typography>

                </Grid>
                <CoreItSection1 />
                <Box
                    sx={{
                        background: "#fff",
                        padding: {
                            xl: "50px 116px 103px 116px",
                            lg: "50px 116px 103px 116px",
                            md: "50px 75px 103px 75px",
                            sm: "85px 20px 75px 20px",
                            xs: "85px 20px 75px 20px",
                        },
                        borderRadius: {
                            lg: "95px",
                            md: "95px",
                            sm: "30px",
                            xs: "30px"
                        }
                    }}
                >

                    <SectionDescription
                        text1="What We Do"
                        academicsSection="first"
                        top="0px"

                    />
                    <OurCourses />
                </Box>
                <Box
                    sx={{
                        padding: {
                            xl: "110px 74px 103px 74px",
                            lg: "110px 74px 103px 74px",
                            md: "110px 75px 103px 75px",
                            sm: "85px 20px 75px 20px",
                            xs: "85px 20px 75px 20px",
                        },

                    }}
                >
                    <SectionDescription
                        text1=" What We Design, Deploy & Manage"
                        top="80px"
                    />
                    <LayoutCards
                        technologiesData={technologiesData}
                        sethoveredcardid={sethoveredcardid}
                        hoveredcardid={hoveredcardid}
                        technologiesDataImage={technologiesDataImage}
                    />
                </Box>

                <LetsProject
                    text1={<>Want to Build or Rebuild your IT Infrastructure?</>}
                    text2="Schedule a free Consultation!"
                    btnText="Let’s Talk!"
                    cardBg="#E9FA50"
                    text1Color="#051A2F"
                    text2Color="#051A2F"
                    setOpen={setOpen}
                />
                <SpaceNetLayout setOpen={setOpen} />
            </motion.div>

        </>
    )
}