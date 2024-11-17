import { Grid, Card, CardContent, Typography, Box, Skeleton } from "@mui/material";
import React, { useState, useRef } from "react";
import arrow from "../assets/sectionsImages/whatWeDoArrow.svg";
import arrowWhite from "../assets/sectionsImages/whatwedoArrowWhite.svg";
import { motion } from "framer-motion";
export default function Cards({
    data,
    lastCardId,
    loading
}) {
    const [expandedCard, setExpandedCard] = useState(lastCardId);
    const containerRef = useRef(null);

    const handleCardClick = (id) => {
        if (id !== lastCardId) {
            setExpandedCard(expandedCard === id ? null : id);
        }
    };
    const [inView, setInView] = useState(false);

    return (
        <Grid item
            container
            direction="column"
            alignItems="center"
            sx={{
                marginTop: "20px",
            }}
            ref={containerRef}
        >
            {loading ? (
                <>
                    <Skeleton variant="rounded" width="100%" height={150} />
                    <Skeleton variant="rounded" width="100%" height={150} sx={{ marginTop: "20px" }} />
                </>
            ) : (

                data?.map((card, index) => (
                    <Grid
                        item
                        key={card.id}
                        sx={{
                            position: "relative",
                            zIndex: data.length + index,
                            marginTop: index === 0 ? "0" : "-70px",
                            transition: "margin 0.4s",

                            cursor: "pointer",
                            marginBottom: expandedCard === card.id ? "100px" : "0px",
                        }}
                        onClick={() => handleCardClick(card.id)}
                    >
                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Card
                                sx={{
                                    backgroundColor: card.background_color,
                                    maxHeight: expandedCard === card.id || lastCardId === card.id ? {
                                        lg: "1000px",
                                        md: "1000px",
                                        sm: "800px",
                                        xs: "800px"
                                    } : {
                                        lg: "300px",
                                        md: "300px",
                                        sm: "200px",
                                        xs: "300px"
                                    },
                                    overflow: "hidden",
                                    boxShadow: 3,
                                    borderTopRightRadius: {
                                        lg: "75px",
                                        md: "75px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    borderTopLeftRadius: {
                                        lg: "75px",
                                        md: "75px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    borderBottomRightRadius: (expandedCard === card.id || card.id === lastCardId) && {
                                        lg: "75px",
                                        md: "75px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    borderBottomLeftRadius: (expandedCard === card.id || card.id === lastCardId) && {
                                        lg: "75px",
                                        md: "75px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    transition: "max-height 0.4s , border-radius 0.4s ",
                                    padding: {
                                        lg: "72px 0px 0px 40px",
                                        md: "72px 0px 0px 40px",
                                        sm: "44px 0px 0px 20px",
                                        xs: "44px 0px 0px 20px"
                                    }
                                }}
                            >
                                <CardContent sx={{ padding: "0" }}>
                                    <Grid container item>
                                        <Box
                                            component="img"
                                            sx={{
                                                position: "absolute",
                                                right: {
                                                    lg: "40px",
                                                    md: "40px",
                                                    sm: "30px",
                                                    xs: "30px"
                                                },
                                                top: {
                                                    lg: "70px",
                                                    md: "70px",
                                                    sm: "40px",
                                                    xs: "50px"
                                                },
                                                width: {
                                                    lg: "63px",
                                                    md: "50px",
                                                    sm: "33px",
                                                    xs: "33px",
                                                },
                                                transition: "transform 0.4s linear",
                                                transform: expandedCard === card.id ? "rotate(-90deg)" : "rotate(0deg)",
                                            }}
                                            src={index === 1 ? arrowWhite : arrow}
                                        />
                                        <Grid item lg={4} sm={4} xs={12}>
                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        lg: "48px",
                                                        md: "36px",
                                                        sm: "24px",
                                                        xs: "32px"
                                                    },
                                                    fontFamily: "var(--English-font)",
                                                    maxWidth: {
                                                        lg: "405px",
                                                        md: "405px",
                                                        sm: "248px",
                                                        xs: "248px",
                                                    },
                                                    width: "100%",
                                                    color: index === 1 ? "#FFFFFF" : "#000000",
                                                }}
                                            >
                                                {card.title}
                                            </Typography>
                                        </Grid>
                                        <Grid item lg={7} sm={7} xs={12}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: {
                                                    lg: 'center',
                                                    md: 'center',
                                                    sm: 'center',
                                                    xs: 'flex-start'
                                                },
                                                height: '100%',
                                                marginTop: {
                                                    lg: "unset",
                                                    md: "unset",
                                                    sm: "unset",
                                                    xs: "26px"
                                                },
                                                flexDirection: "column"
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    color: index === 1 ? "#FFFFFF" : "#000000",
                                                    fontSize: {
                                                        lg: "25px",
                                                        md: "22px",
                                                        sm: "16px",
                                                        xs: "16px"
                                                    },
                                                    fontFamily: "var(--English-font)",
                                                    maxWidth: {
                                                        lg: "100%",
                                                        md: "100%",
                                                        sm: "100%",
                                                        xs: "96%"
                                                    },
                                                    width: "100%",
                                                    textAlign: "justify",
                                                    paddingRight: {
                                                        lg: "60px",
                                                        md: "60px",
                                                        sm: "30px",
                                                        xs: "0px"
                                                    }
                                                }}
                                            >
                                                {card.description}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    marginTop: {
                                                        lg: "78px",
                                                        md: "78px",
                                                        sm: "28px",
                                                        xs: "18px",
                                                    },

                                                }}
                                            >

                                                {card.hashtags.split('|').map((hashtag, indexs) => (
                                                    <Box
                                                        key={indexs}
                                                        sx={{
                                                            border: `1px solid ${index === 1 ? "#FFFFFF" : '#051A2F'}`,
                                                            color: index === 1 ? "#FFFFFF" : "#051A2F",
                                                            borderRadius: "39px",
                                                            display: "inline-flex",
                                                            fontSize: {
                                                                lg: "22px",
                                                                md: "22px",
                                                                sm: "16px",
                                                                xs: "16px"
                                                            },
                                                            fontFamily: "var(--English-font)",
                                                            padding: "6px 22px",
                                                            marginRight: "15px",
                                                            marginBottom: "10px",
                                                            transition: "background-color 0.3s ease",
                                                        }}
                                                    >
                                                        {hashtag.trim()}
                                                    </Box>
                                                ))}


                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </motion.div>

                    </Grid>
                ))
            )}

        </Grid>

    );
}
