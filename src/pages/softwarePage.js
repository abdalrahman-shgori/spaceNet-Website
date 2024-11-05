import React, { useEffect, useState } from "react";
import BusinessGoals from "../components/softwareSection/businessGoals";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ContactUsBtn from "../components/softwareSection/contactUsBtn";
import { useLocation } from "react-router-dom";
import WhatWeDo from "../components/softwareSection/whatweDo/whatWeDo";

const mockData = [
    {
        id: 1,
        title: "Website Development",
        subService:['website','dahsboards','landing pages'],
        content: "We provide modern and latest design websites for you. Attractive and informative Websites increases the level of business. We provide modern and latest design websites for you. Attractive and informative Websites increases the level of business.We offer comprehensive mobile application development services, including design, coding, and integration, catering to start-ups and large enterprises.",
        backgroundColor: "#E9FA50"
    },
    {
        id: 2,
        title: "Mobile App",
        subService:['website','dahsboards','landing pages'],

        content: "We offer comprehensive mobile application development services, including design, coding, and integration, catering to start-ups and large enterprises. We offer comprehensive mobile application development services, including design, coding, and integration, catering to start-ups and large enterprises.",
        backgroundColor: "#FA6423"
    },
    {
        id: 3, title: "Web App Development",
        subService:['website','dahsboards','landing pages'],

        content: "Our custom web app development services align with your business objectives, ensuring growth at a low cost. We offer comprehensive mobile application development services, including design, coding, and integration, catering to start-ups and large enterprises.",
        backgroundColor: "#9D89FC"
    },
    {
        id: 4, title: "Desktop Application",
        subService:['website','dahsboards','landing pages'],

        content: "We specialize in crafting user-friendly desktop application solutions to meet your business needs. We offer comprehensive mobile application development services, including design, coding, and integration, catering to start-ups and large enterprises.",
        backgroundColor: "#FFFFFF"
    },
];
export default function SoftwareSection({ setThemeColor }) {
    const [data,setData]=useState([])
    useEffect(()=>{
        setData(mockData)
    },[])
    const theme = useTheme()
    const location = useLocation()

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
    const [currentServiceType, setCurrentServiceType] = useState(serviceTypes[0]);
    const [nextServiceType, setNextServiceType] = useState(serviceTypes[1]);
    const lastCardId = data.length > 0 ? data[data.length - 1].id : null;
    

    return (
        <>
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
                <WhatWeDo setData={setData} data={data} lastCardId={lastCardId}/>
            </Grid>

        </>
    )
}