import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import techImg from "../../../assets/sectionsImages/technologiesImage.svg"
import meetImg from "../../../assets/sectionsImages/meetingImg.svg"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

export default function OurTechnologiesRegular({ programmingLang }) {
    const { i18n, t } = useTranslation()
    const dir = i18n.dir()
    return (
        <>
            <Box
                sx={{
                    padding: {
                        lg: "0px 120px 149px 120px",
                        md: "0px 0px 149px 0px",
                        sm: "0px 0px 149px 0px",
                    },
                    display: {
                        lg: "block",
                        md: "block",
                        sm: "block",
                        xs: "none"
                    }
                }}
            >
                <Grid container>
                    <Grid lg={8.5} md={8} sm={8} item
                        sx={{
                            overflow: "hidden"
                        }}
                    >
                        <motion.div
                            initial={
                                dir === 'ltr' ? { x: -100 } : { x: 100 }
                            }
                            whileInView={{ x: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                height: "100%"
                            }}
                        >
                            <Grid
                                sx={{
                                    background: "#9D89FC",
                                    borderRadius: "22px",
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%"

                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {
                                            lg: "33px",
                                            md: "28px",
                                            sm: "22px"
                                        },
                                        fontFamily: "var(--English-font)",
                                        padding: {
                                            lg: "80px 86.3px 80px 86.3px",
                                            md: "40px 40px 40px 40px",
                                            sm: "40px 40px 40px 40px",
                                        },
                                        textAlign: "center",
                                        color: "#051A2F",
                                        lineHeight: {
                                            lg: "43.8px",
                                            md: "43.8px",
                                            sm: "24px",
                                            xs: "24px"
                                        }
                                    }}
                                >
                                    {t("software.ourTeam")}
                                </Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid lg={3.5} md={4} sm={4} item
                        sx={{
                            paddingLeft: dir === 'ltr' && "20px",
                            paddingRight: dir === 'rtl' && "20px",

                            overflow: "hidden"
                        }}
                    >
                        <motion.div
                            initial={
                                dir === 'rtl' ? { x: -100 } : { x: 100 }
                            }
                            whileInView={{
                                x: 0
                            }}
                            transition={{ duration: 0.5 }}
                            style={{
                                height: "100%"
                            }}
                        >
                            <Box
                                component="img"
                                alt='women in meet'
                                src={techImg}
                                sx={{
                                    borderRadius: "23px",
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover"

                                }}
                            />
                        </motion.div>
                    </Grid>
                </Grid>
                <motion.div
                    initial={{ y: 100 }}
                    whileInView={{
                        y: 0,
                    }}
                    transition={{ duration: 0.5 }}
                >
                    <Grid container
                        sx={{
                            marginTop: {
                                lg: "20px",
                                md: "20px",
                                sm: "20px"
                            }
                        }}
                    >
                        <Grid item lg={7} md={7} sm={6}
                            sx={{
                                background: "#9D89FC",
                                borderRadius: "22px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            <Grid container
                                sx={{
                                    padding: {
                                        lg: "50px 88px 50px 88px",
                                        md: "30px 30px 30px 30px",
                                        sm: "30px 30px 30px 30px"
                                    },

                                }}
                            >
                                {programmingLang?.map((item, index) => (
                                    <Grid item lg={3} md={3} sm={4} xs={6} key={index}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.img}
                                            alt='technologies languages'
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                paddingTop: "10px",
                                                paddingRight: "10px"
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>

                        <Grid item lg={5} md={5} sm={6}
                            sx={{
                                paddingLeft: dir === 'ltr' && "20px",
                                paddingRight: dir === 'rtl' && "20px",
                            }}
                        >
                            <Box
                                component="img"
                                src={meetImg}
                                alt='meet Image'
                                sx={{
                                    borderRadius: "23px",
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                            />
                        </Grid>
                    </Grid>
                </motion.div>
            </Box>
        </>
    )
}