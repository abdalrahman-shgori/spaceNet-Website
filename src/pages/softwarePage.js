import React, {useEffect, useState } from "react";
import BusinessGoals from "../components/softwareSection/businessGoals";
import { Grid } from "@mui/material";
import ContactUsBtn from "../components/softwareSection/contactUsBtn";
import { useLocation } from "react-router-dom";
import WhatWeDo from "../components/softwareSection/whatweDo/whatWeDo";
import SectionDescription from "../components/sectionDescription";
import LayoutCards from "../components/layoutCards";
import FrontEndSvg from "../assets/sectionsImages/frontEndImage";
import BackEndSvg from "../assets/sectionsImages/backendImage";
import FullStackSvg from "../assets/sectionsImages/fullstack";
import LowCodeSvg from "../assets/sectionsImages/lowcode";
import CloudDevelopmentSvg from "../assets/sectionsImages/clouddevelopment";
import { subServices } from "../services/websiteApis/services";
import {motion} from "framer-motion"
import OurTechnologies from "../components/softwareSection/technologies/ourTechnology";
import LetsProject from "../components/letsProject";
import SpaceNetLayout from "../components/spaceNetLayout";

const serviceTypes = [
    "Website Development",
    "Mobile App",
    "Web App Development",
    "Desktop Application"
];

const serviceColors = {
    "Website Development": "#9D89FC",
    "Mobile App": "#E9FA50",
    "Web App Development": "#1CB786",
    "Desktop Application": "#FF621F"
};
export default function SoftwareSection() {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const [data, setData] = useState([])
    const [loading , setLoading]=useState(false)
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
    const [scroll,setScroll]=useState(false)
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []); 
    
    return (
        <>
     
    
        <motion.div
        animate={{opacity:[0,1]}}
        transition={{duration:0.5}}
        >
        <Grid className="root-container"
                sx={{
                    padding: {
                        lg: "100px 75px 0 75px",
                        md: "90px 75px 0 75px",
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
                />
                <ContactUsBtn />
                <WhatWeDo
                    setData={setData}
                    data={data}
                    lastCardId={lastCardId}
                    loading={loading}
                />
                <SectionDescription
                    text1="Which technologies will bring maximum value to your business?"
                    text2="Solve customer problems by choosing cutting-edge technologies for your stack. Take your business to the next level with the right  solutions tailored to your own requirements."
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
                <OurTechnologies/>
            </Grid>
            <LetsProject 
            text1="Start your project with us or have a great idea?"
            text2="A SpacenNet technology company can help you improve your idea and turn it into reality if you're facing a challenge."
          btnText="Let’s Talk business"
          />
          <SpaceNetLayout/>

        </motion.div>
          

        </>
    )
}