import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import blogImage from '../../assets/sectionsImages/blogsAndNews/blogsImage.svg';

const FeaturedBlog = ({ blog }) => {
    return (
        <Paper sx={{ backgroundColor: '#9D89FC', borderRadius: { lg: "68px", md: "46px", sm: "35px", xs: "46px" } }}>
            <Grid container sx={{ height: '100%' }}>
                <Grid item lg={6} md={6} sm={12}
                    sx={{
                        order: {
                            xs: 1,
                            sm: 1,
                            md: 2,
                            lg: 2
                        },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Box component="img" src={blogImage} alt={blog.title}
                        sx={{
                            maxWidth: '100%',
                            borderRadius: { lg: '8px', md: '8px', sm: "35px", xs: '0px' },
                            objectFit: "cover",
                            aspectRatio: {
                                lg: 'unset',
                                md: "unset",
                                sm: "3/1",
                                xs: "unset"
                            }
                        }} />
                </Grid>

                <Grid item lg={6} md={6} sm={12}
                    sx={{
                        order: {
                            xs: 2,
                            sm: 2,
                            md: 1,
                            lg: 1
                        },
                        padding: {
                            lg: "61px 34px 0px 34px",
                            md: "40px 34px 0px 34px",
                            sm: "35px 19px 44px 19px",
                            xs: "35px 19px 35px 19px",
                        },
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontSize: {
                                    lg: "22px",
                                    md: "18px",
                                    sm: "14px",
                                    xs: "14px"
                                },
                                fontFamily: "var(--font-family)"
                            }}
                        >
                            {blog.category}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontSize: {
                                    lg: "44px",
                                    md: "38px",
                                    sm: "24px",
                                    xs: "24px"
                                },
                                fontFamily: "var(--font-family)",
                                padding: "10px 0px 10px 0px"
                            }}
                        >
                            {blog.title}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontSize: {
                                    lg: "19px",
                                    md: "14px",
                                    sm: "14px",
                                    xs: "14px"
                                },
                                fontFamily: "var(--font-family)"
                            }}
                        >
                            {blog.description}
                        </Typography>
                    </Box>
                    <Typography
                        sx={{
                            color: "#051A2F",
                            opacity: "0.6",
                            fontSize: {
                                lg: "22px",
                                md: "18px",
                                sm: "14px",
                                xs: "14px"
                            },
                            fontFamily: "var(--font-family)",
                            marginTop: 'auto',
                            position: "relative",
                            bottom: {
                                lg: 33,
                                md: 15,
                                sm: -15,
                                xs: -15
                            },
                        }}
                    >
                        {blog.date}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FeaturedBlog;
