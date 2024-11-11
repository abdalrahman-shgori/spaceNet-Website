import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import logo from "../assets/sectionsImages/sapceLogo.svg";
import {motion} from "framer-motion"
import ArrowWight from "../assets/sectionsImages/spacenetLayoutArrow.svg";
import spaceNet from "../assets/spacenetLogo/spaceNetLogoWhite.svg"
const SpaceNetLayout = () => {
  return (
    <>
    <Box
    sx={{
        backgroundColor: '#051A2F',

    }}
    >
        <Box sx={{
         color: 'white',
        
       }}>
      {/* Logo Section */}
      <Box display="flex" justifyContent="flex-start" alignItems="center"
      sx={{
        padding: {
          lg: '70px 75px 0px 75px',
          md: '70px 75px 0px 75px',
          sm: '70px 25px 0px 25px',
          xs: '78px 0px 0px 25px'
        }
      }}
      >
  <Box
        component="img"
        src={logo}
      sx={{
        width:{
          lg:"85px",
          md:"85px",
          sm:"57px",
          xs:"57px"
        },
        marginRight:{
          lg:"13px",
          md:"13px",
          sm:"6px",
          xs:"6px"
        }
      }}
        />        <Box
        component="img"
        src={spaceNet}
      sx={{
        width:{
          lg:"262px",
          md:"262px",
          sm:"200px",
          xs:"176px"
        }
      }}
        />
       
      </Box>

      {/* Company and Services Sections */}
      <Stack direction="column" 
      sx={{
      
        gap:"50px",
        
          padding: {
            lg: '83px 190px 0px 190px',
            md: '83px 100px 0px 100px',
            sm: '83px 25px 0px 25px',
            xs: '78px 0px 0px 25px'
          }
      
      }}
      >
        {/* Company Section */}
        <Box>
          <Typography 
         sx={{
            fontSize:{
                lg:"27px",
                md:"27px",
                sm:"20px",
                xs:"20px"
            },
            fontFamily:"var(--English-font-semibold)"
           }}
           >
            Company
            </Typography>
          <Box sx={{
              overflowX: 'auto', 
              display: 'flex', 
              flexWrap: 'nowrap',
              '&::-webkit-scrollbar': {
                display: 'none' // Hide the scrollbar
              },
              marginTop:"10px"
            }}>
            <Stack direction="row" sx={{gap:"12px"}}>
              {['Home', 'Services', 'Marketplace', 'Blog & News', 'Contact Us'].map((item, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    color: 'white',
                    border: '2px solid #FFFFFF',
                    borderRadius: '35px',
                    '&:hover': { borderColor: 'white' },
                    fontSize: {
                        lg:"21px",
                        md:"21px",
                        sm:"18px",
                        xs:"18px"
                    },
                    whiteSpace: 'nowrap',
                    padding:{
                        lg:"17px 22px 17px 22px",
                        md:"17px 22px 17px 22px",
                        sm:"11px 15px 11px 15px",
                        xs:"11px 15px 11px 15px"
                    }
                  }}
                >
                  {item} &nbsp; <img src={ArrowWight}></img>
                </Button>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Services Section */}
        <Box>
          <Typography
           sx={{
            fontSize:{
                lg:"27px",
                md:"27px",
                sm:"20px",
                xs:"20px"
            },
            fontFamily:"var(--English-font-semibold)"
           }}
            >
                Services
                </Typography>
          <Box sx={{
              overflowX: 'auto', 
              display: 'flex', 
              flexWrap: 'nowrap',
              '&::-webkit-scrollbar': {
                display: 'none' // Hide the scrollbar
              },
              marginTop:"10px"

            }}>
            <Stack direction="row" sx={{gap:"12px"}}>
              {['Academics', 'Internet', 'Software', 'Design & Branding'].map((item, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  sx={{
                    color: 'white',
                    border: '2px solid #FFFFFF',
                    borderRadius: '35px',
                    '&:hover': { borderColor: 'white' },
                    fontSize: {
                        lg:"21px",
                        md:"21px",
                        sm:"18px",
                        xs:"18px"
                    },                    
                    whiteSpace: 'nowrap',
                    padding:{
                        lg:"17px 22px 17px 22px",
                        md:"17px 22px 17px 22px",
                        sm:"11px 15px 11px 15px",
                        xs:"11px 15px 11px 15px"
                    }
 
                  }}
                >
                  {item} &nbsp; <img src={ArrowWight}></img>
                </Button>
              ))}
            </Stack>
          </Box>
        </Box>
      </Stack>

      {/* Tagline */}
    
    </Box>
    <Box 
  sx={{
    display: "flex",
    alignItems: "flex-end",
    overflow: "hidden", // Prevents any overflow of the text
  }}
>
<motion.div


whileInView={{
    x: ["0%", "2%", "-1%", '-27%' , "-30%" , '0%'], // Slightly increase range to make the movement feel more fluid
    transition: {
      duration: 10, 
      repeatType: "loop", 
      repeat: Infinity, 
      ease: "linear",
    },
  }}
  
  
    >
      <Typography
        sx={{
          marginTop:{
            lg:"102px",
            md:"102px",
            sm:"65px",
            xs:"65px"
          },
          fontSize:{
            lg: "75px",
            md: "75px",
            sm: "43px",
            xs: "43px"
          },
          color: "#FFFFFF",
          whiteSpace: "nowrap", // Keeps the text on a single line
          '&::-webkit-scrollbar': {
            display: 'none', // Hide the scrollbar
          },
          overflow: "hidden", // Ensures text doesn't overflow
        }}
      >
          Your <Box component="span"><span style={{ color: "#9D89FC" }}>[</span>All-in-One<span style={{ color: "#9D89FC" }}>]</span></Box> Tech Partner
    Your <Box component="span"><span style={{ color: "#9D89FC" }}>[</span>All-in-One<span style={{ color: "#9D89FC" }}>]</span></Box> Tech Partner
    Your <Box component="span"><span style={{ color: "#9D89FC" }}>[</span>All-in-One<span style={{ color: "#9D89FC" }}>]</span></Box> Tech Partner
    Your <Box component="span"><span style={{ color: "#9D89FC" }}>[</span>All-in-One<span style={{ color: "#9D89FC" }}>]</span></Box> Tech Partner
      </Typography>
    </motion.div>
 
</Box>

    </Box>
    
    </>
   
  );
};

export default SpaceNetLayout;
