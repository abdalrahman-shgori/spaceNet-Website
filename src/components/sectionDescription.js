import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

export default function SectionDescription({ text1, text2, top,academicsSection }) {
    const location = useLocation()
    const pathname = location.pathname
    const text1Style = {
        fontSize: {
            lg: "48px",
            md: "40px",
            sm: "26px",
            xs: pathname === '/academics' ? "28px" : "26px"
        },
        fontFamily: "var(--English-font)",
        maxWidth: {
            lg: "898px",
            md: "898px",
            sm: "498px",
            xs: "375px",
        },
        width: "100%",
        textAlign: "center",
        lineHeight: {
            lg: "57px",
            md: "57px",
            sm: "28px",
            xs: "28px",
        },

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
            sm: pathname === '/academics' ? "223px" : "300px",
            xs: pathname === '/academics' && academicsSection === "first" ? "223px" : pathname === '/academics' && academicsSection === "sec" ? "100%" : "280px",
        },
        width: "100%",
        textAlign: "center",
        lineHeight: {
            lg: pathname === '/academics' ? "38px" : "24px",
            md: pathname === '/academics' ? "38px" : "24px",
            sm: "17px",
            xs: "17px",
        }
    }
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: {
                        lg: pathname === '/academics' ? "12px" : "28px",
                        md: pathname === '/academics' ? "12px" : "28px",
                        sm: pathname === '/academics' ? "12px" : "16px",
                        xs: pathname === '/academics' ? "12px" : "16px"
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

