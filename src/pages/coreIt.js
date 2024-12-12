
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
        { id: 2, image: <ServicesSvg hoveredcardid={hoveredcardid} itemID={7} /> },
        { id: 3, image: <SystemSvg hoveredcardid={hoveredcardid} itemID={8} /> },

    ];
    const technologiesData = [
        { id: 0, title: "Network Solutions", description: "Network architecture planing, Network expansion and scalability planning, Installation and configuration of router, Switches, Fiber optics." },
        { id: 1, title: "Security Solutions", description: "Firewall setup and advanced configuration implementation of endpoint protection solutions." },
        { id: 2, title: "System & Infrastructure", description: "Lorem We can develop the product's surface layer by using the most widely used frontend frameworks, such as Angular, Vue, and React.We can develop the product's surface layer by using the most widely used frontend frameworks, such as Angular, Vue, and React." },
        { id: 3, title: "Consultancy Services", description: "Lorem We can develop the product's surface layer by using the most widely used frontend frameworks, such as Angular, Vue, and React.We can develop the product's surface layer by using the most widely used frontend frameworks, such as Angular, Vue, and React." },

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
                            lg: "50px 75px 0 75px",
                            md: "50px 75px 0 75px",
                            sm: "100px 20px 0 20px",
                            xs: "100px 20px 0 20px",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {
                                lg: "70px",
                                md: "70px",
                                sm: "60px",
                                xs: "35px"
                            },
                            textAlign: "center",
                            fontFamily: "var(--English-font)"
                        }}
                    >
                        CORE-IT
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
                        text1="What we are doing"
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
                        text1="Design & Deployment & Consultancy"
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
                    text1={<>IT Management</>}
                    text2="Managed network infostructure, Monitoring, Optimizing(Performance tuning) , Security management, Monitoring, Detection, Response system & Infrastructure management, Backup services management."
                    btnText="Let’s Talk business!"
                    cardBg="#E9FA50"
                    text1Color="#051A2F"
                    text2Color="#051A2F"
                />
                <SpaceNetLayout setOpen={setOpen} />
            </motion.div>

        </>
    )
}