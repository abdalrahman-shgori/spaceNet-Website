import Grid from "@mui/material/Grid";
import React from "react";
import WhatWeDoText from "./whatWeDoText";
import Cards from "../cards";
import { useTranslation } from "react-i18next";

export default function WhatWeDo({ data, lastCardId, loading }) {
    const { t } = useTranslation()
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
                    text={t("software.whatwedo")}
                />
                <Cards data={data} lastCardId={lastCardId} loading={loading} />
            </Grid>
        </>
    )
}