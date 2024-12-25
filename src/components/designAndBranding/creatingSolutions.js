import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import processImg from "../../assets/sectionsImages/design-branding/processImg.svg"
import PSImg from "../../assets/sectionsImages/design-branding/photoshop.svg"
import figma from "../../assets/sectionsImages/design-branding/figma.svg"
import adobeXd from "../../assets/sectionsImages/design-branding/adobeXd.svg"
import AI from "../../assets/sectionsImages/design-branding/AI.svg"
import { useTranslation } from "react-i18next";

export default function CreatingSolution() {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const solutions = [
    {
      id: 0,
      title: t("designAndBranding.Whatwedo"),
      description:
        [
          t("designAndBranding.DesignSystem"),
          t("designAndBranding.Branding"),
          t("designAndBranding.WebDesign"),
          t("designAndBranding.Development"),
          t("designAndBranding.Creativeconsulting"),
          t("designAndBranding.Logo"),
          t("designAndBranding.Mobileapplication"),
        ],
    },
    {
      id: 1,
      title: t("designAndBranding.TheProcess"),
      description: "",
      img: processImg
    },
    {
      id: 2,
      title: t("designAndBranding.OurTechnologies"),
      description: "",
      img: [PSImg, figma, adobeXd, AI]
    },
  ];

  return (
    <Grid container justifyContent="center"
      sx={{
        paddingBottom: {
          lg: "150px",
          md: "150px",
          sm: "70px",
          xs: "70px"
        }
      }}
    >
      {solutions.map((item, index) => (
        <Grid item lg={4} md={6} sm={6} xs={12} key={item.id} container justifyContent="center">
          <Box
            sx={{
              background:
                index === 0
                  ? "#FFFFFF"
                  : index === 1
                    ? "#E9FA50"
                    : index === 2
                      ? "#1CB786"
                      : "#FFFFFF",
              padding: "33px 24px 33px 24px",
              borderRadius: "37px",
              marginRight: {
                lg: "24px",
                md: "24px",
                sm: index % 2 === 0 ? "12px" : "0px",
                xs: "0px"
              },
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginTop: {
                lg: "0px",
                md: index > 1 ? "25px" : "0px",
                sm: index > 1 ? "25px" : "0px",
                xs: index > 0 ? "25px" : "0px"
              },
              minHeight: "350px"
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: "30px",
                  md: "30px",
                  sm: "30px",
                  xs: "30px",
                },
                fontFamily: "var(--English-font)",
                textAlign: dir === 'rtl' ? "right" : "left",
                color: "#000000"
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  lg: "18px",
                  md: "18px",
                  sm: "18px",
                  xs: "18px",
                },
                fontFamily: "var(--English-font)",
                marginTop: {
                  lg: "83px",
                  md: "83px",
                  sm: "60px",
                  xs: "60px"
                }
              }}
            >
              {Array.isArray(item.description)
                ? item.description.map((desc, index) => (
                  <Box
                    key={index}
                    sx={{
                      border: `1px solid #051A2F`,
                      color: "#051A2F",
                      borderRadius: "29px",
                      display: "inline-flex",
                      fontSize: {
                        lg: "17px",
                        md: "17px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontFamily: "var(--English-font)",
                      padding: {
                        lg: "11px 18px 11px 18px",
                        md: "11px 18px 11px 18px",
                        sm: "6px 9px 6px 9px",
                        xs: "6px 9px 6px 9px"
                      },
                      marginRight: "9px",
                      marginBottom: "10px",
                      transition: "background-color 0.3s ease",
                      justifyContent: "center",
                    }}
                  >
                    {desc}
                  </Box>
                ))
                : item.description ? (
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "18px",
                        md: "18px",
                        sm: "15px",
                        xs: "15px",
                      },
                      color: "#000000",
                      fontFamily: "var(--English-font)",
                    }}
                  >{item.description}
                  </Typography>
                ) : (
                  Array.isArray(item.img) ? (
                    <Grid container justifyContent="center" alignItems="center">
                      {item.img.map((item, index) => (
                        <Grid item lg={3} md={3} sm={3} xs={3} key={index} sx={{ paddingRight: "10px" }}
                        >
                          <Box
                            component="img"
                            src={item}
                            alt="process technologies"
                            sx={{
                              maxWidth: "105px",
                              width: "100%"
                            }}
                          />
                        </Grid>


                      ))}
                    </Grid>


                  ) :
                    (
                      <Box
                        component="img"
                        src={item.img}
                        alt="process"
                        sx={{
                          maxWidth: "481px",
                          width: "100%"
                        }}
                      />
                    )
                )
              }
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
