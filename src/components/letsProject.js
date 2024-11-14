import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import vector1White from "../assets/images/Vector1White.svg";
import vector2White from "../assets/images/Vector2White.svg";
import {motion} from "framer-motion"
const text1Style = {
  fontSize: {
    xl: "62px",
    lg: "47px",
    md: "40px",
    sm: "30px",
    xs: "30px"
  },
  fontFamily: "var(--English-font)",
  maxWidth: {
    xl: "900px",
    lg: "684px",
    md: "600px",
    sm: "500px",
    xs: "333px",
  },
  width: "100%",
  textAlign: "center"

}
const text2Style = {
  fontSize: {
    xl: "24px",
    lg: "18px",
    md: "18px",
    sm: "16px",
    xs: "16px"
  },
  fontFamily: "var(--English-font)",
  maxWidth: {
    xl: "764px",
    lg: "679px",
    md: "679px",
    sm: "500px",
    xs: "100%",
  },
  width: "100%",
  textAlign: "center"
}
export default function LetsProject({ text1, text2, btnText, cardBg, text1Color, text2Color }) {
  return (
    <>
      <Grid
        className="root-container"
        sx={{
          background: cardBg,
          padding: {
            lg: "94px 190px 94px 190px",
            md: "94px 75px 94px 75px",
            sm: "86px 25px 86px 25px",
            xs: "86px 25px 86px 25px",
          },
          position: "relative",
        }}
      >
        <Grid sx={{ position: "relative" }}>
          
          <Box
            component="img"
            src={vector1White}
            sx={{
              maxWidth: "100%",
              width: {
                lg: "180px",
                md: "160px",
                sm: "120px",
                xs: "110px",
              },
              position: "absolute",
              right: "0",
              transform: "scaleX(-1)",
              top: {
                lg: "0px",
                md: "0px"
              }
            }}
          />

       
        </Grid>
        <motion.div
        initial={{scale:0}}
        whileInView={{
          scale:1
        }}
        transition={{duration:0.5}}
        >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: {
              lg: "30px",
              md: "30px",
              sm: "20px",
              xs: "20px"
            },
            marginTop: {
              lg: "123px",
              md: "100px",
              sm: "80px",
              xs: "123px"
            }
          }}
        >
          <Typography
            sx={{
              ...text1Style,
              color: text1Color
            }}
          >
            {text1}
          </Typography>
          <Typography
            sx={{
              ...text2Style,
              color: text2Color

            }}
          >
            {text2}
          </Typography>
          <Box
            component="button"
            sx={{
              background: "#051A2F",
              color: "#FFFFFF",
              padding: {
                lg: "14px 30px 14px 30px",
                md: "14px 30px 14px 30px",
                sm: "10px 36px 10px 36px",
                xs: "10px 36px 10px 36px"
              },
              borderRadius: "20px",
              border: "none",
              fontSize: {
                lg: "20px",
                md: "20px",
                sm: "16px",
                xs: "16px"
              },
              fontFamily: "var(--English-font)",
              cursor: "pointer",

            }}
          >
            {btnText}
          </Box>
        </Box>
        </motion.div>
        <Box
          component="img"
          src={vector2White}
          sx={{
            maxWidth: "100%",
            width: {
              lg: "180px",
              md: "160px",
              sm: "120px",
              xs: "110px",
            },
            transform: "scaleX(-1)",
            marginTop: {
              lg: "0px",
              md: "0px",
              sm: "0px",
              xs: "70px"
            }
          }}
        />
      </Grid>
    </>
  );
}
