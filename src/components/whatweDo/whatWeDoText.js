import { Typography } from "@mui/material";
import React from "react";

const textStyle = {
    fontSize: {
        lg: "60px",
        md: "60px",
        sm: "30px",
        xs: "30px"
    },
    fontFamily: "var(--English-font)",
    textAlign: "start",
    maxWidth: {
        lg: "unset",
        md: "unset",
        sm: "unset",
        xs: "unset"
    },
   paddingBottom:{
    lg:"80px",
    md:"80px",
    sm:"25px",
    xs:"25px"
   }
}

export default function WhatWeDoText({ text }) {
    return (
        <>
            <Typography sx={{ ...textStyle }} >
                {text}
            </Typography>
        </>
    )
}