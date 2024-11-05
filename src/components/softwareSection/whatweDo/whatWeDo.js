import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import WhatWeDoText from "./whatWeDoText";
import Cards from "./cards";



export default function WhatWeDo({ setData, data, lastCardId }) {

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
                <WhatWeDoText />
                <Cards data={data} lastCardId={lastCardId} />
            </Grid>
        </>
    )
}