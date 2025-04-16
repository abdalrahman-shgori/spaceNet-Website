import React from 'react';
import techImg from "../../../assets/sectionsImages/technologiesImage.svg"
import meetImg from "../../../assets/sectionsImages/meetingImg.svg"
import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
export default function OurTechnologiesXsScreen({ programmingLang }) {
    const { i18n, t } = useTranslation()
    const dir = i18n.dir()
    return (
        <>
            <Box
                sx={{
                    padding: {
                        xs: "0px 0px 72px 0px",
                    },
                    display: {
                        lg: "none",
                        md: "none",
                        sm: "none",
                        xs: "block"
                    }
                }}
            >
                <Grid container>
                    <Grid sm={12} xs={12} item>
                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{ y: 0 }}
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
                                    alignItems: "center"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontFamily: "var(--English-font), Arial, sans-serif",
                                        padding: {
                                            xs: "56px 26px 56px 26px"
                                        },
                                        textAlign: "center",
                                        color: "#051A2F"

                                    }}
                                >
                                    {t("software.ourTeam")}
                                </Typography>
                            </Grid>
                        </motion.div>
                    </Grid>
                </Grid>
                <Grid container
                    sx={{
                        marginTop: {
                            xs: "15px"
                        }
                    }}
                >
                    <Grid xs={6} item
                        sx={{
                            paddingLeft: dir === 'rtl' && "10px",
                            paddingRight: dir === 'ltr' && "10px",
                            overflow: "hidden"

                        }}
                    >
                        <motion.div
                            initial={
                                dir === 'rtl' ? { x: 100 } : { x: -100 }
                            }
                            whileInView={{
                                x: 0
                            }}
                            transition={{ duration: 0.5 }}
                            style={{
                                height: "100%",

                            }}
                        >
                            <Box
                                component="img"
                                loading="lazy"
                                src={techImg}
                                alt='women in meeting'
                                sx={{
                                    borderRadius: "15px",
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover"
                                }}
                            />
                        </motion.div>

                    </Grid>
                    <Grid item xs={6}
                        sx={{
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
                                height: "100%",
                            }}
                        >
                            <Grid
                                sx={{
                                    background: "#9D89FC",
                                    borderRadius: "15px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"

                                }}
                            >

                                <Grid container spacing={0.5}
                                    sx={{
                                        padding: {
                                            xs: "27px 10px 27px 10px",
                                        },

                                    }}
                                >
                                    {programmingLang?.map((item, index) => (
                                        <Grid item lg={3} md={3} sm={4} xs={4} key={index}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                marginTop: "6px",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                loading="lazy"
                                                src={item.img}
                                                alt='technologies languages'
                                                sx={{
                                                    maxWidth: "100%",
                                                    maxHeight: "100%",
                                                    objectFit: "contain",

                                                }}
                                            />
                                        </Grid>

                                    ))}
                                </Grid>
                            </Grid>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12}>
                        <motion.div
                            initial={{ y: 100 }}
                            whileInView={{
                                y: 0
                            }}
                            transition={{ duration: 0.5 }}
                            style={{
                                height: "100%"
                            }}
                        >
                            <Box
                                component="img"
                                loading="lazy"
                                src={meetImg}
                                alt='meeting'
                                sx={{
                                    borderRadius: "23px",
                                    height: "145px",
                                    width: "100%",
                                    objectFit: "cover",
                                    marginTop: "10px"

                                }}
                            />
                        </motion.div>

                    </Grid>
                </Grid>
            </Box>
        </>
    )
}