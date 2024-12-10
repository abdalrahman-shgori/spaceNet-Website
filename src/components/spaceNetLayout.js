import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import logo from "../assets/sectionsImages/sapceLogo.svg";
import { motion } from "framer-motion"
import ArrowWight from "../assets/sectionsImages/spacenetLayoutArrow.svg";
import spaceNet from "../assets/spacenetLogo/spaceNetLogoWhite.svg"
import { useNavigate } from 'react-router-dom';
const SpaceNetLayout = ({setOpen}) => {
  const navigate=useNavigate()
  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'Blog & News', href: '/blog' }, 
    { name: 'Contact Us',  }
  ];

  const servicesLinks = [
    { name: 'Academics', href: '/academics' },
    { name: 'Core It', href: '/core-it' },
    { name: 'Software', href: '/software' },
    { name: 'Design & Branding', href: '/design-branding' }
  ];

  const handleClick=(href)=>{
    navigate(href)
  }
  return (
    <>
      <Box
        className="root-container"
        sx={{ backgroundColor: '#051A2F', }}
      >
        <Box sx={{ color: 'white', }}>
          <Box display="flex" justifyContent="flex-start" alignItems="center"
            sx={{
              padding: {
                lg: '70px 75px 0px 75px',
                md: '70px 75px 0px 75px',
                sm: '70px 20px 0px 20px',
                xs: '78px 0px 0px 20px'
              }
            }}
          >
            <Box
              component="img"
              alt='logo'
              src={logo}
              sx={{
                width: {
                  lg: "85px",
                  md: "85px",
                  sm: "57px",
                  xs: "57px"
                },
                marginRight: {
                  lg: "13px",
                  md: "13px",
                  sm: "6px",
                  xs: "6px"
                }
              }}
            />
            <Box
              component="img"
              alt='logoText'
              src={spaceNet}
              sx={{
                width: {
                  lg: "262px",
                  md: "262px",
                  sm: "200px",
                  xs: "176px"
                }
              }}
            />
          </Box>
          <Stack direction="column"
            sx={{
              gap: "50px",
              padding: {
                lg: '83px 190px 0px 190px',
                md: '83px 100px 0px 100px',
                sm: '83px 25px 0px 25px',
                xs: '78px 0px 0px 25px'
              }
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: {
                    lg: "27px",
                    md: "27px",
                    sm: "20px",
                    xs: "20px"
                  },
                  fontFamily: "var(--English-font-semibold)"
                }}
              >
                Company
              </Typography>
              <Box sx={{
                overflowX: 'auto',
                display: 'flex',
                flexWrap: 'nowrap',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                marginTop: "10px"
              }}>
                <Stack direction="row" sx={{ gap: "12px" }}>
                  {companyLinks.map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index
                      }}
                      key={index}
                    >
                      <Button
                        onClick={()=>item.name !== 'Contact Us' ? handleClick(item.href) : setOpen(true)}
                        key={index}
                        variant="outlined"
                        sx={{
                          color: 'white',
                          border: '2px solid #FFFFFF',
                          borderRadius: '35px',
                          '&:hover': { borderColor: 'white' },
                          fontSize: {
                            lg: "21px",
                            md: "21px",
                            sm: "18px",
                            xs: "18px"
                          },
                          whiteSpace: 'nowrap',
                          padding: {
                            lg: "17px 22px 17px 22px",
                            md: "17px 22px 17px 22px",
                            sm: "11px 15px 11px 15px",
                            xs: "11px 15px 11px 15px"
                          }
                        }}
                      >
                        {item.name} &nbsp; <img alt='arrow' src={ArrowWight}></img>
                      </Button>
                    </motion.div>

                  ))}
                </Stack>
              </Box>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: {
                    lg: "27px",
                    md: "27px",
                    sm: "20px",
                    xs: "20px"
                  },
                  fontFamily: "var(--English-font-semibold)"
                }}
              >
                Services
              </Typography>
              <Box sx={{
                overflowX: 'auto',
                display: 'flex',
                flexWrap: 'nowrap',
                '&::-webkit-scrollbar': {
                  display: 'none'
                },
                marginTop: "10px"

              }}>
                <Stack direction="row" sx={{ gap: "12px" }}>
                  {servicesLinks.map((item, index, array) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{
                        opacity: 1
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index
                      }}
                      key={index}
                    >
                      <Button
                      onClick={()=>handleClick(item.href)}
                        key={index}
                        variant="outlined"
                        sx={{
                          color: 'white',
                          border: '2px solid #FFFFFF',
                          borderRadius: '35px',
                          '&:hover': { borderColor: 'white' },
                          fontSize: {
                            lg: "21px",
                            md: "21px",
                            sm: "18px",
                            xs: "18px"
                          },
                          whiteSpace: 'nowrap',
                          padding: {
                            lg: "17px 22px 17px 22px",
                            md: "17px 22px 17px 22px",
                            sm: "11px 15px 11px 15px",
                            xs: "11px 15px 11px 15px"
                          }

                        }}
                      >
                        {item.name} &nbsp; <img alt='arrow' src={ArrowWight}></img>
                      </Button>
                    </motion.div>

                  ))}
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            overflow: "hidden",
            width: "100%",
          }}
        >
          <motion.div
            animate={{ x: ['10%', '-100%'] }}
            transition={{
              repeat: Infinity,
              duration: 60,
              ease: "linear",
            }}
            style={{
              display: "flex",
              whiteSpace: "nowrap",
            }}
          >
            {[...Array(10)].map((_, index) => (
              <Typography
                key={index}
                sx={{
                  marginTop: {
                    lg: "102px",
                    md: "102px",
                    sm: "65px",
                    xs: "65px",
                  },
                  fontSize: {
                    lg: "75px",
                    md: "75px",
                    sm: "43px",
                    xs: "43px",
                  },
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  paddingRight: "50px",
                }}
              >
                Your <Box component="span"><span style={{ color: "#9D89FC" }}>[</span>All-in-One<span style={{ color: "#9D89FC" }}>]</span></Box> Tech Partner
              </Typography>
            ))}
          </motion.div>
        </Box>
      </Box>
    </>
  );
};

export default SpaceNetLayout;
