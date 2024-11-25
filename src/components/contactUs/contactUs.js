import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton'; 
import { Button, Grid, TextField, useTheme } from '@mui/material';
import EmailIcon from "../../assets/contactUs/emailIcon.svg"
import FaceBookSvg from '../../assets/socialMediaIcons/facebook';
import InstaSvg from '../../assets/socialMediaIcons/instaGram';
import LinkedInSvg from '../../assets/socialMediaIcons/linkedIn';
import PaintrestSvg from '../../assets/socialMediaIcons/paintrest';
import WhatsAppSvg from '../../assets/socialMediaIcons/whatsApp';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {motion} from "framer-motion"
const style = {
  
    width: "100%",
    bgcolor: 'background.paper',
   overflowY:"auto",
   padding:{
    lg:"74px 0px 74px 0px",
    md:"74px 20px 74px 20px",
    sm:"74px 20px 74px 20px",
    xs:"100px 20px 30px 20px"
   },
   height:"100dvh",
   borderRadius:"none"
};

const closeIconStyle = {
   
};

const contactUsWays = [
    { id: 0, img: EmailIcon, title: "www.spacenetiq.com" },
    { id: 1, img: EmailIcon, title: "+964 (0) 750 555 0558" },
    { id: 2, img: EmailIcon, title: <>empire business towers <br/> building T4, floor 13, office 3. </> },
]
const socialMedia = [
    { icon: <FaceBookSvg />, link: "", },
    { icon: <InstaSvg />, link: "", },
    { icon: <LinkedInSvg />, link: "", },
    { icon: <PaintrestSvg />, link: "", },
    { icon: <WhatsAppSvg />, link: "", },
];
const fieldTextStyle={
    fontSize:{
        lg:"15px",
        md:"15px",
        sm:"14px",
        xs:"14px"
    },
    fontFamily:"var(--English-font-semibold)",
    lineHeight:{
        lg:"21px",
        md:"21px",
        sm:"14px",
        xs:"14px"
    },
    color:"#000000"
}
const textFieldStyle={
    mt:{
        lg:"6px",
        md:"6px",
        sm:"6px",
        xs:"4px"
    },
    mb:{
        lg: "13px",
        md: "13px",
        sm: "13px",
        xs: "15px"
    },
    background: "#FFFFFF",
    borderRadius: "19.22px",
    '& .MuiOutlinedInput-root': {
      borderRadius: '19.22px',
      '& fieldset': {
        border: 'none', 
      },
      '&:hover fieldset': {
        border: 'none',
      },
      '&.Mui-focused fieldset': {
        border: 'none', 
      },
     '& .MuiInputBase-input::placeholder': {
      color: '#29547E',
      fontFamily:"var(--English-font)"
    },
    },
}
export default function BasicModal({ setOpen, open }) {
    const handleClose = () => setOpen(false);
    const theme = useTheme()

    return (
        <motion.div
       
        >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
               
            >
                 <motion.div
    initial={{ x: '-100vw' }} // Start from the left (off the screen)
    animate={{ x: open ? 0 : "-100vw" }}        // Animate to its original position
    transition={{ duration: 0.5 }} 
     
        >
                <Box sx={style}>
                  <Box sx={{position:"relative"}}>
                  <Box
                    sx={{
                        display:"flex",
                        justifyContent:"end",
                        paddingRight:{
                            lg:"38px",
                            md:"0px",
                            sm:"0px",
                            xs:"0px"
                        },
                        position:"absolute",
                       right:0,
                       top:{
                        lg:-20,
                        md:-20,
                        sm:-20,
                        xs:-70
                       }
                    }}
                    >
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            display:"grid",
                            alignContent:"end",
                            background:"#A3A3A3",
                            ":hover":{
                                background:"#A3A3A3"
                            }
                        }} 
                    >
                        <CloseRoundedIcon
                         sx={{
                            fontSize:{lg:"30px",md:"30px",sm:"25px",xs:"25px"},
                            color:theme.palette.mode === 'dark' ? "#051A2F" : "#FFFFFF"
                            }}/>
                    </IconButton>
                    </Box>
                  </Box>
                  
                    <Grid
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: {
                                lg: "37px",
                                md: "37px",
                                sm: "23px",
                                xs: "23px"
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: "64px",
                                    md: "48px",
                                    sm: "28px",
                                    xs: "24px"
                                },
                                maxWidth: {
                                    lg: "980px",
                                    md: "680px",
                                    sm: "525px",
                                    xs: "325px"
                                },
                                width: "100%",
                                textAlign: "center",
                                fontFamily: "var(--English-font)",
                                lineHeight: {
                                    lg: "69px",
                                    md: "69px",
                                    sm: "30px",
                                    xs: "30px"
                                },
                                position:"relative"
                               
                            }}
                        >
                            Encourage Innovation in Your Business-Contact Us

                     
                        </Typography>
                     
                        <Box
                            sx={{
                                background: "#9D89FC",
                                padding: {
                                    lg: "83px 106px 28px 106px",
                                    md: "83px 106px 28px 106px",
                                    sm: "50px 34px 50px 34px",
                                    xs: "50px 34px 50px 25px",
                                },
                                borderRadius: {
                                    lg: "48px",
                                    md: "48px",
                                    sm: "30px",
                                    xs: "30px"
                                },
                                maxWidth: "1133px",
                                width: "100%",
                                height:{
                                    lg:"100%",
                                    md:"100%",
                                    sm:"100%",
                                    xs:"unset"
                                }
                            }}
                        >
                            <Grid container>

                                <Grid item lg={6} md={6} sm={6} xs={12}
                                sx={{
                                    paddingRight:{
                                        lg:"unset",
                                        md:"unset",
                                        sm:"20px",
                                        xs:"unset"
                                    }
                                }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: {
                                                lg: "18px",
                                                md: "18px",
                                                sm: "12px",
                                                xs: "12px"
                                            }
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: "28px",
                                                    md: "28px",
                                                    sm: "24px",
                                                    xs: "24px"
                                                },
                                                fontFamily: "var(--English-font-semibold)",
                                                textTransform: "capitalize",
                                                color:"#000000"
                                            }}
                                        >
                                            get in Touch
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: "15px",
                                                    md: "15px",
                                                    sm: "16px",
                                                    xs: "16px"
                                                },
                                                color: "#FFFFFF",
                                                fontFamily: "var(--English-font)",
                                                maxWidth: {
                                                    lg: "310px",
                                                    md: "310px",
                                                    sm: "275px",
                                                    xs: "275px"
                                                },
                                                width: "100%"
                                            }}
                                        >
                                            Lorem  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text eve 1500s.                                    </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            marginTop: {
                                                lg: "44px",
                                                md: "44px",
                                                sm: "44px",
                                                xs: "50px"
                                            }
                                        }}
                                    >
                                        {contactUsWays.map((item, index) => (
                                            <>
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: {
                                                            lg: "9px",
                                                            md: "9px",
                                                            sm: "7px",
                                                            xs: "7px"
                                                        },
                                                        marginTop: {
                                                            lg: index > 0 && "9.6px",
                                                            md: index > 0 && "9.6px",
                                                            sm: index > 0 && "7.6px",
                                                            xs: index > 0 && "7.6px"
                                                        }

                                                    }}
                                                >
                                                    <img src={item.img} />
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                lg: "19px",
                                                                md: "19px",
                                                                sm: "15px",
                                                                xs: "15px"
                                                            },
                                                            fontFamily: "var(--English-font)",
                                                            color: "#FFFFFF"
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Box>

                                            </>

                                        ))}
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "14px",
                                            marginTop: {
                                                lg: "33px",
                                                md: "33px",
                                                sm: "50px",
                                                xs: "50px"
                                            }
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {
                                                    lg: "19px",
                                                    md: "19px",
                                                    sm: "17px",
                                                    xs: "17px"
                                                },
                                                fontFamily: "var(--English-font-semibold)",
                                                color: "#051A2F",
                                                lineHeight: {
                                                    lg: "21px",
                                                    md: "21px",
                                                    sm: "19.8px",
                                                    xs: "19.8px"
                                                }
                                            }}
                                        >
                                            Follow Us
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: "9px", }}>
                                            {socialMedia.map((item, index) => (
                                                <Box
                                                    component="a"
                                                    key={index}
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener"
                                                    sx={{
                                                        color: item.color,
                                                        cursor: "pointer",

                                                    }}
                                                >
                                                    {item.icon}
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>

                                </Grid>
                                <Grid item lg={6} md={6} sm={6} xs={12}>
                                <Box>
              <Typography 
               sx={{
                fontSize: {
                    lg: "28px",
                    md: "28px",
                    sm: "24px",
                    xs: "24px"
                },
                fontFamily: "var(--English-font-semibold)",
                textTransform: "capitalize",
                marginTop:{
                    lg:"unset",
                    md:"unset",
                    sm:"unset",
                    xs:"67px"
                },
                color:"#000000"
            }}
              >
                Send A Message
              </Typography>
                <Box
                sx={{
                    marginTop:{
                        lg:"37px",
                        md:"37px",
                        sm:"37px",
                        xs:"21px"
                    }
                }}
                >
                    <Box>
                    <Typography sx={{...fieldTextStyle}}>Name</Typography>
                    <TextField
  fullWidth
  placeholder="Your Name"
  sx={{
 ...textFieldStyle
  }}
/>

                    </Box>
                    <Box>
                    <Typography sx={{...fieldTextStyle}}>Email</Typography>
                    <TextField 
                    fullWidth
                     placeholder='Your Email'
                     sx={{
                        ...textFieldStyle
                         }}
                       />
                    </Box>
                    <Box>
                    <Typography sx={{...fieldTextStyle}}>Message</Typography>
                    <TextField
                     fullWidth
                      multiline
                       rows={4}
                       placeholder="Your Message"
                       sx={{
                        ...textFieldStyle
                         }}
                        />
                    </Box>
           
                </Box>
             <Box
             sx={{
                display:"flex",
                justifyContent:"end",
                marginTop:{
                    lg:"30px",
                    md:"30px",
                    sm:"30px",
                    xs:"32px"
                }
             }}
             >
             <Button
                  sx={{
                     bgcolor: '#000',
                      color: '#fff',
                      width:"fit-content",
                      padding:{
                        lg:"12px 27px 12px 27px",
                        md:"12px 27px 12px 27px",
                        sm:"12px 27px 12px 27px",
                        xs:"9px 21px 9px 21px"
                      },
                      fontSize:{
                        lg:"17px",
                        md:"17px",
                        sm:"17px",
                        xs:"13.5px"
                      },
                      fontFamily:"var(--English-font-semibold)",
                      borderRadius:"34px",
                      textTransform: "capitalize",
                    }}>
                Submit Now
              </Button>
             </Box>
            
            </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Box>
                </motion.div>
            </Modal>
        </motion.div>
    );
}
