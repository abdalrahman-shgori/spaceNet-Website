import React from 'react';
import { Box, Typography, Grid, CardMedia, useMediaQuery, useTheme } from '@mui/material';
import techImg from "../../../assets/sectionsImages/technologiesImage.svg"
import meetImg from "../../../assets/sectionsImages/meetingImg.svg"
import lang1 from "../../../assets/sectionsImages/programmingLang/programLang.svg"

const programmingLang = [
  { id: 1, img: lang1 },
  { id: 2, img: lang1 },
  { id: 3, img: lang1 },
  { id: 4, img: lang1 },
  { id: 5, img: lang1 },
  { id: 6, img: lang1 },
  { id: 7, img: lang1 },
  { id: 8, img: lang1 },
]
const OurTechnologies = () => {
  const theme = useTheme()
  const isXsmallScreen = useMediaQuery(theme.breakpoints.down(322))
  return (
    <>
      <Box
        sx={{
          padding: {
            lg: "47px 75px 149px 75px",
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
          <Grid lg={8.5} md={8} sm={8}
            sx={{
              background: "#9D89FC",
              borderRadius: "22px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: "34px",
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
                color:"#051A2F"
              }}
            >
              Our team makes use of the newest technology and finest development processes.
            </Typography>
          </Grid>
          <Grid lg={3.5} md={4} sm={4}
            sx={{
              paddingLeft: "20px"
            }}
          >
            <Box
              component="img"
              src={techImg}
              sx={{
                borderRadius: "23px",
                height: "100%",
                width: "100%",
                objectFit: "cover"

              }}
            />
          </Grid>
        </Grid>




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
              {programmingLang.map((item, index) => (
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
              paddingLeft: "20px"
            }}
          >

            <Box
              component="img"
              src={meetImg}
              sx={{
                borderRadius: "23px",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />


          </Grid>
        </Grid>


      </Box>

      {/* //sm xs  */}

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
          <Grid sm={12} xs={12}
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
                fontFamily: "var(--English-font)",
                padding: {
                  xs: "56px 26px 56px 26px"
                },
                textAlign: "center",
                color:"#051A2F"

              }}
            >
              Our team makes use of the newest technology and finest development processes.
            </Typography>
          </Grid>

        </Grid>




        <Grid container
          sx={{
            marginTop: {
              xs: "15px"
            }
          }}
        >
          <Grid xs={6}
            sx={{
              paddingRight: "10px"
            }}
          >
            <Box
              component="img"
              src={techImg}
              sx={{
                borderRadius: "15px",
                height: "100%",
                width: "100%",
                objectFit: "cover"
              }}
            />
          </Grid>
          <Grid item xs={6}
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
              {programmingLang.map((item, index) => (
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
                    src={item.img}
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
          <Grid item xs={12}
          >
            <Box
              component="img"
              src={meetImg}
              sx={{
                borderRadius: "23px",
                height: "145px",
                width: "100%",
                objectFit: "cover",
                marginTop: "10px"

              }}
            />
          </Grid>
        </Grid>


      </Box>
    </>
  );
};

export default OurTechnologies;
