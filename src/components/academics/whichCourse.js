import React from "react";
import { Box, Typography } from "@mui/material";


export default function WhichCourse(){
 const courser=[
    {id:0,title:'Online course'},
    {id:1,title:'Classroom course'},
    {id:2,title:'Bootcamp course'},
 ]
    return(
        <>
        <Box
        sx={{
            background:"#051A2F",
            padding:{
                lg:"100px 0px 100px 0px",
                md:"100px 0px 100px 0px",
                sm:"100px 0px 100px 0px",
                xs:"70px 0px 116px 0px"
            },
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            gap:{
                lg:"214px",
                md:"214px",
                sm:"193px",
                xs:"193px"
            }
        }}
        >
            <Box
          
            >
            <Typography
       sx={{
        fontSize:{
            lg:"62px",
            md:"62px",
            sm:"30px",
            xs:"30px"
        },
        color:"#FFFFFF",
        maxWidth:{
            lg:"885px",
            md:"885px",
            sm:"329px",
            xs:"329px"
        },
        width:"100%",
        textAlign:"center",
        lineHeight:{
            lg:"75px",
            md:"75px",
            sm:"35px",
            xs:"35px"
        },
        fontFamily:"var(--English-font)"
       
       }}
       >
       Which Course style you interested?
       </Typography>
            </Box>
            <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: {
        lg:"25px",
        md:"25px",
        sm:"14px",
        xs:"14px"
    },
  }}
>
  {courser.map((item, index) => (
    <Box
      key={index}
      sx={{
        border: "2px solid #ffffff",
        textAlign: "center",
        borderRadius:{
            lg:"68px",
            md:"68px",
            sm: "39px",
            xs: "39px"
        },
        width: "fit-content", 
        margin: "0 auto", 
        padding:{
            lg:"27px 42px 27px 42px",
            md:"27px 42px 27px 42px",
            sm:"17px 24px 17px 24px",
            xs:"17px 24px 17px 24px",
        },
        cursor:"pointer"
      }}
    >
      <Typography
        sx={{
          fontSize: {
            lg: "39px",
            md: "39px",
            sm: "23px",
            xs: "23px",
          },
          color: "#FFFFFF",
        }}
      >
        {item.title}
      </Typography>
    </Box>
  ))}
</Box>

      
        </Box>
     
        </>
    )
}