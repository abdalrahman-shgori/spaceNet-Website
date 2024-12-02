import React, { useState } from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import hand from "../../assets/sectionsImages/academics/hand.svg"
import hand2 from "../../assets/sectionsImages/academics/hand2.svg"
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
  const spesificSmallScreen = useMediaQuery(theme.breakpoints.down("377"));
  const spesificSmallScreen2 = useMediaQuery(theme.breakpoints.down("483"));
  const spesificTabScreen = useMediaQuery(theme.breakpoints.down("765"));
  const ExtraSmallScreen = useMediaQuery(theme.breakpoints.down("345"));

  return (
    <>
      <motion.div className="root-container"
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
                  whileInView={{
                    y: [-300, 0],
                    rotate: test ? (xs ? item.rotateXs : "-4deg") : item.rotate,
                    opacity: [0, 1],
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "linear",
                    delay: !test ? index === 0 ? 0.8 : !test ? index * 2 : undefined : undefined
                  }}
                  onUpdate={({ y }) => {
                    if (index === 4 && y === 0) {
                      setCardAnimationStart(true);
                    }
                  }}
                  style={{
                    ...cardStyle(test, is15Inch, is14Inch, item, lg, md, sm, xs)
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
                bottom: -10,
                left:
                  xl ? 90 :
                    lg ? 90 :
                      md ? 30 :
                        sm ? spesificTabScreen ? 15 : 50 :
                          xs ? ExtraSmallScreen ? -30 : spesificSmallScreen ? 0 : spesificSmallScreen2 ? -20 : 0 : 0,
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