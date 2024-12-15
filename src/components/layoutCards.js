import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
export default function LayoutCards({ technologiesData, sethoveredcardid, hoveredcardid, technologiesDataImage }) {
  const location = useLocation()
  const pathname = location.pathname;
  const theme = useTheme()
  const ExtraSmallScreen = useMediaQuery(theme.breakpoints.down('354'))
  const spesificLgScreen = useMediaQuery(theme.breakpoints.between("890", '1292'))
  return (
    <>
      <Grid
        container
        sx={{
          marginTop: {
            lg:location.pathname === "/core-it" ? "0px" : "68px",
            md: "68px",
            sm: "16px",
            xs: "16px",
          },
          padding: {
            lg: pathname !== '/academics' ? "0px 110px 0 110px" : "0px 57px 0 57px",
            md: "0px 0px 0 0px",
            sm: "0px 0px 0 0px",
            xs: "0px 0px 0 0px",
          },

        }}
        spacing={2}
      >
        {technologiesData.map((item, index) => {
          const img = pathname !== '/academics' && technologiesDataImage[index];

          return (
            <Grid
              key={item.id}
              item
              lg={
                location.pathname !== '/core-it' && location.pathname !== '/academics'
                  ? index === 0 ? 4 : index === 1 ? 8 : 4
                  :
                  location.pathname === '/academics' ? 4 :
                  (
                    index < 2
                      ? (location.pathname !== '/academics' && index === 1
                        ? 7.5
                        : 4.5)
                      : (location.pathname === '/core-it' && index === 1
                        ? 1
                        : index === 2 ? 7.5 : index === 3 ? 4.5 : index === 4 ? 8 : 4
                      )
                  )
              }

              md={6}
              sm={pathname === '/academics' ? 6 : 6}
              xs={12}
              sx={{
                overflow: "hidden",
                cursor: "pointer",

              }}
            >
              <motion.div
                initial={pathname !== "/academics" ? ({ x: index === 0 ? -200 : index === 1 ? 200 : 0, y: index > 1 ? 200 : 0 }) : ({ y: 200 })}
                whileInView={{
                  x: index === 0 ? 0 : index === 1 ? 0 : 0,
                  y: index > 1 ? 0 : 0
                }}
                transition={{ duration: 0.5 }}
                style={{ height: "100%", overflowX: "hidden" }}
              >
                <Grid
                  onMouseEnter={() => {
                    sethoveredcardid(item.id);
                  }}
                  onMouseLeave={() => {
                    sethoveredcardid(null);
                  }}
                  onTouchStart={() => {
                    sethoveredcardid(item.id);
                  }}
                  onTouchEnd={() => {
                    sethoveredcardid(null)
                  }}
                  sx={{
                    background: hoveredcardid === item.id ? pathname === '/software' ? "#9D89FC" : pathname === "/design-branding" ? "#1CB786" : pathname === '/academics' ? "#FA6423" : pathname === '/core-it' ? "#E9FA50" : "#FFFFFF" : "#FFFFFF",
                    padding: pathname !== '/academics' ? {
                      lg: "34px 17px 38px 34px",
                      md: "34px 17px 89px 34px",
                      sm: "34px 17px 89px 34px",
                      xs: "34px 17px 44px 34px"
                    } : {
                      lg: "74px 0px 59px 0px",
                      md: "34px 0px 59px 0px",
                      sm: "50px 0px 51px 0px",
                      xs: "50px 0px 51px 0px"
                    },
                    borderRadius: "30px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    transition: "background 0.5s"
                  }}
                >
                  {location.pathname !== '/academics' && (
                    <Box
                      key={index}
                      sx={{
                        color: hoveredcardid === item.id ? "#FFFFFF" : "#000000",
                        transition: "color 0.5s",
                        maxHeight: {
                          lg: "55px",
                          md: "55px",
                          sm: "65px",
                          xs: "65px"
                        }
                      }}
                    >
                      {img && img.image}
                    </Box>
                  )}

                  <Grid>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "27px",
                          md: "27px",
                          sm: "28px",
                          xs: "28px"
                        },
                        fontFamily: "var(--English-font-semibold)",
                        marginTop: "50px",
                        color: hoveredcardid === item.id && location.pathname !== '/core-it' ? "#FFFFFF" : "#051A2F",
                        transition: "color 0.5s",
                        maxWidth: pathname === '/academics' ? "261px" : "422px",
                        width: "100%",
                        lineHeight: "30px",
                        minHeight: pathname === '/academics' ? "0px" : "60px",
                        display: "flex",
                        alignItems: pathname !== '/academics' && "end",
                        justifyContent: pathname === '/academics' ? "center" : "unset",
                        textAlign: pathname === '/academics' ? "center" : "unset",
                        margin: pathname === '/academics' ? "0 auto" : "none",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Grid>

                  <Grid lg={12} md={12} sm={12}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontFamily: "var(--English-font)",
                        marginTop: "20px",
                        color: "#051A2F",
                        maxWidth: "574px",
                        width: "100%",
                        textAlign: pathname === '/academics' ? "center" : "unset",
                        color: pathname === '/academics' && hoveredcardid === item.id ? "#FFFFFF" : "#051A2F",
                        transition: "color 0.5s",
                        padding: pathname === "/academics" && {
                          lg: "0px 41px 0px 41px",
                          md: "0px 36px 0px 36px",
                          sm: "0px 30px 0px 30px",
                          xs: "0px 30px 0px 30px"
                        }
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Grid>

                  <Grid lg={12}
                  >
                    {location.pathname === "/academics" && item.image && (
                      <Box
                        sx={{
                          color: hoveredcardid === item.id ? "#FFFFFF" : "#000000",
                          transition: "color 0.5s",
                          textAlign: "center",
                          marginTop: {
                            lg: index === 2 ? "120px" : "60px",
                            md: "100px",
                            sm: index === 2 && !ExtraSmallScreen ? "100px" : "60px",
                            xs: index === 2 && !ExtraSmallScreen ? "100px" : "60px",
                          },

                        }}
                      >
                        {Array.isArray(item.image) ? (
                          <Grid container
                            sx={{
                              position: "relative",
                              gap: { lg: "5px", md: "5px", sm: "3px", xs: "3px" },
                              paddingLeft: {
                                lg: "17px",
                                md: "17px",
                                sm: "12px",
                                xs: "17px"
                              },
                              paddingRight: {
                                lg: "6px",
                                md: "6px",
                                sm: "6px",
                                xs: "6px"
                              },
                              display:'flex',
                              justifyContent:{
                                lg:"unset",
                                md:"center",
                                sm:"unset",
                                xs:"unset"
                              }

                            }}>
                            {item.image.map((img, idx) => (
                              <Grid
                                item
                                key={idx}
                                sx={{

                                  border: hoveredcardid === item.id ? "1px solid #FFFFFF" : "1px solid #FA6423",
                                  padding: "11px 17px 11px 17px",
                                  borderRadius: "28px",
                                  color: hoveredcardid === item.id ? "#FFFFFF" : "#FA6423", width: "fit-content",
                                  transform: index === 2 && idx === 1 && !ExtraSmallScreen && !spesificLgScreen && "rotate(-31.72deg)",
                                  position: index === 2 && idx === 1 && !ExtraSmallScreen && !spesificLgScreen ? "absolute" : "relative",
                                  top: !ExtraSmallScreen && index === 2 && idx === 1 && !spesificLgScreen && "-40px",
                                  left: !spesificLgScreen && !ExtraSmallScreen && index === 2 && idx === 1 ? { lg: "90px", md: "100px", sm: "80px", xs: "85px" } : !spesificLgScreen && !ExtraSmallScreen && index === 2 && idx === 2 && { lg: "60px", md: "1000px", sm: "58px", xs: "52px" },

                                }}

                              >
                                <Typography
                                  sx={{
                                    fontSize: {
                                      lg: "16px",
                                      md: "16px",
                                      sm: "14px",
                                      xs: "14px"
                                    },
                                    fontFamily: "var(--English-font)",
                                  }}
                                >
                                  {img}
                                </Typography>
                              </Grid>
                            ))}
                          </Grid>
                        ) : (
                          <Grid
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "end"
                            }}
                          >
                            {item.image}
                          </Grid>
                        )}
                      </Box>
                    )}
                  </Grid>

                </Grid>
              </motion.div>
            </Grid>
          );
        })}

      </Grid>
    </>
  );
}
