import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import back from "../../assets/sectionsImages/academics/first.svg"
import front from "../../assets/sectionsImages/academics/second.svg"
import firstMobile from "../../assets/sectionsImages/academics/firstMobile.svg"
import secondMobile from "../../assets/sectionsImages/academics/secondMobile.svg"
import { motion } from "framer-motion"
import Bracket from "../../assets/sectionsImages/academics/academicsBracket.";
import { powerOf, pageStyle, textStyle, cardTitle, bracketStyle, cardStyle, cardStyle2 } from "./whichcourseStyle";
export default function WhichCourse() {

  const [cardAnimationStart, setCardAnimationStart] = useState(false)
  const [test, setTest] = useState(false)
  const theme = useTheme()
  const xl = useMediaQuery(theme.breakpoints.only('xl'));
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
  const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));
  const spesificTabScreen = useMediaQuery(theme.breakpoints.down("685"));
  const spesifico = useMediaQuery(theme.breakpoints.down("600"));
  const spesific2 = useMediaQuery(theme.breakpoints.down("500"));
  const spesificSmallScreen = useMediaQuery(theme.breakpoints.down("380"));

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false); 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); 
        } else {
          setInView(false); 
        }
      },
      {
        threshold: 0.1, 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <motion.div className="root-container"
        ref={sectionRef}

        style={{ background: "#051A2F", height: "100%" }}
        onViewportLeave={() => {
          setCardAnimationStart(false);
        }}
      >
        <Box

          onClick={() => {
            if (cardAnimationStart === true) {
              setTest(true)
            }
          }
          }
          sx={pageStyle(test)}
        >
          <Typography
            sx={textStyle(test)}
          >
            The power to
          </Typography>
          <Box>
            <motion.div
              animate={cardAnimationStart === true ? { y: [200, 0], opacity: [0, 1] } : { opacity: 0 }}
              transition={{
                duration: cardAnimationStart ? 0.8 : 0.2,
                ease: "linear",
                delay: cardAnimationStart ? 0.5 : 0.1,
              }}
              style={{
                display: test ? 'none' : 'unset',
                position: "absolute",
                bottom: xl || lg || md ? -55 : sm ? -25 : xs ? -30 : '',
                translateX: xl || lg || md ? "5.6%" : sm ? spesificTabScreen ? "-5%" : "3%" : xs ? spesificSmallScreen ? "-39%" : spesific2 ? "-45%" : spesifico ? "-37%" : '' : '',
                zIndex: 0,
                width: xl ? "50%" : lg ? "50%" : md ? "50%" : sm ? "50%" : spesificSmallScreen ? "100%" : "100%",
                height: xl ? "310px" : lg ? "310px" : md ? "300px" : sm ? "200px" : "50%",
              }}
            >
              <Box
                component="img"
                src={xl || lg || md || sm ? back : firstMobile}
                sx={{
                  overflow: "hidden",
                  maxWidth: "1400px",
                  width: "100%",
                  height: "100%",

                }}
              >
              </Box>

            </motion.div>
          </Box>
          <Grid container
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: spesificSmallScreen ? "end" : "center",
              alignItems: "center",
              paddingTop: {
                lg: test ? "52px" : "300px",
                md: test ? "52px" : "220px",
                sm: test ? "52px" : "230px",
                xs: test ? "52px" : "200px"
              },
              paddingBottom: {
                lg: test ? "20px" : "350px",
                md: test ? "20px" : "310px",
                sm: test ? "20px" : "270px",
                xs: test ? "0px" : "240px"
              },
            }}
          >
            {powerOf.map((item, index) => (
              <Grid key={index} item lg={test ? index <= 1 ? 6 : 4 : undefined} md={test ? index <= 1 ? 6 : 4 : undefined}
                sm={test ? index <= 1 ? 6 : 6 : undefined}
                xs={12}
                sx={{
                  ...cardStyle2(test, index)
                }}
              >
                <motion.div

                  animate={{
                    y: inView ? [-300, 0] : [-300, -300],
                    rotate: inView ? (test ? (xs ? item.rotateXs : "-4deg") : item.rotate) : item.rotate,
                    opacity: inView ? [0, 1] : [0, 0], 
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "linear",
                    delay: !test ? (index === 0 ? 0.8 : index * 2) : (index === 0 ? 0.1 : index * 0.2),
                  }}
                  onUpdate={({ y }) => {
                    if (index === 4 && y === 0) {
                      setCardAnimationStart(true);
                    }
                  }}
                  style={{
                    ...cardStyle(test, is15Inch, is14Inch, item, lg, md, sm, xs),
                  }}
                >
                  <Box
                    sx={{
                      ...bracketStyle(test, index)

                    }}
                  >
                    <Bracket index={index} />
                  </Box>
                  <Typography
                    sx={{
                      ...cardTitle(test, index)
                    }}
                  >
                    {item.title}
                    {Array.from({ length: 6 }).map((_, idx) => (
                      idx > 0 && (
                        <Box
                          key={idx}
                          sx={{
                            position: "absolute",
                            top: `${idx * 1.4}em`,
                            left: 0,
                            right: 0,
                            borderBottom: `1px solid ${index === 2 ? "#FA6423" : index === 3 ? "#FA6423" : "#FAFAFA"}`,
                            margin: {
                              lg: test ? "0px 28px 0px 28px" : "0px 32px 0px 32px",
                              md: "0px 37px 0px 37px",
                              sm: "0px 37px 0px 37px",
                              xs: "0px 22px 0px 22px"
                            }
                          }}
                        />
                      )
                    ))}
                  </Typography>
                </motion.div>
              </Grid>
            ))}
          </Grid>
          <motion.div
            animate={{ y: cardAnimationStart === true ? [200, 0] : [200], opacity: cardAnimationStart === true ? [0, 1] : 0 }}

            transition={{
              duration: cardAnimationStart ? 0.8 : 0.5,
              ease: "linear",
              delay: cardAnimationStart ? 0.5 : 0,
            }}
            style={{
              position: test ? "relative" : "absolute",
              right: 20,
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "start",
              bottom: !test ?
                xl ? 48 :
                  lg ? 48 :
                    md ? 48 :
                      sm ? 15 :
                        xs ? 15 : 48
                : 0,

            }}
          >
            <Typography
              sx={{
                display: {
                  justifyContent: "end",
                  lg: "flex",
                  md: "flex",
                  sm: "flex",
                  xs: "flex"
                },
                fontSize: {
                  lg: "67px",
                  md: "48px",
                  sm: "38px",
                  xs: "38px"
                },
                color: "#FFFFFF",
                width: "100%",
                lineHeight: {
                  lg: "75px",
                  md: "75px",
                  sm: "40px",
                  xs: "40px"
                },
                fontFamily: "var(--English-font-semibold)",
              }}
            >
              {xl || lg || md || sm ? <>is now in your hand</> : <>is <br /> now in your<br />hand</>}
            </Typography>

          </motion.div>
          <Box>
            <motion.div
              animate={cardAnimationStart === true ? { y: [200, 0], opacity: [0, 1] } : { opacity: 0 }}
              transition={{
                duration: cardAnimationStart ? 0.8 : 0.2,
                ease: "linear",
                delay: cardAnimationStart ? 0.5 : 0.1,
              }}
              style={{
                display: test ? 'none' : 'unset',
                position: "absolute",
                bottom: xl || lg || md ? -150 : sm ? -130 : -80,
                translateX: xl || lg || md ? "10%" : sm ? spesificTabScreen ? "-4%" : "4%" : xs ? spesificSmallScreen ? "-30%" : spesific2 ? "-38%" : spesifico ? "-30%" : "-38%" : "",
                zIndex: 4,
                width: xl ? "50%" : lg ? "50%" : md ? "50%" : sm ? "50%" : spesificSmallScreen ? "100%" : "100%",
                height: xl ? "400px" : lg ? "400px" : md ? "400px" : sm ? "300px" : "55%",
              }}
            >
              <Box
                component="img"
                src={xl || lg || md || sm ? front : secondMobile}
                sx={{
                  overflow: "hidden",
                  maxWidth: "1400px",
                  width: "100%",
                  height: "100%",
                }}
              >
              </Box>

            </motion.div>
          </Box>
        </Box>
      </motion.div>

    </>
  )
}
