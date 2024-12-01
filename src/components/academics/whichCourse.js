import React, { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import hand from "../../assets/sectionsImages/academics/hand.svg"
import hand2 from "../../assets/sectionsImages/academics/hand2.svg"
import { motion } from "framer-motion"
import Bracket from "../../assets/sectionsImages/academics/academicsBracket.";
import oneFinger from "../../assets/sectionsImages/academics/oneFinger.svg";

export default function WhichCourse() {
  const powerOf = [
    {
      id: 0,
      title: 'Achieve expert software development skills.',
      bg: "#9D89FC",
      rotate: "-28deg",
      rotateXs: "6deg"
    },
    {
      id: 1,
      title: 'Create stunning digital designs.',
      bg: "#1CB786",
      rotate: "-20.76deg"
      ,
      rotateXs: "-6deg"
    },
    {
      id: 2,
      title: 'Build secure networking infrastructures.',
      bg: "#F4F4F4",
      rotate: "-15.73deg"
      ,
      rotateXs: "6deg"
    },
    {
      id: 3,
      title: 'Innovate with real-world coding expertise.',
      bg: "#E9FA50",
      rotate: "-10.57deg"
      ,
      rotateXs: "-6deg"
    },
    {
      id: 4,
      title: 'Elevate yourself in any area of technology.',
      bg: "#FA6423",
      rotate: "-2.7deg"
      ,
      rotateXs: "6deg"

    },
  ]
  const [cardAnimationStart, setCardAnimationStart] = useState(false)
  console.log(cardAnimationStart)
  const [test, setTest] = useState(false)
  const theme = useTheme()
  const xl = useMediaQuery(theme.breakpoints.only('xl'));
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const is14Inch = useMediaQuery(theme.breakpoints.down("1223"));
  const is15Inch = useMediaQuery(theme.breakpoints.down("1390"));
  const spesificSmallScreen = useMediaQuery(theme.breakpoints.down("377"));
  const spesificSmallScreen2 = useMediaQuery(theme.breakpoints.down("483"));
  const spesificTabScreen = useMediaQuery(theme.breakpoints.down("765"));
  const ExtraSmallScreen = useMediaQuery(theme.breakpoints.down("345"));

  const pageStyle = {
    position: "relative",
    padding: {
      lg: "82px 56px 48px 56px",
      md: "82px 20px 48px 20px",
      sm: "82px 20px 48px 20px",
      xs: test ? "70px 20px 20px 20px" : "70px 20px 116px 20px"
    },

    gap: {
      lg: "214px",
      md: "214px",
      sm: "19px",
      xs: "193px"
    },
    marginTop: {
      lg: "100px",
      md: "100px",
      sm: "70px",
      xs: "70px"
    },
    maxWidth: "1440px",
    margin: "0 auto",
  }
  const textStyle = {
    fontSize: {
      lg: "62px",
      md: "62px",
      sm: "30px",
      xs: "30px"
    },
    color: "#FFFFFF",
    maxWidth: {
      lg: "885px",
      md: "885px",
      sm: "329px",
      xs: "329px"
    },
    width: "100%",

    lineHeight: {
      lg: "75px",
      md: "75px",
      sm: "35px",
      xs: "35px"
    },
    fontFamily: "var(--English-font-semibold)"

  }
  return (
    <>
      <motion.div className="root-container"
        style={{ background: "#051A2F", height: "100%" }}
        onViewportLeave={() => {
          setCardAnimationStart(false);
          // setTest(false);
        }}
      >
        <Box
          onClick={() => {
            setCardAnimationStart(false)
            setTest(true)
          }
          }
          sx={pageStyle}
        >
          <Typography
            sx={textStyle}
          >
            The power to
          </Typography>

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
              <Grid item lg={test && index <= 1 ? 6 : 4} md={test && index <= 1 ? 6 : 4}
                sm={test && index <= 1 ? 6 : 6}
                xs={12}
                sx={{
                  position: test ? "relative" : "absolute",
                  zIndex: 2,
                  justifyContent: test &&
                  {
                    lg: index === 0 ? "end" : index === 1 ? "start" : index === 2 ? "end" : index === 3 ? "center" : index === 4 ? 'start' : '',
                    md: index === 0 ? "end" : index === 1 ? "start" : index === 2 ? "end" : index === 3 ? "center" : index === 4 ? 'start' : '',
                    sm: index === 0 ? "end" : index === 1 ? "start" : "center",
                    xs: index % 2 === 0 ? "end" : "start",
                  },
                  display: "flex",

                  paddingRight: {
                    lg: test && index === 0 && "67px",
                    md: test && index === 0 && "67px",
                    sm: test && index === 0 && "20px",
                    xs: test ? "35px" : 'unset'
                  },

                  paddingLeft:
                  {
                    lg: "unset",
                    md: "unset",
                    sm: "unset",
                    xs: test ? "35px" : 'unset'
                  },
                  marginRight: !test ?
                    {
                      lg: index === 3 ? "50px" :
                        index === 2 ? "90px" :
                          index === 1 ? "130px" :
                            index === 0 && "180px",
                      //MD
                      md: index === 3 ? "40px" :
                        index === 2 ? "65px" :
                          index === 1 ? "95px" :
                            index === 0 && "140px",
                      //SM
                      sm: index === 3 ? "40px" :
                        index === 2 ? "65px" :
                          index === 1 ? "95px" :
                            index === 0 && "140px",
                      //XS
                      xs:
                        index === 3 ? "10px" :
                          index === 2 ? "20px" :
                            index === 1 ? "35px" :
                              index === 0 ? "50px" : "",
                    } : 'unset',

                  marginTop: test ? {
                    lg: index > 1 && "-100px",
                    md: index > 1 && "-100px",
                    sm: index > 1 && "-60px",
                    xs: index > 0 && "-90px"
                  } : {
                    lg: index === 3 ? "-50px" :
                      index === 2 ? "-70px" :
                        index === 1 ? '-90px' :
                          index === 0 && "-106px",

                    //MD
                    md: index === 3 ? "-30px" :
                      index === 2 ? "-50px" :
                        index === 1 ? '-60px' :
                          index === 0 && "-75px",
                    //SM
                    sm: index === 3 ? "-30px" :
                      index === 2 ? "-50px" :
                        index === 1 ? '-60px' :
                          index === 0 && "-75px",
                    //XS
                    xs: index === 3 ? "-25px" :
                      index === 2 ? "-34px" :
                        index === 1 ? '-45px' :
                          index === 0 && "-55px",
                  },

                  marginLeft: !test && {
                    lg: "120px",
                    md: "120px",
                    sm: "120px",
                    xs: "unset"
                  },
                  transition: "justifyContent 10s"
                }}
              >
                <motion.div
                  whileInView={{
                    y: [-300, 0],
                    rotate: test ? (xs ? item.rotateXs : "-4deg") : item.rotate,
                    opacity: [0, 1],
                  }}
                  exit={{ y: [0, -300], rotate: xs ? item.rotateXs : item.rotate, opacity: [1, 0] }}
                  transition={{
                    duration: 0.1,
                    ease: "linear",
                    delay: !test && index * 2
                  }}
                  onAnimationStart={() => !test && setCardAnimationStart(true)}

                  onClick={() => setTest(true)}

                  style={{
                    background: item.bg,
                    maxWidth:
                      lg ? is14Inch ? "340px" : is15Inch ? "350px" : test ? "301px" : "384px" :
                        md ? "280px" :
                          sm ? test ? "250px" : "280px" :
                            xs ? test ? "216px" : "216px" :
                              "384px",
                    width: "100%",
                    maxHeight:
                      lg ? is14Inch ? "340px" : is15Inch ? "350px" : test ? "305px" : "384px" :
                        md ? "300px" :
                          sm ? "300px" :
                            xs ? test ? "220px" : "220px" :
                              "384px",
                    minHeight: test && lg ? is14Inch ? "340px" : is15Inch ? "350px" : test ? "305px" : "384px" :
                      md ? "300px" :
                        sm ? test ? "250px" : "300px" :
                          xs ? test ? "220px" : "220px" :
                            "384px",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "19px",
                    transform: `rotate(${item.rotate})`,
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: {
                        lg: test ? 20 : 30,
                        md: 30,
                        sm: 30,
                        xs: 0
                      },
                      right: {
                        lg: test ? 10 : 20,
                        md: 10,
                        sm: 10,
                        xs: -12
                      },
                      scale: {
                        lg: test ? "0.8" : "1",
                        md: test ? "0.8" : "0.8",
                        sm: test ? "0.8" : "0.8",
                        xs: "0.5"
                      },
                      transform: "rotate(3deg)",

                    }}
                  >
                    <Bracket index={index} />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: test ? "23.32px" : "30px",
                        md: test ? "23.32px" : "24px",
                        sm: test ? "23.32px" : "24px",
                        xs: test ? "14.63px" : "16px"
                      },
                      padding: {
                        lg: test ? "0px 28px 0px 28px" : "0px 32px 0px 32px",
                        md: "0px 37px 0px 37px",
                        sm: "0px 37px 0px 37px",
                        xs: "0px 22px 0px 22px"
                      },
                      fontFamily: "var(--English-font)",
                      color: index === 2 ? "#FA6423" : index === 3 ? "#FA6423" : "#FFFFFF",
                      position: "relative",
                      top: {
                        lg: test ? "-20px" : "-20px",
                        md: test ? "0px" : "unset",
                        sm: test ? "0px" : "unset",
                        xs: test ? "20px" : "10px"
                      },
                      lineHeight: {
                        lg: test ? "34px" : "44px",
                        md: test ? "34px" : "34px",
                        sm: test ? "34px" : "34px",
                        xs: test ? "21px" : "24px"
                      },
                      minHeight: "140px",
                      maxHeight: "140px"
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
                            borderBottom: `1px solid ${index === 2 ? "#FA6423" : index === 3 ? "#FA6423" : "#FAFAFA"}`,  // Underline style
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
            animate={cardAnimationStart ? { y: [200, 0], opacity: [0, 1] } : {}}

            transition={{
              duration: cardAnimationStart ? 0.8 : 0.5,
              ease: "linear",
              delay: cardAnimationStart ? 8.5 : 0.1,
            }}
            style={{
              position: test ? "relative" : "absolute",
              right: 20,
              display: "flex",
              justifyContent: "flex-end",
              textAlign: "start",
              bottom: !test ? 48 : 0,

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
                  sm: "35px",
                  xs: "40px"
                },
                fontFamily: "var(--English-font-semibold)",
              }}
            >
              {xl || lg || md ? <>is now in your hand</> : <>is <br /> now in your<br />hand</>}
            </Typography>

          </motion.div>
          <Box>
            <motion.div
              animate={cardAnimationStart ? { y: [200, 0], opacity: [0, 1] } : test ? { y: [0, 200], opacity: 0 } : {}}
              transition={{
                duration: cardAnimationStart ? 0.8 : 0.2,
                ease: "linear",
                delay: cardAnimationStart ? 8.5 : 0.1,
              }}
              style={{
                position: "absolute",
                bottom: -10,
                left:
                  xl ? 90 :
                    lg ? 90 :
                      md ? 30 :
                        sm ? spesificTabScreen ? 15 : 50 :
                          xs && ExtraSmallScreen ? -30 : spesificSmallScreen ? 0 : spesificSmallScreen2 ? -20 : 0,
                zIndex: 0,
                width: xl ? "50%" : lg ? "50%" : md ? "50%" : sm ? "50%" : spesificSmallScreen ? "60%" : "50%",
                height: xl ? "300px" : lg ? "300px" : md ? "300px" : sm ? "250px" : "300px",
              }}
            >
              <Box
                component="img"
                src={xl || lg || md || sm ? hand : hand2}
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