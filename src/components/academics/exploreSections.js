import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useMemo } from "react";
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
    fontFamily: "var(--English-font), Arial, sans-serif",

};
function ExploreLearning({ hoveredcardid, sethoveredcardid, bg, itemid, setEnroll }) {
    const { t } = useTranslation()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const contentMap = useMemo(() => ({
        1: [
            { id: 0, img: uiux, title: t("academics.UI/UX"), borderColor: "#E9FA50", description: t("academics.uiUxDescription") },
            { id: 1, img: logoDesign, title: t("academics.LogoDesign"), borderColor: "#1CB786", description: t("academics.LogoDesignDescription") },
            { id: 2, img: branding, title: t("academics.BrandingDesign"), borderColor: "#FA6423", description: t("academics.brandingDescription") }
        ],
        3: [
            { img: fullStack, title: t("academics.FullstackDevelopment"), borderColor: "#E9FA50", description: t("academics.FullstackDescription") },
            { img: front, title: t("academics.FrontEndDevelopment"), borderColor: "#9D89FC", description: t("academics.FrontDescription") },
            { img: back, title: t("academics.BackEndDevelopment"), borderColor: "#1CB786", description: t("academics.BackDescription") }
        ],
        5: [
            { img: general, title: t("academics.GeneralNetwork"), borderColor: "#1CB786", description: t("academics.NetworkDescription") },
            { img: automation, title: t("academics.Automation"), borderColor: "#E9FA50", description: t("academics.automationDescription") },
            { img: security, title: t("academics.Security"), borderColor: "#FA6423", description: t("academics.securityDescription") }
        ],
        default: [
            { img: itAdmin, title: t("academics.ITAdministration"), borderColor: "#1CB786", description: t("academics.itDescription") },
            { img: server, title: t("academics.Server"), borderColor: "#E9FA50", description: t("academics.serverDescription") },
            { img: cloud, title: t("academics.Virtualization"), borderColor: "#FA6423", description: t("academics.cloudDescription") }
        ]
    }), [t]);


    const selectedContent = contentMap[itemid] || contentMap.default;

    const explore = useMemo(() => {
        return selectedContent.map((item, index) => ({
            id: index + 1,
            img: item.img,
            title: item.title,
            borderColor: item.borderColor,
            description: item.description

        }));
    }, [itemid, t]);

    return (
        <Grid
            sx={{
                background: `${bg}33`,
                padding: {
                    md: "60px 42px 80px 37px",
                    sm: "52px 42px 52px 37px",
                    xs: "52px 24px 52px 24px"
                },
                borderRadius: {
                    md: "55px",
                    sm: "30px",
                    xs: "30px"
                },
                marginTop: "24px",
            }}
        >
            <Typography
                sx={{
                    fontSize: {
                        lg: "35.49px",
                        md: "30.49px",
                        sm: "28px",
                        xs: "24px"
                    },
                    fontFamily: "var(--English-font), Arial, sans-serif",
                }}
            >
                {t("academics.ExploreOur")}
            </Typography>
            <Grid container spacing={2.5} mt="24px">
                {explore.map((item, index) => (
                    <Grid item lg={4} md={6} sm={6} xs={12} key={item.id} >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            style={{ height: '100%' }}
                        >
                            <Box
                                sx={{
                                    background: hoveredcardid === index ? `${bg}` : "#FFFFFF",
                                    color: hoveredcardid === index && itemid !== 5 ? "white !important" : "unset",
                                    padding: {
                                        sm: "24px 24px 60px 24px",
                                        xs: "24px 18px 60px 18px"
                                    },
                                    borderRadius: "24px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: {
                                        sm: "28px",
                                        xs: "14px"
                                    },
                                    transition: "all 0.5s",
                                    height: "100%",
                                }}
                                onMouseEnter={() => !isMobile && sethoveredcardid(index)}
                                onMouseLeave={() => !isMobile && sethoveredcardid(null)}
                                onTouchStart={isMobile ? () => sethoveredcardid(index) : undefined}
                                onTouchEnd={isMobile ? () => sethoveredcardid(null) : undefined}
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
                                            maxWidth: { md: "70px", sm: "60px", xs: "60px" },
                                            minWidth: { md: "70px", sm: "60px", xs: "60px" },
                                            minHeight: { md: "70px", sm: "60px", xs: "60px" },
                                            border: `6px solid ${item.borderColor}`,
                                            borderRadius: "10px",
                                        }}
                                        src={item.img}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: "var(--English-font), Arial, sans-serif",
                                            fontSize: { lg: "28px", md: "26px", sm: "22px", xs: "18px" },
                                            maxWidth: { sm: itemid !== 5 && itemid !== 7 ? "200px" : "100%", xs: "100%" },
                                            lineHeight: { sm: "32px", xs: "24px" },
                                            color: hoveredcardid === index && itemid !== 5 ? "white !important" : "#051A2F",
                                            wordBreak: "break-word"
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, gap: "28px" }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "var(--English-font), Arial, sans-serif",
                                            fontWeight: "300",
                                            fontSize: { xl: "20px", lg: "17.75px", md: "15.75px", sm: "14px", xs: "14px" },
                                            lineHeight: { lg: "28px", md: "28px", sm: "18px", xs: "18px" },
                                            color: hoveredcardid === index && itemid !== 5 ? "white !important" : "#051A2F",
                                            flexGrow: 1,
                                            display: "flex",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                    <Box sx={{ mt: "auto" }}>
                                        <Button onClick={() => setEnroll(true)} sx={btnStyle}>
                                            {t("academics.enrollNow")}
                                        </Button>
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
export default ExploreLearning