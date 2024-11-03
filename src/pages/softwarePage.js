import React from "react";
import BusinessGoals from "../components/softwareSection/businessGoals";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import ContactUsBtn from "../components/softwareSection/contactUsBtn";


export default function SoftwareSection() {
const theme=useTheme()
const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
return (
        <>
            <Grid className="root-container"
                sx={{
                    padding: {
                        lg: "80px 0px 0 75px",
                        md: "80px 75px 0 75px",
                        sm: "100px 25px 0 25px",
                        xs: "100px 25px 0 25px",
                    },
                }}

            >
                <BusinessGoals 
goalDescription={`Achieve your business goals with ${isSmallMobile ? "our" : ""}`}
serviceType="Website Development"
                serviceBgColor="#9D89FC"
                />
                <ContactUsBtn/>
            </Grid>

        </>
    )
}