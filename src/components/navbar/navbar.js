import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, List, ListItem, Typography, useTheme, useMediaQuery, Drawer } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import spaceNetLogo from "../../assets/spacenetLogo/spaceNetLogo.svg";
import spaceNetLogoBlack from "../../assets/spacenetLogo/spaceNetLogoBlack.svg";
import "../../assets/styles/variables.css";
import { motion } from 'framer-motion';
import Toggle from '../toggleCompoent/toggle';
import FaceBookSvg from '../../assets/socialMediaIcons/facebook';
import InstaSvg from '../../assets/socialMediaIcons/instaGram';
import LinkedInSvg from '../../assets/socialMediaIcons/linkedIn';
import PaintrestSvg from '../../assets/socialMediaIcons/paintrest';
import WhatsAppSvg from '../../assets/socialMediaIcons/whatsApp';
import SvgSpaceNetLogo from '../../assets/spacenetLogo/spacenet';

const NavBar = ({setDrawerOpen}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const theme = useTheme();
    const ThemeCheck = theme.palette.mode;
    const menuItems = ['Home', 'SERVICES', 'MARKETPLACE', 'BLOG & NEWS', 'CONTACT US'];

    const socialMedia = [
        { icon: <FaceBookSvg />, link: "", },
        { icon: <InstaSvg />, link: "", },
        { icon: <LinkedInSvg />, link: "", },
        { icon: <PaintrestSvg />, link: "", },
        { icon: <WhatsAppSvg />, link: "", },

    ];

    const toggleDrawer = (open) => {
        setIsDrawerOpen(open);
        setDrawerOpen(true)
    };

    const handleCloseDrawer = () => {
        setIsExiting(true);
        setTimeout(() => {
            toggleDrawer(false);
            setIsExiting(false);
            setDrawerOpen(false)

        }, 500);
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isTabScreen = useMediaQuery(theme.breakpoints.only('md'));

    return (
        <>
            <AppBar position="static"
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    border: 'none',
                    padding: {
                         lg: '55px 75px 178px 75px',
                          md: '55px 75px 115px 75px',
                           sm: '45px 25px 115px 25px',
                            xs: '45px 25px 115px 25px' 
                        }
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: "0px",
                        paddingLeft: "0px !important",
                        paddingRight: "0px !important",
                    }}
                >
                    
<SvgSpaceNetLogo/>
                    <Box>
                        <Box sx={{ position: 'relative' }}>
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label={isDrawerOpen ? "close menu" : "open menu"}
                                onClick={() => toggleDrawer(!isDrawerOpen)}
                                sx={{
                                    padding: "0px !important",
                                    margin: "0px !important",
                                    transition: 'transform 0.3s ease',
                                    transform: isDrawerOpen ? 'rotate(90deg)' : 'rotate(0)',
                                    position:"relative",
                                    left:"10px"
                                }}
                            >
                                <MenuRoundedIcon
                                    sx={{
                                        width: 35,
                                        height: 35,
                                        color: theme.palette.mode === 'light' ? '#051A2F' : '#FFFFFF'
                                    }} />
                            </IconButton>
                        </Box>

                        <motion.div
                            initial={{ opacity: 0, x: isSmallScreen ? '-100%' : '100%' }}
                            animate={{ opacity: isDrawerOpen ? 1 : 0, x: isDrawerOpen ? 0 : isSmallScreen ? '-100%' : '100%' }}
                            exit={{ opacity: 0, x: isSmallScreen ? '-100%' : '100%' }}
                            transition={{ duration: 0.5 }}
                        >
                            <Drawer
                                anchor={isSmallScreen ? "left" : "right"}
                                open={isDrawerOpen}
                                onClose={handleCloseDrawer}
                                PaperProps={{
                                    sx: {
                                        width: isSmallScreen ? "80%" : isTabScreen ? '60%' : "42%",
                                        height: '100%',
                                        overflow: 'hidden',
                                        boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                                        background: "#fff",
                                        clipPath: isSmallScreen ? 'none' : 'ellipse(100% 75% at 100% 50%)',

                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '20px',
                                        justifyContent: "center",
                                        alignItems: "center",
                                        color: "#000",
                                        position: 'relative',
                                        height: '100%',
                                    }}
                                >
                                    <IconButton
                                        onClick={handleCloseDrawer}
                                        sx={{
                                            position: 'absolute',
                                            top: '50px',
                                            right: '65px',
                                            color: theme.palette.text.primary,
                                            display: isSmallScreen ? "none" : "flex"
                                        }}
                                    >
                                        <CloseRoundedIcon sx={{ width: 40, height: 35,color:"#000000" }} />
                                    </IconButton>

                                    <List sx={{ flexGrow: 1, marginTop: "50px" }}>
                                        {menuItems.map((text, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={!isExiting ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                            >
                                                <ListItem
                                                    button
                                                    onClick={() => {
                                                        toggleDrawer(false);
                                                        setDrawerOpen(false);
                                                    }}                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: isSmallScreen ? "start" : 'center',
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                        },
                                                    }}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                lg: "44px",
                                                                md: "30px",
                                                                sm: "28px",
                                                                xs: "28px",
                                                            },
                                                            color: "var(--Menu-Text-Color)",
                                                            fontFamily: "var(--English-font-semibold)",
                                                            textAlign: "center",
                                                            transition: 'color 0.3s ease',
                                                            '&:hover': {
                                                                color: theme.palette.mode === 'light' ? "#9D89FC" : "#E9FA50",
                                                            },
                                                            cursor: "pointer"
                                                        }}
                                                    >
                                                        {text}
                                                    </Typography>
                                                </ListItem>
                                            </motion.div>
                                        ))}
                                    </List>

                                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: "13px", marginBottom: '10px' }}>
                                        {socialMedia.map((item, index) => (
                                            <Box
                                                component="a"
                                                key={index}
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener"
                                                sx={{ color: item.color, cursor: "pointer" }}
                                            >
                                                {item.icon}
                                            </Box>
                                        ))}
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: "20px" }}>
                                        <Typography
                                            sx={{
                                                textDecoration: "underline",
                                                color: "#000000",
                                                fontSize: "16px",
                                                fontFamily: "var(--English-font)"
                                            }}
                                        >
                                            Privacy Policy
                                        </Typography>
                                    </Box>
                                </Box>
                            </Drawer>
                        </motion.div>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;
