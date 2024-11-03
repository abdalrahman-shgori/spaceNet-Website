import { Box, Grid, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import Arrow from "../../assets/sectionsImages/contactusArrow.svg";
import ArrowWight from "../../assets/sectionsImages/contactUsArrowWhite.svg";

export default function ContactUsBtn() {
    const [btnHovered,setBtnHovered]= useState(false)
    const theme=useTheme()
  return (
<>
<Grid
 onMouseEnter={() => setBtnHovered(true)}  
 onMouseLeave={() => setBtnHovered(false)} 
sx={{
    cursor:"pointer",
    marginTop: {
        lg: "50px",
        md:"50px",
        sm:"53px",
        xs:"53px"
      },
    border: theme.palette.mode === 'light' ? "2px solid black": "2px solid #FAFAFA",
    display:"inline-flex",
    height:{
        lg:"80px",
        md:"80px",
        sm:"80px",
        xs:"42px"
    },
    borderRadius: "52px",
    maxWidth: {
        lg: "302px",
        md: "302px",
        sm: "302px",
        xs: "165px",
      },
      transition: "background 0.3s ease, border-color 0.3s ease", 
      width:"100%",
      "&:hover":{
        background: "#9D89FC",
        borderColor:"#9D89FC",
      }

    
  }}
  
>
<Box
sx={{
    display:"flex",
    gap:{
        lg:"26px",
        md:"26px",
        sm:"26px",
        xs:"10px"
    },
    alignItems:"center",
    paddingLeft:"4px",
}}
>
    <Box
    sx={{
        border: btnHovered && theme.palette.mode !== 'dark' ? "2px solid transparent" : theme.palette.mode === 'light' ? '2px solid black' : '2px solid #FAFAFA', 
        background: theme.palette.mode === "light" ? "#FAFAFA" : "transparent",
        borderRadius: '50%',
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        height:{
            lg:"72px",
            md:"72px",
            sm:"72px",
            xs:"35px"
        },
        width:{
            lg:"72px",
            md:"72px",
            sm:"72px",
            xs:"35px"
        },
    }}
    >
    <Box
      component="img"
      src={ theme.palette.mode === 'light' ? Arrow : ArrowWight}
      sx={{
        width:{
            lg:"auto",
            md:"auto",
            sm:"auto",
            xs:"25px"
        }
      }}
    />
    </Box>

    <Typography
      sx={{
        fontSize: {
          lg: "30px",
          md: "30px",
          sm: "18px", // Increased for better readability on small screens
          xs: "16px", // Slightly larger font size for better touch targets
        },
        fontFamily: "var(--English-font)",
        textAlign: "center",
       
      }}

    >
        Contact Us
    </Typography>
</Box>
</Grid>
</>
  );
}
