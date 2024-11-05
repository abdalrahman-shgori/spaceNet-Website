import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import arrow from "../../../assets/sectionsImages/whatWeDoArrow.svg";
import arrowWhite from "../../../assets/sectionsImages/whatwedoArrowWhite.svg";

export default function Cards({
    data,
    lastCardId
}) {
    const [expandedCard, setExpandedCard] = useState(lastCardId);
    const containerRef = useRef(null);

    const handleCardClick = (id) => {
        if (id !== lastCardId) {
            setExpandedCard(expandedCard === id ? null : id);
        }
    };

  

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            sx={{
                marginTop: "20px",
                paddingBottom: "20px"
            }}
            ref={containerRef} // Attach the ref to the container
        >
            {data?.map((card, index) => (
                <Grid
                    item
                    key={card.id}
                    sx={{
                        position: "relative",
                        zIndex: data.length + index,  // Higher index cards will be on top
                        marginTop: index === 0 ? "0" : "-70px",  // Adjust overlap amount
                        transition: "margin 0.2s ease-out",  // Smooth transition
                        width: "100%",  // Ensure cards take full width
                        maxWidth: "400px",  // Set a maximum width for the cards
                        cursor: "pointer",
                        marginBottom: expandedCard === card.id && "100px",
                    }}
                    onClick={() => handleCardClick(card.id)}
                >
                    <Card
                        sx={{
                            backgroundColor: card.backgroundColor,
                            maxHeight: expandedCard === card.id || lastCardId === card.id ? {
                                lg: "1000px",
                                md: "1000px",
                                sm: "800px",
                                xs: "800px"
                            } : {
                                lg: "300px",
                                md: "300px",
                                sm: "200px",
                                xs: "300px"  // Set this value according to your content
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
                            transition: "max-height 0.2s ease-out, border-radius 0.2s ease-out", // Smooth transition for height, max-height, and border-radius
                            padding: {
                                lg: "72px 0px 0px 40px",
                                md: "72px 0px 0px 40px",
                                sm: "44px 0px 0px 20px",
                                xs: "44px 0px 0px 20px"
                            }
                        }}
                    >
                        <CardContent sx={{ padding: "0" }}>
                            <Grid container >
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
                                        transition: "transform 0.2s linear", // Add smooth transition for rotation
                                        transform: expandedCard === card.id ? "rotate(-90deg)" : "rotate(0deg)",
                                    }}
                                    src={index === 1 ? arrowWhite : arrow}
                                />
                                <Grid lg={4} sm={4} xs={12}>
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
                                                sm: "221px",
                                                xs: "221px",
                                            },
                                            width: "100%",
                                            color: index === 1 ? "#FFFFFF" : "#000000",
                                        }}
                                    >
                                        {card.title}
                                    </Typography>
                                </Grid>
                                <Grid lg={7} sm={7} xs={12}
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
                                        flexDirection:"column"
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
                                                lg: "590px",
                                                md: "400px",
                                                sm: "320px",
                                                xs: "285px"
                                            },
                                            width: "100%",
                                            textAlign:"justify"
                                        }}
                                    >
                                        {card.content}
                                    </Typography>
                                    <Typography
                                    sx={{
                                        marginTop:{
                                            lg:"78px",
                                            md:"78px",
                                            sm:"28px",
                                            xs:"18px"
                                        }
                                    }}
                                    >
                                    {card.subService.map((item) => (
                                        <Box
                                        key={item} // Ensure to add a unique key for each item
                                        sx={{
                                            border: `1px solid ${index === 1 ? "#FFFFFF" : '#051A2F'}`,
                                            color:index === 1 ? "#FFFFFF" : "#051A2F" ,
                                            borderRadius:"39px",
                                            display:"inline-flex",
                                            fontSize:{
                                                lg:"22px",
                                                md:"22px",
                                                sm:"16px",
                                                xs:"16px"
                                            },
                                            fontFamily:"var(--English-font)",
                                            padding:"6px 22px",
                                            marginRight:"15px",
                                            marginBottom:"10px",
                                            transition: "background-color 0.3s ease", // Transition for hover effect
                                            '&:hover': {
                                                backgroundColor: index === 1 ? "#ffffff" : "#E0E0E0" // Change this to your desired color
                                            }
                                        }}
                                        >
                                            {item}
                                        </Box>
                                    ))}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}
