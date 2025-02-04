import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import blogImage from '../../assets/sectionsImages/blogsAndNews/blogsImage.svg';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const FeaturedBlog = ({ blog }) => {
    const { t, i18n } = useTranslation()
    const navigate = useNavigate();
    const lang = i18n.language
    const formatDate = (date, lang) => {
        const formattedDate = new Date(date).toLocaleDateString(lang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return formattedDate;
    };
    const handleReadMore = () => {
        navigate(`/blogs/${blog.id}`);
    };
    return (
        <Paper onClick={handleReadMore} sx={{
            backgroundColor: '#9D89FC',
            borderRadius: { lg: "68px", md: "46px", sm: "35px", xs: "46px" },
            height: '100%',
            cursor: "pointer"
        }}>
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
                    <Box component="img" loading='lazy' src={`https://admin.spacenetiq.com/uploads/article/${blog?.image_path}`}
                        alt={blog?.title}
                        sx={{
                            maxWidth: '100%',
                            height: '100%',
                            borderRadius: { lg: '68px', md: '46px', sm: "35px", xs: '46px' },
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
                            {blog?.category}
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
                            {lang === 'ar' ? blog?.title_ar : lang === 'ku' ? blog?.title_ar : blog?.title}
                        </Typography>
                        <Typography
                            sx={{
                                wordBreak: "break-all",
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
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: lang === 'ar' ? blog?.short_desc_ar : lang === 'ku' ? blog?.short_desc_ku : blog?.short_desc
                                }}
                            />
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
                        {blog?.updated_at ? formatDate(blog.updated_at, lang) : 'No date available'}

                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default FeaturedBlog;
