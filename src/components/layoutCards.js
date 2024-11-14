import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function LayoutCards({ technologiesData, sethoveredcardid, hoveredcardid }) {

  const location = useLocation()
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
              overflow: "hidden",
            }}
          >
            <motion.div
              whileInView={{
                x: index === 0 ? [-100, 0] : index === 1 ? [100, 0] : 0,
                y: index > 1 ? [100, 0] : 0
              }}
              transition={{ duration: 0.5 }}
              style={{ height: "100%", overflowX: "hidden" }}
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
                onTouchEnd={()=>{
                  sethoveredcardid(null)
                }}

                sx={{
                  background: hoveredcardid === item.id ? location.pathname === '/software' ? "#9D89FC" : "#1CB786" : "#FFFFFF",
                  padding: {
                    lg: "34px 26px 89px 34px",
                    md: "34px 26px 89px 34px",
                    sm: "34px 26px 89px 34px",
                    xs: "34px 26px 44px 34px"
                  },
                  borderRadius: "30px",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  // "&:hover": {
                  //   background:
                  //     location.pathname === '/software' ?
                  //       "#9D89FC" : "#1CB786"
                  // },
                  transition: "background 0.5s"

                }}
              >
                <Box
                  sx={{
                    color: hoveredcardid === item.id ? "#FFFFFF" : "#000000",
                    transition: "color 0.5s"

                  }}>
                  {item.image}
                </Box>

                <Typography
                  sx={{
                    fontSize: {
                      lg: "30px",
                      md: "30px",
                      sm: "28px",
                      xs: "28px"
                    },
                    fontFamily: "var(--English-font-semibold)",
                    marginTop: "50px",
                    color: hoveredcardid === item.id ? "#FFFFFF" : "#051A2F",
                    transition: "color 0.5s",
                    maxWidth: "422px",
                    width: "100%"
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
