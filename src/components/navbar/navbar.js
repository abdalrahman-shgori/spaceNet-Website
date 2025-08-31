import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, IconButton, Box, List, ListItem, Typography, useTheme, useMediaQuery, Drawer } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import "../../assets/styles/variables.css";
import { motion } from 'framer-motion';
import FaceBookSvg from '../../assets/socialMediaIcons/facebook';
import InstaSvg from '../../assets/socialMediaIcons/instaGram';
import LinkedInSvg from '../../assets/socialMediaIcons/linkedIn';
import PaintrestSvg from '../../assets/socialMediaIcons/paintrest';
import WhatsAppSvg from '../../assets/socialMediaIcons/whatsApp';
import SvgSpaceNetLogo from '../../assets/spacenetLogo/spacenet';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const NavBar = ({
    setDrawerOpen,
    setOpen,
    anchorEl,
    setAnchorEl
}) => {
    const { t } = useTranslation()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const theme = useTheme();
    const location = useLocation();
    const { pathname } = location;

   

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isTabScreen = useMediaQuery(theme.breakpoints.only('md'));
    const menuItems = [
        { text: t("navbar.Home"), route: '/' },
        // { text: 'SERVICES', route: '/services' },
        // { text: 'MARKETPLACE', route: '/marketplace' },
        // { text: t("spacenetLayout.BlogNews"), route: '/blogs' },
        { text: t("navbar.CONTACTUS") },
        { text: t("navbar.COMINGSOON"), route: '/' },

    ];
    const socialMedia = [
        { icon: <FaceBookSvg />, link: "https://www.facebook.com/share/19yTYEYifS/?mibextid=wwXIfr", },
        { icon: <InstaSvg />, link: "https://www.instagram.com/spacenetiq/profilecard/?igsh=MWYxc2dldmFzamV2OQ==", },
        { icon: <LinkedInSvg />, link: "https://www.linkedin.com/company/spacenetiq/", },
        { icon: <PaintrestSvg />, link: "https://www.pinterest.com/spacenetiq/", },
        { icon: <WhatsAppSvg />, link: "https://wa.me/9647505550558", },
    ];

    const toggleDrawer = (open) => {
        setIsDrawerOpen(open);
        setDrawerOpen(open);
    };

    const handleCloseDrawer = () => {
        toggleDrawer(false);
        setDrawerOpen(false);
    };
  
    const is14Inch = useMediaQuery(theme.breakpoints.down("1390"));
    const ExtraSmallScreen = useMediaQuery(theme.breakpoints.down("360"));
    const { i18n } = useTranslation()
    const dir = i18n.dir()

 
    return (
        <>
            <AppBar
                className='root-container'
                position="static"
                sx={{
                    background: 'transparent',
                    boxShadow: 'none',
                    border: 'none',
                    padding: {
                        lg: is14Inch ? '55px 75px 0px 75px' : '55px 75px 0px 75px',
                        md: '55px 75px 0px 75px',
                        sm: '45px 25px 0px 25px',
                        xs: '25px 25px 0px 25px'
                    },
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: "0px",
                        paddingLeft: "0px !important",
                        paddingRight: "0px !important",
                    }}
                >
                    <SvgSpaceNetLogo />
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <LanguageSwitcher anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>
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
                                        position: "relative",
                                        left: dir === 'rtl' ? "-10px" : "10px"
                                    }}
                                >
                                    <MenuRoundedIcon
                                        sx={{
                                            width: {
                                                lg: 35,
                                                sm: 35,
                                                xs: 35
                                            },
                                            height: {
                                                lg: 35,
                                                sm: 35,
                                                xs: 35
                                            },
                                            color: pathname === '/' ? theme.palette.primary.BurgerMenu : theme.palette.text.BurgerMenu
                                        }} />
                                </IconButton>
                            </Box>

                            <motion.div
                                initial={{ opacity: 0, x: isSmallScreen ? '-100%' : '100%' }}
                                animate={{ opacity: isDrawerOpen ? 1 : 0, x: isDrawerOpen ? 0 : isSmallScreen ? '-100%' : '100%' }}
                                transition={{ duration: 0.5 }}
                            >

                                <Drawer
                                    anchor={isSmallScreen ? dir === 'rtl' ? "right" : "left" : dir === 'rtl' ? "left" : "right"}
                                    open={isDrawerOpen}
                                    onClose={handleCloseDrawer}
                                    PaperProps={{
                                        sx: {
                                            width: isSmallScreen ? "80%" : isTabScreen ? '60%' : is14Inch ? "45%" : "42%",
                                            height: '100%',
                                            overflow: 'auto',
                                            boxShadow: '0 0 20px rgba(0,0,0,0.1)',
                                            background: "#fff",
                                            clipPath: isSmallScreen ? 'none' :
                                                dir === 'rtl' ?
                                                    'ellipse(100% 75% at 0% 50%)'
                                                    :
                                                    'ellipse(100% 75% at 100% 50%)',

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
                                                top: '60px',
                                                right: dir === 'ltr' && '55px',
                                                left: dir === 'rtl' && '55px',
                                                color: theme.palette.text.primary,
                                                display: isSmallScreen ? "none" : "flex"
                                            }}
                                        >
                                            <CloseRoundedIcon sx={{
                                                width: {
                                                    lg: 35,
                                                },
                                                height: {

                                                    lg: 35,
                                                },
                                                color: "#000000"
                                            }} />
                                        </IconButton>

                                        <List sx={{ flexGrow: 1, marginTop: "50px" }}>

                                            {menuItems.map(({ text, route }, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: -20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                >
                                                    <Link to={route}>
                                                        <ListItem
                                                            button
                                                            onClick={() => {
                                                                toggleDrawer(false);
                                                                setDrawerOpen(false);
                                                                if (text === t("navbar.CONTACTUS")) {
                                                                    setOpen(true)
                                                                }
                                                            }}
                                                            sx={{
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
                                                                        lg: is14Inch ? "40px" : "44px",
                                                                        md: "30px",
                                                                        sm: "28px",
                                                                        xs: ExtraSmallScreen ? "24px" : "28px",
                                                                    },
                                                                    color: "var(--Menu-Text-Color)",
                                                                    fontFamily: "var(--English-font)",
                                                                    fontWeight: "600",
                                                                    textAlign: "center",
                                                                    transition: 'color 0.3s ease',
                                                                    '&:hover': {
                                                                        color: theme.palette.mode === 'light' ? "#9D89FC" : "#E9FA50",
                                                                    },
                                                                    cursor: "pointer",
                                                                    whiteSpace: "nowrap"
                                                                }}
                                                            >
                                                                {text}

                                                            </Typography>
                                                        </ListItem>
                                                    </Link>

                                                </motion.div>
                                            ))}
                                        </List>

                                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: ExtraSmallScreen ? "6px" : "13px", marginBottom: '10px' }}>
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
                                        <Box
                                          onClick={() => {
                                            toggleDrawer(false);
                                            setDrawerOpen(false);
                                        }}
                                        component={Link} to="/privacy" sx={{ display: 'flex', justifyContent: 'center', marginBottom: "20px" }}>
                                            <Typography
                                                sx={{
                                                    textDecoration: "underline",
                                                    color: "#000000",
                                                    fontSize: "16px",
                                                    fontFamily: "var(--English-font), Arial, sans-serif"
                                                }}
                                            >
                                                {t("navbar.PrivacyPolicy")}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Drawer>
                            </motion.div>
                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBar;
