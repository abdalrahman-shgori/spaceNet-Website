import React, { useEffect, useState } from "react";
import Crafting from "../components/designAndBranding/craftingAndDigital";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import WhatWeDo from "../components/whatweDo/whatWeDo";
import { subServices } from "../services/websiteApis/services";
import SectionDescription from "../components/sectionDescription";
import LayoutCards from "../components/layoutCards";
import { motion } from "framer-motion"
import LetsProject from "../components/letsProject";
import SpaceNetLayout from "../components/spaceNetLayout";
import CreatingSolution from "../components/designAndBranding/creatingSolutions";
import { ServiceCategories } from "../services/websiteApis/serviceCategories";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const technologiesDataImage = [
    {
        id: 0,
        image: (
            <Typography
                sx={{
                    fontSize: { lg: "50px", md: "40px", sm: "40px", xs: "30px" },
                    fontFamily: "var(--English-font)",
                }}
            >
                [1]
            </Typography>
        ),
    },
    {
        id: 1,
        image: (
            <Typography
                sx={{
                    fontSize: { lg: "50px", md: "40px", sm: "40px", xs: "30px" },
                    fontFamily: "var(--English-font)",
                }}
            >
                [2]
            </Typography>
        ),
    },
    {
        id: 2,
        image: (
            <Typography
                sx={{
                    fontSize: { lg: "50px", md: "40px", sm: "40px", xs: "30px" },
                    fontFamily: "var(--English-font)",
                }}
            >
                [3]
            </Typography>
        ),
    },
    {
        id: 3,
        image: (
            <Typography
                sx={{
                    fontSize: { lg: "50px", md: "40px", sm: "40px", xs: "30px" },
                    fontFamily: "var(--English-font)",
                }}
            >
                [4]
            </Typography>
        ),
    },
    {
        id: 4,
        image: (
            <Typography
                sx={{
                    fontSize: { lg: "50px", md: "40px", sm: "40px", xs: "30px" },
                    fontFamily: "var(--English-font)",
                }}
            >
                [5]
            </Typography>
        ),
    },
];



export default function DesignAndBranding({ setOpen }) {
    const { t, i18n } = useTranslation()
    const designAndBrandingList = [
        { title: t("designAndBranding.DesignStrategy"), color: "#1CB786", rotate: "5.28deg" },
        { title: t("designAndBranding.WebMobileDesign"), color: "#E9FA50", rotate: "-3.6deg" },
        { title: t("designAndBranding.Consulting"), color: "#F29111", rotate: "-11.1deg" },
        { title: t("designAndBranding.BrandingRebranding"), color: "#9D89FC", rotate: "-19.3deg" },
    ];
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const theme = useTheme()
    const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
    const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const lastCardId = data.length > 0 ? data[data.length - 1].id : null;
    const [technologiesData, setTechnologiesData] = useState([])
    const [scrollIndex, setScrollIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [reset, setReset] = useState(false);

    const [hasReachedEnd, setHasReachedEnd] = useState(false);

    const handleScroll = () => {
        if (isScrolling || hasReachedEnd) return;
        setIsScrolling(true);

        if (scrollIndex < designAndBrandingList.length) {
            setScrollIndex((prev) => prev + 1);
        }

        if (scrollIndex === designAndBrandingList.length - 1) {
            setHasReachedEnd(true);
        }
        setTimeout(() => {
            setIsScrolling(false);
        }, 500);
    };
    const handleKeydown = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === ' ') {
            handleScroll();
        }
    };
    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    }, [scrollIndex, isScrolling]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        document.body.style.overflow = "hidden";

        if (reset) {
            document.body.style.overflow = "auto";
        }

        if (scrollIndex === designAndBrandingList.length) {
            setTimeout(() => {
                setReset(true);
            }, 0);
        }

        return () => {
            document.body.style.overflow = "auto";
        };

    }, [scrollIndex, reset, designAndBrandingList.length]);
    useEffect(() => {
        setLoading(true)
        const fetchSubServices = async () => {
            try {
                const response = await subServices('design-branding');
                setData(response.data)
                setLoading(false)
            } catch (error) {
            }
        };

        fetchSubServices();
    }, []);

    useEffect(() => {
        setLoading(true)
        const fetchServiceCategories = async () => {
            try {
                const response = await ServiceCategories('design-branding');
                setTechnologiesData(response.data)
                setLoading(false)
            } catch (error) {
            }
        };
        fetchServiceCategories();
    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>DESIGN & BRANDING</title>
                <link rel="canonical" href="https://spacenetiq/design-branding" />
            </Helmet>
            <motion.div
                onWheel={handleScroll} onTouchMove={handleScroll}
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                    duration: 1
                }}
            >
                <Grid
                    className="root-container"
                    sx={{
                        padding: {
                            lg: is14Inch ? "80px 75px 0 75px" : is15Inch ? "90px 75px 0 75px" : "100px 75px 0 75px",
                            md: "90px 75px 0 75px",
                            sm: "100px 20px 0 20px",
                            xs: "89px 20px 0 20px",
                        },
                    }}
                >
                    <Crafting
                        designAndBrandingList={designAndBrandingList}
                        reset={reset}
                        scrollIndex={scrollIndex}
                        handleScroll={handleScroll}
                        setScrollIndex={setScrollIndex}
                        data={data}
                    />
                    <WhatWeDo data={data} loading={loading} lastCardId={lastCardId} />
                    <SectionDescription
                        text1={t("designAndBranding.elevateYourBrand")}
                        top="80px"
                    />
                    <LayoutCards
                        technologiesData={technologiesData}
                        sethoveredcardid={sethoveredcardid}
                        hoveredcardid={hoveredcardid}
                        technologiesDataImage={technologiesDataImage}
                    />
                    <SectionDescription
                        text1={<> {t("designAndBranding.designSolution")} <br /> {t("designAndBranding.Achieving")} </>}
                        top="43px"
                    />
                    <CreatingSolution />
                </Grid>
                <LetsProject
                    text1={<> {t("designAndBranding.gotGeat")} <br /> {t("designAndBranding.readyToBring")} </>}
                    text2={t("software.letsMake")}
                    btnText={t("software.letsTalk")}
                    cardBg="#1CB786"
                    text1Color="#FFFFFF"
                    text2Color="#FFFFFF"
                    setOpen={setOpen}
                />
                <SpaceNetLayout setOpen={setOpen} />
            </motion.div>
        </>
    )
}