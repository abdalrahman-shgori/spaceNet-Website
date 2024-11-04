import React, { useEffect, useState } from "react";
import BusinessGoals from "../components/softwareSection/businessGoals";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ContactUsBtn from "../components/softwareSection/contactUsBtn";
import { useLocation } from "react-router-dom";


export default function SoftwareSection({ setThemeColor }) {
    const theme = useTheme()
    const location = useLocation()
    const pathname = location
    const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));


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
    return (
        <>
            <Grid className="root-container"
                sx={{
                    padding: {
                        lg: "100px 0px 0 75px",
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
            </Grid>

        </>
    )
}