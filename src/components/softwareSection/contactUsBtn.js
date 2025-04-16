import React, { useState } from "react";
import Arrow from "../../assets/sectionsImages/contactusArrow.svg";
import ArrowWight from "../../assets/sectionsImages/contactUsArrowWhite.svg";
import { useTranslation } from "react-i18next";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
export default function ContactUsBtn({ setOpen }) {
  const { t, i18n } = useTranslation()
  const dir = i18n.dir()
  const [btnHovered, setBtnHovered] = useState(false)
  const theme = useTheme()
  const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));

  return (
    <>
      <Grid
        onMouseEnter={() => setBtnHovered(true)}
        onMouseLeave={() => setBtnHovered(false)}
        onClick={() => setOpen(true)}
        sx={{
          cursor: "pointer",
          marginTop: {
            lg: is15Inch ? "50px" : "70px",
            md: "50px",
            sm: "53px",
            xs: "53px"
          },
          border: theme.palette.mode === 'light' ? "2px solid black" : "2px solid #F4F4F4",

          height: {
            lg: "80px",
            md: "60px",
            sm: "60px",
            xs: "42px"
          },
          borderRadius: "52px",

          transition: "background 0.3s ease, border-color 0.3s ease",
          display: "inline-flex",
          paddingLeft: dir === 'rtl' && "20px",
          paddingRight: dir === 'ltr' ? "20px" : "4px",

          "&:hover": {
            background: "#9D89FC",
            borderColor: "#9D89FC",
          },



        }}

      >
        <Box
          sx={{
            display: "flex",
            gap: {
              lg: "26px",
              md: "26px",
              sm: "26px",
              xs: "10px"
            },
            alignItems: "center",
            paddingLeft: "4px",
          }}
        >
          <Box
            sx={{
              border: btnHovered && theme.palette.mode !== 'dark' ? "2px solid transparent" : theme.palette.mode === 'light' ? '2px solid black' : '2px solid #F4F4F4',
              background: theme.palette.mode === "light" ? "#F4F4F4" : "transparent",
              borderRadius: '50%',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: {
                lg: "72px",
                md: "50px",
                sm: "50px",
                xs: "35px"
              },
              width: {
                lg: "72px",
                md: "50px",
                sm: "50px",
                xs: "35px"
              },
            }}
          >
            <Box
              component="img"
              alt="arrow"
              src={theme.palette.mode === 'light' ? Arrow : ArrowWight}
              sx={{
                width: {
                  lg: "auto",
                  md: "auto",
                  sm: "auto",
                  xs: "25px"
                }
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: {
                lg: "22px",
                md: "20px",
                sm: "18px",
                xs: "16px",
              },
              fontFamily: "var(--English-font), Arial, sans-serif",
              textAlign: "center",

            }}

          >
            {t("software.CONTACTUS")}
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
