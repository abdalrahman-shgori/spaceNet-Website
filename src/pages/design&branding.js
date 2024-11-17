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

const designAndBrandingList = [
    { title: "Design Strategy", color: "#1CB786", rotate: "5.28deg" },
    { title: "Web & Mobile Design", color: "#E9FA50", rotate: "-3.6deg" },
    { title: "Consulting", color: "#F29111", rotate: "-11.1deg" },
    { title: "Branding &Printables", color: "#9D89FC", rotate: "-19.3deg" },
];

export default function DesignAndBranding() {
    const [hoveredcardid, sethoveredcardid] = useState(null);
    const theme = useTheme()
    const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
    const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));
    const technologiesData = [
        {
            id: 0,
            title: "Structure. Creativity and design",
            description: "We research the market and the company. Examine the rivals and the intended audience. If there is an existing site, we audit it. Choose your references.",
            image: (
                <Typography
                    sx={{
                        fontSize: {
                            lg: "50px",
                            md: "40px",
                            sm: "40px",
                            xs: "30px"
                        },
                        fontFamily: "var(--English-font)",
                    }}
                >
                    [1]
                </Typography>
            ),
        },
        {
            id: 1,
            title: "Familiarity. Analysis, data collection, research",
            description: "We give each other a call, establish a rapport, and go over all the project's specifications, aims, and objectives.",
            image: (
                <Typography
                    sx={{
                        fontSize: {
                            lg: "50px",
                            md: "40px",
                            sm: "40px",
                            xs: "30px"
                        },
                        fontFamily: "var(--English-font)",
                    }}
                >
                    [2]
                </Typography>
            ),
        },
        {
            id: 2,
            title: "Technology. Development",
            description: "Developing wow to identify your brand's optimal answer for consumer demands and commercial challenges.",
            image: (
                <Typography
                    sx={{
                        fontSize: {
                            lg: "50px",
                            md: "40px",
                            sm: "40px",
                            xs: "30px"
                        },
                        fontFamily: "var(--English-font)",
                    }}
                >
                    [3]
                </Typography>
            ),
        },
        {
            id: 3,
            title: "Implement, test and analyse",
            description: "Look for areas for improvement, innovative ways to promote your business, or tips to add to the project.",
            image: (
                <Typography
                    sx={{
                        fontSize: {
                            lg: "50px",
                            md: "40px",
                            sm: "40px",
                            xs: "30px"
                        },
                        fontFamily: "var(--English-font)",
                    }}
                >
                    [4]
                </Typography>
            ),
        },
        {
            id: 4,
            title: "Evaluating and developing",
            description: "We examine the work's outcomes and make recommendations for additional brand, app, and business growth strategies.",
            image: (
                <Typography
                    sx={{
                        fontSize: {
                            lg: "50px",
                            md: "40px",
                            sm: "40px",
                            xs: "30px"
                        },
                        fontFamily: "var(--English-font)",
                    }}
                >
                    [5]
                </Typography>
            ),
        },
    ];
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const lastCardId = data.length > 0 ? data[data.length - 1].id : null;
    useEffect(() => {
        setLoading(true)
        const fetchSubServices = async () => {
            try {
                const response = await subServices('design-branding');
                setData(response.data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching sub-service data: ', error);
            }
        };
        // if (id) {
        //     fetchSubServices();
        // }
        fetchSubServices();
    }, []);

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

    return (
        <>
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
                            sm: "100px 25px 0 25px",
                            xs: "89px 25px 0 25px",
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
                        text1="Elevate Your Brand With Our Proven 5-Step Transformation Process"
                        top="80px"
                    />
                    <LayoutCards
                        technologiesData={technologiesData}
                        sethoveredcardid={sethoveredcardid}
                        hoveredcardid={hoveredcardid}
                    />
                    <SectionDescription
                        text1={<>Designing Solutions,<br/>Achieving Greatness.</>}
                        top="43px"
                    />
                    <CreatingSolution />
                </Grid>
                <LetsProject
                    text1={<>Got a Great Idea?<br/> Ready to Bring it to Life?</>}
                    text2="Let’s make it happen"
                    btnText="Let’s Talk business!"
                    cardBg="#1CB786"
                    text1Color="#FFFFFF"
                    text2Color="#FFFFFF"
                />
                <SpaceNetLayout />
            </motion.div>
        </>
    )
}