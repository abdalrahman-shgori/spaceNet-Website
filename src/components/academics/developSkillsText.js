import { Typography } from "@mui/material";
import React from "react";

export default function DevelopSkillsText({ text }) {
    const textStyle = {
        fontSize: {
            lg: "62px",
            md: "50px",
            sm: "30px",
            xs: "30px"
        },
        fontFamily: "var(--English-font)",
        textAlign: "center",
        maxWidth: {
            lg: "unset",
            md: "unset",
            sm: "unset",
            xs: "253px"
        },
        width: "100%",
        margin: "0 auto",
        paddingBottom: {
            lg: "40px",
            md: "40px",
            sm: "30px",
            xs: "40px"
        }
    }
    return (
        <>
            <Typography sx={{ ...textStyle }} >
                {text}
            </Typography>
        </>
    )
}