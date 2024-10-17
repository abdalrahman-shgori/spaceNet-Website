import { Grid } from "@mui/material";
import React from "react";
import Services from "./services";
import AboutSpaceNet from "./aboutSpaceNet";

export default function LandingPage() {
    return (
        <>
            <Grid
                container
                sx={{
                    padding: {
                        lg: "0px 75px 0px 55px",
                        md: "0px 75px 0px 55px",
                        sm: "0px 45px 0px 25px",
                        xs: "0px 25px",
                    },
                }}
            >
                <Grid item lg={6} md={6.5} sm={6.5} xs={12}>
                    <Services />
                </Grid>
                <Grid item lg={6} md={5.5} sm={5.5} xs={12}>
                    <AboutSpaceNet />
                </Grid>
            </Grid>
        </>
    );
}
