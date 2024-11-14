import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function CreatingSolution() {
  const solutions = [
    {
      id: 0,
      title: "What we are doing?",
      description: ["Design System", "Branding", "Web Design", "Development", "Creative consulting", "Logo", "Mobile application"],
    },
    {
      id: 1,
      title: "How we are doing it?",
      description:
        "Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    },
    {
      id: 2,
      title: "Our Technologies",
      description:
        "Lorem simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
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
                textAlign: "left",
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
                marginTop: "83px"
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
                : item.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
