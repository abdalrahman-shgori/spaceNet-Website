import React, { useEffect, useRef, useState } from "react";
import Vector1Yellow from "../../assets/images/Vector1Yellow.svg";
import vector1White from "../../assets/images/Vector1White.svg";
import Vector2Yellow from "../../assets/images/Vector2Yellow.svg";
import vector2White from "../../assets/images/Vector2White.svg";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import spaceNetLogo from "../../assets/spacenetLogo/spaceNetLogoAbout.svg";
import spaceNetLogoWhite from "../../assets/spacenetLogo/spaceNetLogoWhite.svg";
import { motion } from "framer-motion";
import './about.css'
export default function AboutSpaceNet({ hoveredService,hoveredServiceDescription,capture  }) {
    const theme = useTheme();
    const ThemeCheck = theme.palette.mode;
    const paragraphRef = useRef(null);
useEffect(()=>{
    const paragraph = paragraphRef.current;

    if(capture || !capture){
        paragraph.scrollTop = 0;
    }
})
    useEffect(() => {
        const paragraph = paragraphRef.current;

        const scrollContent = () => {
            if (paragraph) {
                paragraph.scrollTop += 1;

                if (paragraph.scrollTop >= paragraph.scrollHeight / 2) {
                    paragraph.scrollTop = 0;
                }
               
            }
        };

        const intervalId = setInterval(scrollContent, 50);

        return () => clearInterval(intervalId);
    }, []);
    const [initialAnimation, setInitialAnimation] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setInitialAnimation(false);
      }, 2000);
  
      return () => clearTimeout(timer); 
    }, []);
    return (
        <>
            <Grid container
                sx={{
                    marginTop: {
                        lg: "unset",
                        md: "unset",
                        sm: "unset",
                        xs: "80px"
                    },
                }}
            >
                <Grid item xs={12} lg={6}>
                <motion.div
               animate={
                initialAnimation
                  ? {  y: [0, 120, 0], x: [0, 120, 0] } 
                  : capture
                  ? { y: [0, 120, 0], x: [0, 120, 0] } 
                  : { y: 0, x: 0 }
              }       
              transition={{ duration:initialAnimation ? 0.4 : 0.5 , delay:initialAnimation ? 0.5 : 0 }} 
>
                        <Box
                            component='img'
                            src={theme.palette.mode === 'light' ? vector1White : Vector1Yellow}
                            sx={{
                                maxWidth: "100%",
                                width: {
                                    lg: "220px",
                                    md: "106px",
                                    sm: "106px",
                                    xs: "106px"
                                },
                                position: "absolute",
                               
                            }}
                        />
                    </motion.div>
                </Grid>
                <Grid item xs={12}>
                    <motion.div
                     initial={{ y: 0 }} 
                     animate={ initialAnimation ? {scale:[0,1]} : capture ? { scale:[0,1] } : {scale:1}} 
                     transition={{ duration:initialAnimation ? 0.5 : 0.3 , delay:initialAnimation ? 0.6 : 0.2 }} 

                    >
                           <Box
                           
                        sx={{
                            paddingLeft: {
                                lg: "55px",
                                md: "30px",
                                sm: "30px",
                                xs: "30px"
                            },
                            width: "100%",
                            position: "relative",
                            top: {
                                lg: "40px",
                                md: "20px",
                                sm: "20px",
                                xs: "20px"
                            },
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            paddingRight: {
                                lg: "140px",
                                md: "30px",
                                sm: "30px",
                                xs: "30px"
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "44px",
                                    md: "44px",
                                    sm: "32px",
                                    xs: "32px"
                                },
                                fontFamily: "var(--English-font-Extralight)",
                            }}
                        >
                            {hoveredService || "About"}

                        </Typography>
                        <Box
                            component="img"
                            src={ThemeCheck === "light" ? spaceNetLogoWhite : spaceNetLogo}
                            alt="SpaceNet Logo"
                            sx={{
                                width: { lg: "287px", md: "287px", sm: "179px", xs: "179px" },
                                marginBottom: "20px",
                                paddingRight: "20px",
                            }}
                        />
                        <Typography
                            ref={paragraphRef}
                            sx={{
                                fontSize: {
                                    lg: "32px",
                                    md: "20px",
                                    sm: "15px",
                                    xs: "15px"
                                },
                                fontFamily: "var(--English-font)",
                                overflow: "auto",
                                maxHeight: {
                                    lg: "270px",
                                    md: "270px",
                                    sm: "150px",
                                    xs: "180px"
                                },
                                paddingRight: "10px",
                                paddingTop: "10px",
                                position: "relative",
                                '&::-webkit-scrollbar': { display: 'none' },
                                scrollbarWidth: "0px",
                                display: "flex",
                                flexDirection: "column",
                                textAlign:"justify"
                            }}
                        >
                            {hoveredServiceDescription || <>  <span className="scrolling-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took Lorem Ipsum has Lorem Ipsum has Lorem Ipsum has 
                                ptext of the printing and typesetting.
                            </span>
                            <span className="scrolling-content">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took Lorem Ipsum has Lorem Ipsum has Lorem Ipsum has 
                                ptext of the printing and typesetting.
                            </span></> }
                          
                        </Typography>
                    </Box>
                    </motion.div>
                 
                </Grid>
                <Grid item xs={12}>
                <motion.div
    initial={{ y: 0 }} 
    animate={initialAnimation
        ? { y: [0, -120, 0] , x: [0, -120, 0] } :capture ? { y: [0, -120, 0] , x: [0, -120, 0] } : { y: 0 , x:0 }} 
    transition={{ duration:initialAnimation ? 0.4 : 0.5 , delay:initialAnimation ? 0.5 : 0 }} 
>
                        <Box
                            component='img'
                            src={theme.palette.mode === 'light' ? vector2White : Vector2Yellow}
                            sx={{
                                float: "right",
                                paddingRight: {
                                    lg: "80px",
                                    md: "0px",
                                    sm: "0px",
                                    xs: "0px"
                                },
                                position: "absolute",
                                bottom: {
                                    lg: "-90px",
                                    md: "-40px",
                                    sm: "-40px",
                                    xs: "-40px"
                                },
                                right: "0",
                                maxWidth: "100%",
                                width: {
                                    lg: "280px",
                                    md: "106px",
                                    sm: "106px",
                                    xs: "106px"
                                },
                            }}
                        />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}
