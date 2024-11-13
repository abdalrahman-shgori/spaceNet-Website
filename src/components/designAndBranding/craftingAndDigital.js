import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Crafting({
  designAndBrandingList,
  reset,
  scrollIndex,
}) {

  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
  const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));

  return (
    <Grid container >
      <Grid item lg={3} md={3} sm={3} xs={12} container justifyContent="start" alignItems="center">
        <Typography
          sx={{
            fontSize: {
              lg: is14Inch ? "65px" : is15Inch ? "65px" : "80px",
              md: "50px",
              sm: "38px",
              xs: "35px"
            },
            fontFamily: "var(--English-font)",
            textAlign: "center",
          }}
        >
          Crafting
        </Typography>
      </Grid>

      <Grid item lg={5.5} md={5.5} sm={6} xs={12} justifyContent="center" alignItems="center">
        <Box
          sx={{
            position: "relative",
            height: {
              lg: is14Inch ? "400px" : is15Inch ? "450px" : "500px",
              md: "350px",
              sm: "300px",
              xs: "320px"
            },
            overflowY: "hidden",
            paddingRight: "0px",
            paddingLeft: "50px",
            overflow: "hidden",
          }}
        >
          {designAndBrandingList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ rotate: "0deg", opacity: 1 }}
              animate={{
                rotate: ["0deg", item.rotate],
                y: reset || scrollIndex <= index || index === designAndBrandingList.length - 1 ? 0 : -800,
                // opacity: reset || scrollIndex <= index || index === designAndBrandingList.length - 1 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: item.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px",
                color: "#fff",
                position: "absolute",
                top: lg ? "48px" : md ? "48px" : sm ? "48px" : xs ? "38px" : "48px",
                left: lg ? is14Inch ? "calc(50% - 150px)" : is15Inch ? "calc(50% - 160px)" : "calc(50% - 172px)" :
                  md ? "calc(50% - 110px)" :
                    sm ? "calc(50% - 90px)" :
                      xs ? "calc(50% - 110px)" :
                        "calc(50% - 172px)",
                right: "0",
                zIndex: designAndBrandingList.length - index,
                transition: "opacity 0.5s ease-in-out, transform 0.5s ease",
                maxWidth:
                  lg ? is14Inch ? "300px" : is15Inch ? "350px" : "384px" :
                    md ? "240px" :
                      sm ? "180px" :
                        xs ? "220px" :
                          "384px",
                height:
                  lg ? is14Inch ? "300px" : is15Inch ? "350px" : "384px" :
                    md ? "240px" :
                      sm ? "180px" :
                        xs ? "220px" :
                          "384px",
                width: "100%",
                borderRadius: "18px",
                transformOrigin: "center",
                textAlign: "center",

              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: "65px",
                    md: "40px",
                    sm: "30px",
                    xs: "40px"
                  },
                  fontFamily: "var(--English-font-SoraThin)",
                  transform:
                    index === 0 ? "rotate(-5.28deg)" :
                      index === 1 ? "rotate(3.6deg)" :
                        index === 2 ? "rotate(11.1deg)" :
                          index === 3 ? "rotate(19.3deg)" : "rotate(0deg)",
                  transition: "transform 10s ease-in-out",
                  lineHeight: {
                    lg: "68px",
                    md: "68px",
                    sm: "68px",
                    xs: "42px"
                  },
                  color: item.color === '#E9FA50' ? "#000000" : "#FFFFFF",
                  textAlign: "center"

                }}
              >
                {item.title}
              </Typography>

            </motion.div>
          ))}

        </Box>
      </Grid>

      <Grid item lg={3.5} md={3.5} sm={3} xs={12}
        container

        alignItems="center"
        sx={{
          justifyContent: {
            lg: "end",
            md: "end",
            sm: "end",
            xs: "start"
          }
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: is14Inch ? "65px" : is15Inch ? "65px" : "80px",
              md: "50px",
              sm: "38px",
              xs: "35px"
            },
            fontFamily: "var(--English-font)",
            textAlign: "center",
            whiteSpace: {
              lg: "nowrap",
              md: "nowrap",
              sm: "nowrap",
              xs: "unset"
            }
          }}
        >
          & digital{" "}
          <Typography
            component={xs && "span"}
            sx={{
              fontSize: {
                lg: "66px",
                md: "40px",
                xs: "24px"
              },
              fontFamily: "var(--English-font-SoraThin)",
            }}
          >
            experience
          </Typography>
        </Typography>
      </Grid>
    </Grid>
  );
}
