import { Grid } from "@mui/material";
import React from "react";
import WhatWeDoText from "./whatWeDoText";
import Cards from "../cards";

export default function WhatWeDo({ setData, data, lastCardId, loading }) {
    return (
        <>
            <Grid
                sx={{
                    marginTop: {
                        lg: "124px",
                        md: "100px",
                        sm: "54px",
                        xs: "54px"
                    }
                }}
            >
                <WhatWeDoText
                    text="What We Do"
                />
                <Cards data={data} lastCardId={lastCardId} loading={loading} />
            </Grid>
        </>
    )
}