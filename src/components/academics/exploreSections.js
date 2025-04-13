import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import fullStack from "../../assets/sectionsImages/academics/development.gif"
import front from "../../assets/sectionsImages/academics/developer.gif"
import back from "../../assets/sectionsImages/academics/launch.gif"
import logoDesign from "../../assets/sectionsImages/academics/logo-design.gif"
import automation from "../../assets/sectionsImages/academics/hard-drive.gif"
import uiux from "../../assets/sectionsImages/academics/design.gif"
import general from "../../assets/sectionsImages/academics/database.gif"
import branding from "../../assets/sectionsImages/academics/drawing-pencil.gif"
import security from "../../assets/sectionsImages/academics/cyber-security.gif"
import itAdmin from "../../assets/sectionsImages/academics/maintenance.gif"
import server from "../../assets/sectionsImages/academics/cloud-connect.gif"
import cloud from "../../assets/sectionsImages/academics/file-transfer.gif"
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

const btnStyle = {
    background: "#000000",
    color: "#FFFFFF",
    borderRadius: "10px",
    padding: {
        lg: "12px 26px 12px 26px",
        md: "17px 26px 17px 26px",
        sm: "11px 18px 11px 18px",
        xs: "11px 18px 11px 18px"
    },

    fontSize: {
        lg: "20px",
        md: "18px",
        sm: "13px",
        xs: "13px"
    },
    fontFamily: "var(--English-font)",

};
export default function ExploreLearning({ bg, itemid, setEnroll }) {
    const { t } = useTranslation()
    const contentMap = {
        1: [
            { img: uiux, title: t("academics.UI/UX"), borderColor: "#E9FA50" },
            { img: logoDesign, title: t("academics.LogoDesign"), borderColor: "#1CB786" },
            { img: branding, title: t("academics.BrandingDesign"), borderColor: "#FA6423" }
        ],
        3: [
            { img: fullStack, title: t("academics.FullstackDevelopment"), borderColor: "#E9FA50" },
            { img: front, title: t("academics.FrontEndDevelopment"), borderColor: "#9D89FC" },
            { img: back, title: t("academics.BackEndDevelopment"), borderColor: "#1CB786" }
        ],
        5: [
            { img: general, title: t("academics.GeneralNetwork"), borderColor: "#1CB786" },
            { img: automation, title: t("academics.Automation"), borderColor: "#E9FA50" },
            { img: security, title: t("academics.Security"), borderColor: "#FA6423" }
        ],
        default: [
            { img: itAdmin, title: t("academics.ITAdministration"), borderColor: "#1CB786" },
            { img: server, title: t("academics.Server"), borderColor: "#E9FA50" },
            { img: cloud, title: t("academics.Virtualization"), borderColor: "#FA6423" }
        ]
    };

    const selectedContent = contentMap[itemid] || contentMap.default;
    const explore = selectedContent.map((item, index) => ({
        id: index + 1,
        img: item.img,
        title: item.title,
        borderColor: item.borderColor,
        description:
            'Learn to design hybrid networks using protocols like BGP, OSPF, and VXLAN, with secure connectivity through Direct Connect, ExpressRoute, and VPN Gateway. Master network optimization, redundancy, and automation for scalable, high-performance infrastructures, leveraging cloud services like AWS VPC, Azure Virtual Network, and Google Cloud VPC.'
    }));

    return (
        <Grid
            sx={{
                background: `${bg}33`,
                padding: {
                    lg: "60px 42px 80px 37px",
                    md: "60px 42px 80px 37px",
                    sm: "52px 42px 52px 37px",
                    xs: "52px 24px 52px 24px"
                },
                borderRadius: {
                    lg: "55px",
                    md: "55px",
                    sm: "30px",
                    xs: "30px"
                },
                marginTop: "24px"
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        lg: "35.49px",
                        md: "30.49px",
                        sm: "28px",
                        xs: "28px"
                    },
                    fontFamily: "var(--English-font)",
                }}
            >
                {t("academics.ExploreOur")}
            </Typography>
            <Grid container spacing={2.5} mt="24px">
                {explore.map((item, index) => (
                    <Grid item lg={4} md={6} sm={6} xs={12} key={item.id}>
                        <motion.div
                            initial={{ filter: "blur(40px)" }}
                            whileInView={{ filter: "blur(0px)" }}
                            transition={{ duration: 0.5 }}
                        >
                            <Box
                                sx={{
                                    background: "#FFFFFF",
                                    padding: "24px 24px 60px 24px",
                                    borderRadius: "24px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "28px",
                                    transition: "all 0.5s",
                                    height: "100%",
                                    ':hover': {
                                        background: `${bg}`,
                                        color: itemid !== 5 ? "white !important" : "unset"
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "16px",
                                        minHeight: "100px",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        loading="lazy"
                                        sx={{
                                            maxWidth: "70px",
                                            border: `6px solid ${item.borderColor}`,
                                            borderRadius: "10px",
                                        }}
                                        src={item.img}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: "var(--English-font)",
                                            fontSize: {
                                                lg: "28px",
                                                md: "28px",
                                                sm: "28px",
                                                xs: "22px",
                                            },
                                            maxWidth: itemid !== 5 ? "205px" : "100%",
                                            lineHeight: "32px",
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: "28px" }}>
                                    <Typography
                                        sx={{
                                            mb: 2,
                                            fontFamily: "var(--English-font)",
                                            fontSize: {
                                                lg: "17.75px",
                                                md: "15.75px",
                                                sm: "14px",
                                                xs: "14px"
                                            },
                                            lineHeight: {
                                                lg: "28px",
                                                md: "28px",
                                                sm: "18px",
                                                xs: "18px"
                                            },
                                        }}>
                                        {item.description}
                                    </Typography>
                                    <Box sx={{ mt: "auto" }}>
                                        <Button onClick={() => setEnroll(true)} sx={btnStyle}>{t("academics.enrollNow")}</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
