import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import blogImg from "../../assets/sectionsImages/blogsAndNews/blogsImage.svg"
import { useTranslation } from 'react-i18next';
const BlogCard = ({ blog }) => {
    const { t, i18n } = useTranslation()
    const lang = i18n.language
    const formatDate = (date, lang) => {
        const formattedDate = new Date(date).toLocaleDateString(lang, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return formattedDate;
    };
    return (
        <Card sx={{ borderRadius: "33px", background: "#FFFFFF" }}>
            <CardActionArea >
                <CardMedia
                    component="img"
                    //   height="160"
                    image={`https://admin.spacenetiq.com/uploads/article/${blog?.image_path}`}
                    alt={blog.title}
                />
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                        padding: {
                            lg: "27px 14px 27px 14px",
                            md: "27px 14px 27px 14px",
                            sm: "20px 16px 27px 16px",
                            xs: "20px 16px 27px 16px",
                        },

                    }}
                >
                    <Typography
                        sx={{
                            color: "#051A2F",
                            fontSize: {
                                lg: "13px",
                                md: "10px",
                                sm: "10px",
                                xs: "10px"
                            },
                            fontFamily: "var(--font-family)",

                        }}
                    >
                        {lang === 'ar' ? blog?.title_ar : lang === 'ku' ? blog?.title_ar : blog?.title} - {blog?.updated_at && formatDate(blog.updated_at, lang)}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#051A2F",
                            fontSize: {
                                lg: "24px",
                                md: "20px",
                                sm: "20px",
                                xs: "20px"
                            },
                            fontFamily: "var(--font-family)"
                        }}
                    >
                        {lang === 'ar' ? blog?.title_ar : lang === 'ku' ? blog?.title_ar : blog?.title}
                    </Typography>
                    <Typography sx={{
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        color: "#051A2F",
                        fontSize: {
                            lg: "12px",
                            md: "12px",
                            sm: "12px",
                            xs: "12px"
                        },
                        fontFamily: "var(--font-family)",

                    }}>
                        {lang === 'ar' ? blog?.short_desc_ar : lang === 'ku' ? blog?.short_desc_ku : blog?.short_desc}
                    </Typography>
                    <Typography
                        sx={{
                            color: "#096FCF",
                            fontSize: {
                                lg: "9px",
                                md: "12px",
                                sm: "12px",
                                xs: "12px"
                            },
                            fontFamily: "var(--font-family)",
                            textDecoration: "underline",
                            marginTop: {
                                lg: "unset",
                                md: "unset",
                                sm: "unset",
                                xs: "24px"
                            }
                        }}
                    >
                        Read More
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default BlogCard;
