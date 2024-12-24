import React, { useEffect } from "react";
import vector1 from "../../assets/sectionsImages/vectorSections1.svg";
import vector2 from "../../assets/sectionsImages/vectorSections2.svg";
import vectorWhite1 from "../../assets/sectionsImages/vectorSectionsWhite1.svg";
import vectorWhite2 from "../../assets/sectionsImages/vectorSectionsWhite2.svg";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import AnimatedText from "./aniamtionText";
import { useTranslation } from "react-i18next";

export default function ResponsiveComponent({
    goalDescription,
    serviceTypes,
    serviceColors,
    currentServiceType,
    setCurrentServiceType,
    nextServiceType,
    setNextServiceType,
    data
}) {
    const {t,i18n}=useTranslation()
    const dir=i18n.dir()
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isMeduimMobile = useMediaQuery(theme.breakpoints.down("600"));
    const isExtraSmallMobile = useMediaQuery(theme.breakpoints.down("363"));
    const breakLine = useMediaQuery(theme.breakpoints.down("520"));
    const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
    const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentServiceType(prev => {
                const currentIndex = serviceTypes.indexOf(prev);
                const nextIndex = (currentIndex + 1) % serviceTypes.length;
                setNextServiceType(serviceTypes[nextIndex + 1]);
                return serviceTypes[nextIndex];
            });
        }, 1500);

        return () => clearInterval(interval);
    }, [serviceTypes]);

    return (
        <Box sx={{
            position: 'relative',
            height: 'auto',
            maxWidth: is14Inch ? dir === 'rtl' ? "620px" : "800px" : is15Inch ? dir === 'rtl' ? "700px" : "820px" : dir === 'rtl' ? "900px" : "1000px",
            width: "100%",
        }}>
            <Box
                component='img'
                alt="bracket"
                src={theme.palette.mode === 'light' ? vector1 : vectorWhite1}
                sx={{
                    maxWidth: "100%",
                    width: {
                        lg: "106px",
                        md: "106px",
                        sm: "80px",
                        xs: isMeduimMobile ? "60px" : "31px"
                    },
                    position: "absolute",
                    top: {
                        lg: -40,
                        md: -40,
                        sm: -30,
                        xs: -30
                    },
                    right: 0,
                    transition: "right 0.3s ease",
                }}
            />

            <Typography
                sx={{
                    fontFamily: "var(--English-font)",
                    fontSize: {
                        lg: is14Inch ? "42px" : is15Inch ? "45px" : "53px",
                        md: "38px",
                        sm: "35px",
                        xs: isExtraSmallMobile ? "16px" : "26px",
                    },
                    textAlign:dir === 'rtl' ? "right" : "left",
                    paddingRight: dir === 'ltr' ? {
                        lg: "20px",
                        md: "20px",
                        sm: "12px",
                        xs: "12px"
                    }:
                    {
                        lg: "40px",
                        md: "40px",
                        sm: "32px",
                        xs: "32px"
                    }
                    ,
                   
                }}
            >
                {goalDescription}
                {breakLine && <br />}
                <AnimatedText
                    serviceColors={serviceColors}
                    nextServiceType={nextServiceType}
                    currentServiceType={currentServiceType}
                    isSmallScreen={isSmallScreen}
                    is15Inch={is15Inch}
                    is14Inch={is14Inch}
                    isExtraSmallMobile={isExtraSmallMobile}
                    data={data}
                    serviceTypes={serviceTypes}
                />
            </Typography>

            <Typography
                sx={{
                    fontFamily: "var(--English-font)",
                    fontSize: {
                        lg: is14Inch ? "42px" : is15Inch ? "45px" : "53px",
                        md: "38px",
                        sm: "35px",
                        xs: isExtraSmallMobile ? "16px" : "26px",

                    },
                    paddingLeft: {
                        lg: "30px",
                        md: "30px",
                        sm: "20px",
                        xs: isMeduimMobile ? "18px" : "12px"
                    },

                    paddingRight: dir === 'ltr' ? 'unset':
                    {
                        lg: "40px",
                        md: "40px",
                        sm: "32px",
                        xs: "32px"
                    },
                    textAlign:dir === 'rtl' ? "right" : "left",
                    marginTop: {
                        lg: "13px",
                        md: "13px",
                        sm: "13px",
                        xs: "13px"
                    }
                }}
            >
                {t("software.solutions")}
            </Typography>

            <Box
                component='img'
                alt="bracket"
                src={theme.palette.mode === 'light' ? vector2 : vectorWhite2}
                sx={{
                    maxWidth: "100%",
                    width: {
                        lg: "106px",
                        md: "106px",
                        sm: "80px",
                        xs: isExtraSmallMobile ? "60px" : isMeduimMobile ? "60px" : "31px"
                    },
                    position: "absolute",
                    bottom: {
                        lg: -12,
                        md: -32,
                        sm: -12,
                        xs: isMeduimMobile ? -16 : -6
                    },
                    left: 0,
                    transition: "left 0.3s ease",
                }}
            />
        </Box>
    );
}
