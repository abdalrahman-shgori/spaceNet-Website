import { Box, Typography } from "@mui/material";
import React from "react";

export default function SectionDescription({ text1, text2, top }) {
    const text1Style = {
        fontSize: {
            lg: "50px",
            md: "40px",
            sm: "26px",
            xs: "26px"
        },
        fontFamily: "var(--English-font)",
        maxWidth: {
            lg: "898px",
            md: "898px",
            sm: "498px",
            xs: "295px",
        },
        width: "100%",
        textAlign: "center"

    }
    const text2Style = {
        fontSize: {
            lg: "20px",
            md: "20px",
            sm: "13px",
            xs: "13px"
        },
        fontFamily: "var(--English-font)",
        maxWidth: {
            lg: "679px",
            md: "679px",
            sm: "300px",
            xs: "255px",
        },
        width: "100%",
        textAlign: "center"
    }
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: {
                        lg: "28px",
                        md: "28px",
                        sm: "16px",
                        xs: "16px"
                    },
                    marginTop: {
                        lg: "130px",
                        md: "100px",
                        sm: top,
                        xs: top
                    }
                }}
            >
                <Typography
                    sx={{
                        ...text1Style,
                    }}
                >
                    {text1}
                </Typography>
                <Typography
                    sx={{
                        ...text2Style
                    }}
                >
                    {text2}
                </Typography>
            </Box>
        </>
    )

}

