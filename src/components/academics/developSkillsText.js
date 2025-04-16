import  Typography  from "@mui/material/Typography";
import React from "react";

export default function DevelopSkillsText({ text }) {
    const textStyle = {
        fontSize: {
            lg: "62px",
            md: "50px",
            sm: "30px",
            xs: "30px"
        },
        fontFamily: "var(--English-font), Arial, sans-serif",
        textAlign: "center",
        maxWidth: { sm:"unset",xs: "400px" },
        width: "100%",
        margin: "0 auto",
        pb: { lg: "40px", md: "40px", sm: "30px", xs: "40px" },
    };
    return (
        <>
            <Typography sx={{ ...textStyle }} >
                {text}
            </Typography>
        </>
    )
}