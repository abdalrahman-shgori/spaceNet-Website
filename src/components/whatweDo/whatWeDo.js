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
                        lg: "130px",
                        md: "130px",
                        sm: "104px",
                        xs: "104px"
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