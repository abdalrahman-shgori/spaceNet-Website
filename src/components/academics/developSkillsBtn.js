import React from "react";
import { Grid } from "@mui/material";
export default function DevelopBtn({
    SkillsType,
    skills,
    start,
}) {

    return (
        <>

            <Grid item lg={6} md={6} sm={12} xs={12}
                sx={{
                    background: SkillsType[skills].bg,
                    maxWidth: {
                        lg: "606px",
                        md: "577px",
                        sm: "577px",
                        xs: "99%"
                    },
                    maxHeight: {
                        lg: "323px",
                        md: "308px",
                        sm: "258px",
                        xs: "136px"
                    },
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                    borderRadius: {
                        lg: "31px",
                        md: "31px",
                        sm: "13px",
                        xs: "13px"
                    },
                    position: "absolute",
                    top: {
                        lg: !start ? "120px" : "127px",
                        md: !start ? "120px" : "127px",
                        sm: !start ? "100px" : "110px",
                        xs: !start ? "58px" : "62px",
                    },
                    zIndex: "-1",
                    left: {
                        lg: "110px",
                        md: "110px",
                        sm: "60px",
                        xs: "66px"
                    },
                    transition: "all 0.5s"
                }}
            >
            </Grid>

        </>
    )
}