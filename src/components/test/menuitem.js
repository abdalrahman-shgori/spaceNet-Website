import * as React from "react";
import { motion } from "framer-motion";
import { AppBar, Toolbar, IconButton, Box, List, ListItem, Typography, useTheme, useMediaQuery, Drawer } from '@mui/material';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const menuItems = ['Home', 'SERVICES', 'MARKETPLACE', 'BLOG & NEWS', 'CONTACT US'];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
 
      <div  >
      {menuItems.map((text, index) => (
                                            <motion.div
                                                key={index}
                                                
                                            >
                                                <ListItem
                                                    button
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
      </div>
  
  );
};
