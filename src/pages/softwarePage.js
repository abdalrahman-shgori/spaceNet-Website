import React, { useEffect } from "react";
import BusinessGoals from "../components/softwareSection/businessGoals";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ContactUsBtn from "../components/softwareSection/contactUsBtn";
import { useLocation } from "react-router-dom";


export default function SoftwareSection({setThemeColor}) {
const theme=useTheme()
const location=useLocation()
const pathname=location


const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
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
goalDescription={`Achieve your business goals with our`}
serviceType="Website Development"
                serviceBgColor="#9D89FC"
                />
                <ContactUsBtn/>
            </Grid>

        </>
    )
}