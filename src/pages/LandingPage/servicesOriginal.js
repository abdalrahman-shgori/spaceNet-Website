import React, { useState } from "react";
import { motion } from "framer-motion";
import customCursor from "../../assets/images/internet.svg";
import academy from "../../assets/images/academy.svg";
import software from "../../assets/images/software.svg";
import design from "../../assets/images/design.svg";
import UnionWhite from "../../assets/images/UnionWhite.svg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
export default function ServicesOriginal({
  activeService,
  item,
  index,
  isMobile,
  isTabScreen,
  handleClicks,
  theme,
  image,
  setHoveredService,
  setHoveredServiceDescription,
  setCapture,
  setOutOfServicesHover,
  setActiveService,
  setIndexOfHoveredServices,
  indexOfHoveredServices
}) {
  const { i18n, t } = useTranslation()
  const dir = i18n.dir()
  const handleHover = () => {
    setHoveredService(i18n.language === 'ar' ? item.title_ar : i18n.language === 'ku' ? item.title_ku : item.title);
    setHoveredServiceDescription(i18n.language === 'ar' ? item.description_ar : i18n.language === 'ku' ? item.description_ku : item.description);
    setIndexOfHoveredServices(item.id)
    setCapture(true);
    setOutOfServicesHover(false)
  };

  const handleLeave = () => {
    setHoveredService("");
    setIndexOfHoveredServices('')
    setHoveredServiceDescription("");
    setActiveService("ABOUT")
    setCapture(false);
    setOutOfServicesHover(true)
    setTimeout(() => {
      setOutOfServicesHover(false)
    }, 1000);

  };
  const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
  const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));
  // Outside the component or above the JSX
  const localizedTitle =
    i18n.language === "ar"
      ? item.title_ar
      : i18n.language === "ku"
        ? item.title_ku
        : item.title;

  const isActive = isTabScreen && activeService === localizedTitle;
  const backgroundColor = isActive
    ? activeService === "ABOUT"
      ? theme.palette.mode === "light"
        ? "#E9FA50"
        : "#9D89FC"
      : ["#FF9F31", "#E9FA50", theme.palette.mode === "light" ? "#011343" : "#9D89FC", "#1CB786"][index] || "#F5F5F5"
    : "#F5F5F5";

  const textColor =
    isActive && index !== 1 && activeService !== "ABOUT"
      ? "#FFFFFF"
      : "#051A2F";

  const cursorUrl =
    [academy, customCursor, software, design][index] ?? "default";

  const fontSize = {
    lg: is14Inch ? "24px" : is15Inch ? "32px" : "38px",
    md: "24px",
    sm: "15px",
    xs: "15px",
  };

  const boxHeight = {
    lg: is14Inch ? "55px" : is15Inch ? "65px" : "75px",
    md: "55px",
    sm: "50px",
    xs: "50px",
  };

  const marginTop = {
    lg: is14Inch ? "12px" : is15Inch ? "15px" : "20px",
    md: "10px",
    sm: "20px",
    xs: "6px",
  };

  const hoverStyles = !isMobile && !isTabScreen
    ? {
      transform: "scale(1.05) rotate(2deg)",
      color: index === 1 ? "#011343" : "#FFFFFF",
      background:
        [
          "#FF9F31",
          "#E9FA50",
          theme.palette.mode === "light" ? "#011343" : "#9D89FC",
          "#1CB786",
        ][index] || "",
    }
    : {};

  const truncatedTitle =
    item.title.length > 20
      ? `${item.title.slice(0, 20)}...`
      : localizedTitle;

  return (
    <Grid
      key={item.id || index}
      item
      xs={12}
      sm={6}
      md={12}
      lg={12}
      sx={{
        display: {
          lg: "unset",
          md: "unset",
          sm: "unset",
          xs: "none"
        },
        overflow: "hidden",
      }}
    >

      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 100,
          delay: index * 0.5,
        }}
        onMouseEnter={() => {
          if (!isMobile && !isTabScreen) {
            handleHover();
          }
        }}
        onMouseLeave={() => {
          if (!isMobile && !isTabScreen) {
            handleLeave();
          }
        }}
      >
        <Link to={!isTabScreen && image?.url}>
          <Box
            onClick={() => {
              if (isTabScreen) handleClicks(item);
            }}
            sx={{
              cursor: `url(${cursorUrl}), pointer`,
              background: backgroundColor,
              borderRadius: "38.7px",
              marginLeft: "2px",
              marginTop,
              height: boxHeight,
              display: "flex",
              alignItems: "center",
              paddingLeft: "32px",
              paddingRight: "32px",
              justifyContent: "space-between",
              marginRight: { lg: "unset", md: "unset", sm: "6px", xs: "6px" },
              color: textColor,
              transition: "background 0.5s ease, transform 0.2s",
              "&:hover": hoverStyles,
            }}
          >
            <Typography
              sx={{
                fontSize,
                fontFamily: "var(--English-font)",
                fontWeight: "600",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxWidth: "550px",
              }}
            >
              {truncatedTitle}
            </Typography>

            {image && (
              <Box
                component="img"
                loading="eager"
                fetchPriority="high"
                src={
                  indexOfHoveredServices === 3 &&
                    index === 2 &&
                    theme.palette.mode === "light"
                    ? UnionWhite
                    : image.img
                }
                alt="arrow"
                sx={{
                  width: {
                    lg: is14Inch ? "25px" : is15Inch ? "28px" : "unset",
                    md: "25px",
                    sm: "25px",
                  },
                  height: "35px",
                  transform: dir === "ltr" ? "unset" : "scaleX(-1)",
                }}
              />
            )}
          </Box>

        </Link>

      </motion.div>
    </Grid>
  )
}