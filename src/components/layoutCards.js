import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

export default function LayoutCards({ technologiesData, sethoveredcardid, hoveredcardid }) {
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: {
            lg: "68px",
            md: "68px",
            sm: "16px",
            xs: "16px",
          },

        }}
        spacing={2}
      >
        {technologiesData.map((item, index) => (
          <Grid
            key={item.id}
            item
            lg={index < 2 ? (index === 1 ? 8 : 4) : 4}
            md={6}
            sm={6}
            xs={12}
            sx={{
              overflow:"hidden"
            }}


          >
            <motion.div
whileInView={{
  x: index === 0 ? [-100, 0] : index === 1 ? [100, 0] : 0,
  y: index > 1 ? [100, 0] : 0
}}    
transition={{duration:0.5}}
style={{ height: "100%", overflowX:"hidden" }}
            >
            <Box
             onMouseEnter={() => {
              sethoveredcardid(item.id);
            }}
            onMouseLeave={() => {
              sethoveredcardid(null);
            }}
            onTouchStart={() => {
              sethoveredcardid(item.id); 
            }}
          
            
              sx={{
                background: "#FFFFFF",
                padding: {
                  lg: "34px 26px 34px 34px",
                  md: "34px 26px 34px 34px",
                  sm: "34px 26px 34px 34px",
                  xs: "34px 26px 34px 34px"
                },
                borderRadius: "30px",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                "&:hover": {
                  background: "#9D89FC"
                },
                transition: "background 0.5s"

              }}
            >
              <Box >
                {item.image}
              </Box>

              <Typography
                sx={{
                  fontSize: "30px",
                  fontFamily: "var(--English-font-semibold)",
                  marginTop: "50px",
                  color: hoveredcardid === item.id ? "#FFFFFF" : "#051A2F",
                  transition: "color 0.5s"
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "var(--English-font)",
                  marginTop: "20px",
                  color: "#051A2F"
                }}
              >
                {item.description}
              </Typography>


            </Box>
            </motion.div>
          
          </Grid>
        ))}
      </Grid>
    </>
  );
}
